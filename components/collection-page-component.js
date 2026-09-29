import { GAME_STATUSES } from '../data/game-record.js';
import { getGameArt } from '../data/game-art.js';

export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const platformOptions = Vue.computed(() => {
      return [...new Set(itemsStore.items.flatMap((game) => game.platforms))].sort();
    });

    return {
      itemsStore,
      statusOptions: GAME_STATUSES,
      platformOptions,
      gameArt: getGameArt,
    };
  },
  template: /* html */ `
    <section class="container py-4 collection-page" aria-labelledby="collection-heading">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 id="collection-heading" class="h3 mb-0">Collection</h1>
        <span class="badge text-bg-light border">{{ itemsStore.filterGames().length }} shown</span>
      </div>

      <p class="text-muted">Browse a simple dataset loaded from a CSV file.</p>

      <div id="library-controls" class="library-controls mb-3" aria-label="Library controls">
        <fieldset class="btn-group" role="group">
          <legend class="visually-hidden">Collection view</legend>
          <button
            type="button"
            class="btn"
            :class="itemsStore.viewPreference === 'card' ? 'btn-primary' : 'btn-outline-primary'"
            :aria-pressed="itemsStore.viewPreference === 'card'"
            @click="itemsStore.setViewPreference('card')">
            Card view
          </button>
          <button
            type="button"
            class="btn"
            :class="itemsStore.viewPreference === 'list' ? 'btn-primary' : 'btn-outline-primary'"
            :aria-pressed="itemsStore.viewPreference === 'list'"
            @click="itemsStore.setViewPreference('list')">
            List view
          </button>
        </fieldset>

        <div class="mt-3">
          <label for="game-search" class="form-label">Search by game title</label>
          <input
            id="game-search"
            v-model="itemsStore.searchTerm"
            type="search"
            class="form-control"
            placeholder="Search by game title" />
        </div>

        <div class="row g-3 mt-1">
          <div class="col-12 col-md-4">
            <label for="status-filter" class="form-label">Status</label>
            <select id="status-filter" v-model="itemsStore.statusFilter" class="form-select">
              <option value="">All statuses</option>
              <option v-for="status in statusOptions" :key="status" :value="status">
                {{ status }}
              </option>
            </select>
          </div>

          <div class="col-12 col-md-4">
            <label for="platform-filter" class="form-label">Platform</label>
            <select id="platform-filter" v-model="itemsStore.platformFilter" class="form-select">
              <option value="">All platforms</option>
              <option v-for="platform in platformOptions" :key="platform" :value="platform">
                {{ platform }}
              </option>
            </select>
          </div>

          <div class="col-12 col-md-4 d-flex align-items-end">
            <div class="form-check mb-2">
              <input id="favorites-filter" v-model="itemsStore.favoritesOnly" class="form-check-input" type="checkbox" />
              <label for="favorites-filter" class="form-check-label">Favorites</label>
            </div>
          </div>
        </div>
      </div>

      <div
        id="active-filters"
        v-if="itemsStore.searchTerm.trim() || itemsStore.statusFilter || itemsStore.platformFilter || itemsStore.favoritesOnly"
        class="active-filters mb-3"
        aria-live="polite">
        <strong>Active filters:</strong>
        <span v-if="itemsStore.searchTerm.trim()" class="badge text-bg-secondary ms-1">
          Search: {{ itemsStore.searchTerm.trim() }}
        </span>
        <span v-if="itemsStore.statusFilter" class="badge text-bg-secondary ms-1">
          Status: {{ itemsStore.statusFilter }}
        </span>
        <span v-if="itemsStore.platformFilter" class="badge text-bg-secondary ms-1">
          Platform: {{ itemsStore.platformFilter }}
        </span>
        <span v-if="itemsStore.favoritesOnly" class="badge text-bg-secondary ms-1">
          Favorites
        </span>
      </div>

      <div id="collection-feedback" aria-live="polite">
        <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
          Loading items...
        </div>

        <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
          {{ itemsStore.error }}
        </div>

        <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
          No items found in the dataset.
        </div>

        <div
          v-else-if="itemsStore.filterGames().length === 0"
          class="alert alert-warning d-flex justify-content-between align-items-center gap-3"
          role="alert">
          <span>No games found for the current search or filters.</span>
          <button type="button" class="btn btn-outline-secondary btn-sm" @click="itemsStore.resetFilters()">
            Clear search and filters
          </button>
        </div>
      </div>

      <div
        v-if="
          !itemsStore.isLoading &&
          !itemsStore.error &&
          itemsStore.filterGames().length > 0 &&
          itemsStore.viewPreference === 'card'
        "
        id="collection-area"
        class="collection-area row g-3"
        aria-label="Game collection">
        <div class="col-12 col-md-6 col-lg-4" v-for="game in itemsStore.filterGames()" :key="game.id">
          <article class="card h-100 shadow-sm border-0">
            <div
              class="game-cover collection-card-image"
              :class="'game-cover-' + game.id"
              role="img"
              :aria-label="'Original placeholder art for ' + game.title">
              <span class="game-cover-icon">{{ gameArt(game.id).icon }}</span>
              <span class="game-cover-caption">{{ gameArt(game.id).caption }}</span>
            </div>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h2 class="h5 card-title mb-0">{{ game.title }}</h2>
                <span class="badge text-bg-primary ms-2">{{ game.genre || 'General' }}</span>
              </div>

              <p class="card-text text-muted flex-grow-1 collection-description">
                {{ game.description || 'No description available.' }}
              </p>

              <div class="small mb-3">
                <p class="mb-1"><strong>Ownership:</strong> {{ game.owned ? 'Owned' : 'Not owned' }}</p>
                <p class="mb-1"><strong>Platforms:</strong> {{ game.platforms.length ? game.platforms.join(', ') : 'None' }}</p>
                <p class="mb-1"><strong>Status:</strong> {{ game.status }}</p>
                <p class="mb-0"><strong>Favorite:</strong> {{ game.favorite ? 'Yes' : 'No' }}</p>
              </div>

              <div class="d-grid">
                <router-link
                  :to="'/items/' + game.id"
                  class="btn btn-outline-secondary btn-sm"
                  :aria-label="'View details for ' + game.title">
                  View details
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div
        v-if="
          !itemsStore.isLoading &&
          !itemsStore.error &&
          itemsStore.filterGames().length > 0 &&
          itemsStore.viewPreference === 'list'
        "
        id="list-area"
        class="list-area list-group"
        aria-label="Game collection list">
        <article
          v-for="game in itemsStore.filterGames()"
          :key="game.id"
          class="list-group-item d-flex align-items-center gap-3">
          <div
            class="game-cover list-item-image rounded"
            :class="'game-cover-' + game.id"
            role="img"
            :aria-label="'Original placeholder art for ' + game.title">
            <span class="game-cover-icon">{{ gameArt(game.id).icon }}</span>
            <span class="game-cover-caption">{{ gameArt(game.id).caption }}</span>
          </div>

          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start gap-2">
              <h2 class="h5 mb-1">{{ game.title }}</h2>
              <span class="badge text-bg-primary">{{ game.genre || 'General' }}</span>
            </div>
            <p class="small mb-1"><strong>Ownership:</strong> {{ game.owned ? 'Owned' : 'Not owned' }}</p>
            <p class="small mb-1"><strong>Platforms:</strong> {{ game.platforms.length ? game.platforms.join(', ') : 'None' }}</p>
            <p class="small mb-1"><strong>Status:</strong> {{ game.status }}</p>
            <p class="small mb-0"><strong>Favorite:</strong> {{ game.favorite ? 'Yes' : 'No' }}</p>
          </div>

          <router-link
            :to="'/items/' + game.id"
            class="btn btn-outline-secondary btn-sm flex-shrink-0"
            :aria-label="'View details for ' + game.title">
            View details
          </router-link>
        </article>
      </div>
    </section>
  `,
};
