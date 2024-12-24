<template>
  <section class="intro-section flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen bg-gray-900 text-gray-300 px-6 lg:px-20">
    <!-- Text Section -->
    <div class="text-section max-w-2xl lg:mr-10 text-center lg:text-left">
      <h1 class="text-5xl font-extrabold text-green-400 mb-6">Bringing Your Ideas to Life</h1>
      <h2 class="text-3xl font-semibold mb-4">Modern Web Development with Vue.js</h2>
      <p class="text-lg leading-relaxed mb-6">
        I’m a frontend developer passionate about crafting high-quality, responsive, and performance-driven web applications.
        Leveraging technologies like <span class="text-green-400">Vue.js</span> and <span class="text-blue-400">TailwindCSS</span>,
        I deliver tailored solutions that align with your business goals. Together, let’s create something extraordinary.
      </p>
      <button  class="cta-btn bg-green-400 text-gray-900 font-bold py-3 px-6 rounded-md shadow-lg hover:bg-green-500 transition duration-300">
        <a href="ContactView.vue">Let's Collaborate</a>
      </button>
    </div>

    <!-- Icons Section -->
    <div class="icons-section relative w-72 h-72 flex items-center justify-center lg:ml-10">
      <img
        src="@/assets/img/Vue.js.png"
        alt="Vue.js"
        class="icon absolute top-0 left-0 animate-spin-slow transform hover:scale-125 transition duration-300"
      />
      <img
        src="@/assets/img/JavaScript.png"
        alt="JavaScript"
        class="icon absolute bottom-0 right-0 animate-spin-slow transform hover:scale-125 transition duration-300"
      />
      <img
        src="@/assets/img/TailwindCSS.png"
        alt="Tailwind CSS"
        class="icon absolute top-10 right-10 animate-spin-slow transform hover:scale-125 transition duration-300"
      />
    </div>
  </section>
</template>

<script setup>
// Aucun script spécifique nécessaire pour ce composant statique
</script>

<style scoped>
a {
  color: #000000;
  text-decoration: none;
}
/* Section principale */
.intro-section {
  background: radial-gradient(circle, #1f2937, #000); /*Gradient moderne */
}

/* Section texte */
.text-section h1 {
  color: #10b981; /* Vert vif pour un impact visuel */
}

.text-section h2 {
  color: #ffffff;
}

.text-section p {
  color: #d1d5db;
}

.cta-btn {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.cta-btn:hover {
  transform: translateY(-3px);
}

/* Section des icônes */
.icons-section .icon {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease-in-out, filter 0.3s;
  filter: grayscale(50%);
}

.icons-section .icon:hover {
  filter: grayscale(0%);
  transform: scale(1.2);
}

@keyframes spinSlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 12s linear infinite;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .intro-section {
    flex-direction: column;
    text-align: center;
  }

  .text-section {
    margin-bottom: 2rem;
  }

  .icons-section {
    width: 200px;
    height: 200px;
  }

  .icons-section .icon {
    width: 50px;
    height: 50px;
  }
}
</style>
