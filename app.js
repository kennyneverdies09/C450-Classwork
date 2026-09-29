import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';
import { createGameRecord, validateGameRecords } from './data/game-record.js';
import { createGameState } from './data/game-state.js';
import { STORAGE_KEY, loadStorageSnapshot, saveStorageSnapshot } from './data/storage.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive(createGameState());

    fetch('data/items-template.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data, errors }) => {
            if (errors.length > 0) {
              itemsStore.error = 'There was a problem reading the CSV data.';
              itemsStore.items = [];
            } else {
              const records = data.map((row) => {
                const game = createGameRecord({
                  id: String(row.id || '').trim(),
                  title: String(row.title || row.name || '').trim(),
                  coverImage: String(row.cover_image || row.image_url || '').trim(),
                  description: String(row.description || '').trim(),
                  genre: String(row.genre || row.category || '').trim(),
                  releaseYear: Number(row.release_year),
                  releaseDate: String(row.release_date || '').trim(),
                  releasePlatforms: String(row.release_platforms || '')
                    .split('|')
                    .map((platform) => platform.trim())
                    .filter(Boolean),
                  platforms: String(row.platforms || '')
                    .split('|')
                    .map((platform) => platform.trim())
                    .filter(Boolean),
                  platformOwnership: Object.fromEntries(
                    String(row.platform_ownership || '')
                      .split('|')
                      .map((entry) => {
                        const [platform, ownershipTypes] = entry.split(':');
                        return [
                          platform?.trim(),
                          ownershipTypes?.split('+').map((ownershipType) => ownershipType.trim()).filter(Boolean),
                        ];
                      })
                      .filter(([platform, ownershipTypes]) => platform && ownershipTypes?.length),
                  ),
                  owned: String(row.owned || '').trim() === 'true',
                  status: String(row.status || '').trim(),
                  favorite: String(row.favorite || '').trim() === 'true',
                  completionPercentage: String(row.completion_percentage || '').trim()
                    ? Number(row.completion_percentage)
                    : null,
                });

                return {
                  ...game,
                  name: game.title,
                  imageUrl: game.coverImage,
                  category: game.genre,
                  location: 'Local library',
                };
              });

              const validation = validateGameRecords(records);

              if (!validation.valid) {
                itemsStore.error = 'There was a problem validating the game data.';
                itemsStore.items = [];
              } else {
                itemsStore.items = records;
                itemsStore.error = '';

                let rawSavedState = '';

                try {
                  rawSavedState = localStorage.getItem(STORAGE_KEY) || '';
                } catch {
                  rawSavedState = '';
                }

                loadStorageSnapshot(
                  itemsStore,
                  rawSavedState,
                  records.map((record) => record.id),
                );
              }
            }
            itemsStore.isLoading = false;
          },
          error: () => {
            itemsStore.error = 'There was a problem parsing CSV data.';
            itemsStore.items = [];
            itemsStore.isLoading = false;
          },
        });
      })
      .catch(() => {
        itemsStore.error = 'There was a problem loading data.';
        itemsStore.items = [];
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);

    Vue.watch(
      () => [itemsStore.items, itemsStore.viewPreference],
      () => saveStorageSnapshot(itemsStore),
      { deep: true },
    );

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
