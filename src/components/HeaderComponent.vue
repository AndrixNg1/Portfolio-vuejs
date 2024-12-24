<template>
  <header class="nav-bar fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-md">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="flex items-center">
        <span class="text-green-500 text-2xl font-bold">Andrix Ng</span>
      </div>

      <!-- Menu Hamburger et Icônes des Réseaux Sociaux -->

      <div class="flex items-center gap-6">

        <!-- Réseaux sociaux (visible uniquement sur desktop) -->
        <div class="hidden md:flex gap-4">
          <a
            href="https://github.com/AndrixNg1"
            target="_blank"
            class="social-icon"
            aria-label="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/andrix-ngoyi-469662321"
            target="_blank"
            class="social-icon"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569133838440"
            target="_blank"
            class="social-icon"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/andrix_ngoyi"
            target="_blank"
            class="social-icon"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <!-- Menu Hamburger -->
        <button
          @click="toggleMenu"
          class="text-white focus:outline-none"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8 hover:stroke-green-400 transition duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>


    <!-- Menu mobile -->
    <nav
      :class="['mobile-menu', menuOpen ? 'block' : 'hidden']"
      class="absolute top-16 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li>
          <router-link
            to="/"
            class="nav-link"
            @click.native="toggleMenu"
          >Home</router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="nav-link"
            @click.native="toggleMenu"
          >About</router-link>
        </li>
        <li>
          <router-link
            to="/projet"
            class="nav-link"
            @click.native="toggleMenu"
          >Projects</router-link>
        </li>
        <!--<li>
          <router-link
            to="/blog"
            class="nav-link"
            @click.native="toggleMenu"
          >Blog</router-link>
        </li>-->
        <li>
          <router-link
            to="/contact"
            class="nav-link"
            @click.native="toggleMenu"
          >Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // État du menu mobile
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Styles principaux */
.nav-bar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.nav-bar:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

/* Liens de navigation */
.nav-link {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #d1d5db;
  padding: 0.5rem 1rem;
  transition: color 0.3s, transform 0.3s;
}

.nav-link:hover {
  color: #22c55e;
  transform: scale(1.1);
}

/* Icônes des réseaux sociaux */
.social-icon {
  font-size: 1.5rem;
  color: #d1d5db;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: #22c55e;
  transform: scale(1.2);
}

/* Menu mobile */
.mobile-menu {
  display: none; /* Masqué par défaut */
  background: linear-gradient(to bottom, #000, #111);
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.3s ease-in-out;
}

.mobile-menu.block {
  display: block; /* Affiché lorsque menuOpen est vrai */
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}
</style>
