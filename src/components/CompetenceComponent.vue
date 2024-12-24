<template>
  <section class="skills py-12 bg-gray-900 text-gray-300 overflow-hidden">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold text-white mb-6">Languages & Technologies</h2>
      <p class="mb-12 text-lg">Here are some of the programming languages and technologies I know.</p>

      <!-- Conteneur du défilement -->
      <div class="marquee-wrapper">
        <div class="marquee" @mouseover="pauseScroll" @mouseleave="startScroll">
          <div class="marquee-content">
            <div v-for="(language, index) in duplicatedLanguages" :key="index" class="skill-item group">
              <div class="icon-container">
                <i :class="language.icon" class="text-4xl group-hover:text-green-400 transition-all duration-300"></i>
                <span class="text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {{ language.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Liste des technologies
const languages = ref([
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "TailwindCSS", icon: "fab fa-tailwindcss" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "Vue.js", icon: "fab fa-vuejs" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Nuxt.js", icon: "fas fa-circle" },
]);

// Dupliquer les éléments pour un défilement continu
const duplicatedLanguages = computed(() => [...languages.value, ...languages.value]);

// Pause et reprise de l'animation
const pauseScroll = () => {
  const marquee = document.querySelector(".marquee-content");
  marquee.style.animationPlayState = "paused";
};

const startScroll = () => {
  const marquee = document.querySelector(".marquee-content");
  marquee.style.animationPlayState = "running";
};
</script>

<style scoped>
/* Section principale */
.skills {
  background: radial-gradient(ellipse at bottom, #1f2937, #000);
  color: #d1d5db;
  padding: 5rem 1rem;
  overflow: hidden;
}

/* Conteneur du défilement */
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Animation du défilement */
.marquee {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
}

.marquee-content {
  display: inline-flex;
  animation: marquee-scroll 10s linear infinite;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Icônes et conteneurs */
.skill-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: scale(1.2);
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.icon-container i {
  color: #38bdf8;
  transition: color 0.3s ease, transform 0.3s ease;
}

.icon-container i:hover {
  color: #16a34a;
  transform: scale(1.3);
}

.icon-container span {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.icon-container:hover span {
  opacity: 1;
}
</style>
