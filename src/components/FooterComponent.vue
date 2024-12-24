<template>
  <footer class="footer bg-gray-900 bg-opacity-80 text-gray-300 py-8">
    <!-- Sections -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-12 max-w-7xl mx-auto">
      <!-- Section Logo -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">Andrix Ng</h2>
        <p class="text-sm">
          Thank you for visiting my portfolio. Contact me for your web development projects.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li v-for="link in links" :key="link.name">
            <a
              :href="link.href"
              class="hover:text-green-400 transition-transform transform hover:translate-x-1 duration-300"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Services</h3>
        <ul class="space-y-2">
          <li class="hover:text-green-400 transition duration-300">Frontend Development</li>
          <li class="hover:text-green-400 transition duration-300">Vue.js Applications</li>
          <li class="hover:text-green-400 transition duration-300">Responsive Design</li>
          <li class="hover:text-green-400 transition duration-300">Performance Optimization</li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Follow Me</h3>
        <div class="flex space-x-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            target="_blank"
            class="text-2xl hover:text-green-400 transform hover:scale-110 duration-300"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 my-6 mx-4 lg:mx-8"></div>

    <!-- Copyright -->
    <div class="text-center text-sm text-white">
      &copy; {{ new Date().getFullYear() }} Andrix Ng || All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'projects', href: '/projet' },
 // { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andrix-ngoyi-469662321', icon: 'fab fa-linkedin' },
  { name: 'GitHub', href: 'https://github.com/AndrixNg1', icon: 'fab fa-github' },
  { name: 'Instagram', href: 'https://www.instagram.com/andrix_ngoyi', icon: 'fab fa-instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61569133838440', icon: 'fab fa-facebook' },
];
</script>

<style scoped>
/* Footer styles */
.footer {
  background: radial-gradient(ellipse at bottom, #1f2937, #000);
  color: #d1d5db;
  width: 100%;
  box-sizing: border-box;
}

/* Liens */
.footer a {
  color: #d1d5db;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.footer a:hover {
  background-color: rgba(34, 211, 153, 0.2);
  color: #34d399;
  transform: translateX(4px);
}

/* Icônes */
.footer i {
  transition: transform 0.3s ease-in-out;
}

.footer i:hover {
  transform: scale(1.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .footer .grid {
    grid-template-columns: 1fr; /* Colonne unique pour les mobiles */
    text-align: center;
  }
  .footer h2 {
    text-align: center;
  }
  .footer .flex {
    justify-content: center;
  }
  .footer .space-y-2 {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
