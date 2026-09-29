export function createGameState(initialItems = []) {
  return {
    items: initialItems,
    isLoading: true,
    error: '',
    viewPreference: 'card',
    searchTerm: '',
    statusFilter: '',
    platformFilter: '',
    favoritesOnly: false,
    setViewPreference(view) {
      if (!['card', 'list'].includes(view)) {
        return false;
      }

      this.viewPreference = view;
      return true;
    },
    filterGames() {
      const normalizedSearch = this.searchTerm.trim().toLowerCase();

      return this.items.filter((game) => {
        const matchesSearch = !normalizedSearch || game.title.toLowerCase().includes(normalizedSearch);
        const matchesStatus = !this.statusFilter || game.status === this.statusFilter;
        const matchesPlatform = !this.platformFilter || game.platforms.includes(this.platformFilter);
        const matchesFavorites = !this.favoritesOnly || game.favorite;

        return matchesSearch && matchesStatus && matchesPlatform && matchesFavorites;
      });
    },
    resetFilters() {
      this.searchTerm = '';
      this.statusFilter = '';
      this.platformFilter = '';
      this.favoritesOnly = false;
    },
    updateGame(gameId, changes) {
      const gameIndex = this.items.findIndex((game) => game.id === gameId);

      if (gameIndex === -1) {
        return false;
      }

      const updatedGame = {
        ...this.items[gameIndex],
        ...changes,
      };

      if (Array.isArray(changes.platforms)) {
        updatedGame.platforms = [...changes.platforms];
      }

      this.items.splice(gameIndex, 1, updatedGame);
      return true;
    },
  };
}
