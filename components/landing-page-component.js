export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <h1 class="mb-3">VGC Library</h1>
      <p class="lead">Keep your games organized by platform, ownership, status, progress, and favorites.</p>
      <router-link to="/items" class="btn btn-primary mb-4"><i class="bi bi-list-check me-1"></i>Open the Library</router-link>

      <h2 class="h4 mt-3">Your Collection</h2>
      <p>
        Browse a local collection of games, find a title quickly, and review its ownership and platform details.
      </p>
      <p>
        Select a game to view its details, status, progress, release information, and platform-specific ownership.
      </p>
    </div>
  `,
};
