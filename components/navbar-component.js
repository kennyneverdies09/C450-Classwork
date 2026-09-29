export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top vgc-navbar px-3">
      <span class="navbar-brand vgc-brand mb-0 h1"><i class="bi bi-controller me-2"></i>VGC Library</span>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn vgc-nav-link btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="btn vgc-nav-link btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-card-list me-1"></i>Items
        </router-link>
        <router-link class="btn vgc-nav-link btn-sm" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
      </div>
    </nav>
  `,
};
