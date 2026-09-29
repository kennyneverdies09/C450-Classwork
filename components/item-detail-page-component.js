import {
  COMPLETION_MAX,
  COMPLETION_MIN,
  GAME_STATUSES,
  OWNERSHIP_TYPES,
} from '../data/game-record.js';
import { getGameArt } from '../data/game-art.js';

export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });
    const selectedStatus = Vue.ref('');
    const selectedCompletion = Vue.ref(null);
    const completionError = Vue.ref('');
    const selectedFavorite = Vue.ref(false);
    const selectedOwned = Vue.ref(false);
    const selectedPlatforms = Vue.ref([]);
    const selectedPlatformOwnership = Vue.ref({});
    const availablePlatforms = Vue.computed(() => {
      return [...new Set(itemsStore.items.flatMap((game) => game.platforms))].sort();
    });

    Vue.watch(
      selectedItem,
      (item) => {
        selectedStatus.value = item?.status || '';
        selectedCompletion.value = item?.completionPercentage ?? null;
        completionError.value = '';
        selectedFavorite.value = item?.favorite || false;
        selectedOwned.value = item?.owned || false;
        selectedPlatforms.value = item?.platforms ? [...item.platforms] : [];
        selectedPlatformOwnership.value = Object.fromEntries(
          Object.entries(item?.platformOwnership || {}).map(([platform, ownershipTypes]) => [
            platform,
            [...ownershipTypes],
          ]),
        );
      },
      { immediate: true },
    );

    const updateSelectedStatus = () => {
      if (selectedItem.value) {
        itemsStore.updateGame(selectedItem.value.id, {
          status: selectedStatus.value,
        });
      }
    };

    const updateSelectedCompletion = () => {
      if (selectedItem.value && selectedStatus.value === 'Playing') {
        if (
          !Number.isInteger(selectedCompletion.value) ||
          selectedCompletion.value < COMPLETION_MIN ||
          selectedCompletion.value > COMPLETION_MAX
        ) {
          completionError.value = 'Enter a whole number from 0 to 100.';
          selectedCompletion.value = selectedItem.value.completionPercentage;
          return;
        }

        completionError.value = '';
        itemsStore.updateGame(selectedItem.value.id, {
          completionPercentage: selectedCompletion.value,
        });
      }
    };

    const updateSelectedFavorite = () => {
      if (selectedItem.value) {
        itemsStore.updateGame(selectedItem.value.id, {
          favorite: selectedFavorite.value,
        });
      }
    };

    const toggleSelectedFavorite = () => {
      selectedFavorite.value = !selectedFavorite.value;
      updateSelectedFavorite();
    };

    const updateSelectedOwnership = () => {
      if (selectedItem.value) {
        if (!selectedOwned.value) {
          selectedPlatforms.value = [];
          selectedPlatformOwnership.value = {};
        } else {
          selectedPlatformOwnership.value = Object.fromEntries(
            selectedPlatforms.value.map((platform) => [
              platform,
              selectedPlatformOwnership.value[platform] || ['Digital'],
            ]),
          );
        }

        itemsStore.updateGame(selectedItem.value.id, {
          owned: selectedOwned.value,
          platforms: [...selectedPlatforms.value],
          platformOwnership: Object.fromEntries(
            Object.entries(selectedPlatformOwnership.value).map(([platform, ownershipTypes]) => [
              platform,
              [...ownershipTypes],
            ]),
          ),
        });
      }
    };

    const updateSelectedPlatforms = () => {
      if (selectedItem.value && selectedOwned.value) {
        selectedPlatformOwnership.value = Object.fromEntries(
          selectedPlatforms.value.map((platform) => [
            platform,
            selectedPlatformOwnership.value[platform] || ['Digital'],
          ]),
        );

        itemsStore.updateGame(selectedItem.value.id, {
          platforms: [...selectedPlatforms.value],
          platformOwnership: Object.fromEntries(
            Object.entries(selectedPlatformOwnership.value).map(([platform, ownershipTypes]) => [
              platform,
              [...ownershipTypes],
            ]),
          ),
        });
      }
    };

    const updateSelectedPlatformOwnership = (platform, ownershipType) => {
      if (selectedItem.value && selectedOwned.value) {
        const currentTypes = selectedPlatformOwnership.value[platform] || ['Digital'];
        const nextTypes = currentTypes.includes(ownershipType)
          ? currentTypes.filter((currentType) => currentType !== ownershipType)
          : [...currentTypes, ownershipType];

        if (nextTypes.length === 0) {
          return;
        }

        nextTypes.sort((firstType, secondType) => {
          return OWNERSHIP_TYPES.indexOf(firstType) - OWNERSHIP_TYPES.indexOf(secondType);
        });

        selectedPlatformOwnership.value = {
          ...selectedPlatformOwnership.value,
          [platform]: nextTypes,
        };

        itemsStore.updateGame(selectedItem.value.id, {
          platformOwnership: Object.fromEntries(
            Object.entries(selectedPlatformOwnership.value).map(([platformName, ownershipTypes]) => [
              platformName,
              [...ownershipTypes],
            ]),
          ),
        });
      }
    };

    return {
      itemsStore,
      selectedItem,
      selectedStatus,
      selectedCompletion,
      completionError,
      selectedFavorite,
      selectedOwned,
      selectedPlatforms,
      selectedPlatformOwnership,
      availablePlatforms,
      statusOptions: GAME_STATUSES,
      ownershipTypes: OWNERSHIP_TYPES,
      updateSelectedStatus,
      updateSelectedCompletion,
      updateSelectedFavorite,
      toggleSelectedFavorite,
      updateSelectedOwnership,
      updateSelectedPlatforms,
      updateSelectedPlatformOwnership,
      gameArt: getGameArt,
    };
  },
  template: /* html */ `
    <section class="container py-4 detail-page" aria-labelledby="detail-heading">
      <nav class="detail-navigation mb-3" aria-label="Detail navigation">
        <router-link to="/items" class="btn btn-link ps-0">← Back to collection</router-link>
      </nav>

      <div id="detail-feedback" aria-live="polite">
        <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
          Loading item details...
        </div>

        <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
          {{ itemsStore.error }}
        </div>

        <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
          Item not found.
        </div>
      </div>

      <article
        v-if="!itemsStore.isLoading && !itemsStore.error && selectedItem"
        id="detail-area"
        class="detail-area card shadow-sm border-0 overflow-hidden">
        <div
          class="game-cover item-detail-image w-100"
          :class="'game-cover-' + selectedItem.id"
          role="img"
          :aria-label="'Original placeholder art for ' + selectedItem.title">
          <span class="game-cover-icon">{{ gameArt(selectedItem.id).icon }}</span>
          <span class="game-cover-caption">{{ gameArt(selectedItem.id).caption }}</span>
        </div>

        <div class="card-body p-4">
          <div class="d-flex align-items-center gap-2 mb-2">
            <button
              id="favorite-toggle"
              type="button"
              class="btn btn-link p-0 favorite-toggle"
              :aria-pressed="selectedFavorite"
              :aria-label="selectedFavorite ? 'Remove from Favorites' : 'Add to Favorites'"
              @click="toggleSelectedFavorite">
              <i :class="selectedFavorite ? 'bi bi-star-fill' : 'bi bi-star'" aria-hidden="true"></i>
            </button>
            <h1 id="detail-heading" class="h3 mb-0">{{ selectedItem.title }}</h1>
            <span class="badge text-bg-primary">{{ selectedItem.genre || 'General' }}</span>
          </div>

          <p class="lead mb-3">{{ selectedItem.description || 'No description available.' }}</p>
          <div class="small">
            <p class="mb-1"><strong>Ownership:</strong> {{ selectedItem.owned ? 'Owned' : 'Not owned' }}</p>
            <p class="mb-1"><strong>Platforms:</strong> {{ selectedItem.platforms.length ? selectedItem.platforms.join(', ') : 'None' }}</p>
            <p v-if="selectedItem.platforms.length" class="mb-1">
              <strong>Platform ownership:</strong>
              <span v-for="(platform, platformIndex) in selectedItem.platforms" :key="platform">
                {{ platform }}: {{ selectedItem.platformOwnership[platform].join(' + ') }}<span v-if="platformIndex < selectedItem.platforms.length - 1">, </span>
              </span>
            </p>
            <p class="mb-1"><strong>Status:</strong> {{ selectedItem.status }}</p>
            <p class="mb-1"><strong>Favorite:</strong> {{ selectedItem.favorite ? 'Yes' : 'No' }}</p>
            <p class="mb-1"><strong>Release date:</strong> {{ selectedItem.releaseDate }}</p>
            <p v-if="selectedItem.releasePlatforms.length" class="mb-1">
              <strong>Release platforms:</strong> {{ selectedItem.releasePlatforms.join(', ') }}
            </p>
            <p v-if="selectedItem.status === 'Playing' && selectedItem.completionPercentage !== null" class="mb-1">
              <strong>Completion:</strong> {{ selectedItem.completionPercentage }}%
            </p>
            <p class="text-muted mt-2 mb-0"><strong>Game ID:</strong> {{ selectedItem.id }}</p>
          </div>

          <div class="mt-4">
            <label for="status-editor" class="form-label">Change status</label>
            <select
              id="status-editor"
              v-model="selectedStatus"
              class="form-select"
              @change="updateSelectedStatus">
              <option v-for="status in statusOptions" :key="status" :value="status">
                {{ status }}
              </option>
            </select>
          </div>

          <div v-if="selectedStatus === 'Playing'" class="mt-4">
            <label for="completion-editor" class="form-label">Completion percentage</label>
            <input
              id="completion-editor"
              v-model.number="selectedCompletion"
              type="number"
              class="form-control"
              inputmode="numeric"
              min="0"
              max="100"
              step="1"
              :aria-invalid="Boolean(completionError)"
              aria-describedby="completion-error"
              @change="updateSelectedCompletion" />
            <p v-if="completionError" id="completion-error" class="text-danger mt-1 mb-0" role="alert">
              {{ completionError }}
            </p>
          </div>

          <div class="mt-4">
            <span class="form-label d-block">Ownership</span>
            <div class="form-check">
              <input
                id="owned-editor"
                v-model="selectedOwned"
                class="form-check-input"
                type="checkbox"
                @change="updateSelectedOwnership" />
              <label for="owned-editor" class="form-check-label">Owned</label>
            </div>

            <fieldset class="mt-3" :disabled="!selectedOwned">
              <legend class="form-label">Owned platforms</legend>
              <div v-for="platform in availablePlatforms" :key="platform" class="form-check">
                <input
                  :id="'platform-editor-' + platform"
                  v-model="selectedPlatforms"
                  class="form-check-input"
                  type="checkbox"
                  :value="platform"
                  @change="updateSelectedPlatforms" />
                <label :for="'platform-editor-' + platform" class="form-check-label">{{ platform }}</label>
                <div v-if="selectedPlatforms.includes(platform)" class="ms-4 mt-1">
                  <span class="form-label small d-block">Ownership type for {{ platform }}</span>
                  <div class="btn-group btn-group-sm" role="group" :aria-label="'Ownership type for ' + platform">
                    <button
                      v-for="ownershipType in ownershipTypes"
                      :key="ownershipType"
                      type="button"
                      class="btn"
                      :class="selectedPlatformOwnership[platform].includes(ownershipType) ? 'btn-primary' : 'btn-outline-primary'"
                      :aria-pressed="selectedPlatformOwnership[platform].includes(ownershipType)"
                      @click="updateSelectedPlatformOwnership(platform, ownershipType)">
                      {{ ownershipType }}
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

        </div>
      </article>
    </section>
  `,
};
