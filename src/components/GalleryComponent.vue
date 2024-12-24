<template>
  <div>
    <!-- About Section -->
    <section class="about-section w-full bg-gray-800 text-white py-20 px-4 lg:px-8">
      <div class="container mx-auto text-center mb-16">
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl mb-8">About Me</h2>
        <p class="text-lg text-gray-400 mb-12">
          Hello, I'm <span class="text-indigo-500 font-semibold">Andrix Ng</span>, a passionate web developer with a focus on creating beautiful, functional, and user-friendly designs. I thrive on bringing ideas to life and constantly seek to innovate and grow in the tech industry.
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery w-full bg-gray-900 text-white py-8 px-4 lg:px-8">
      <div
        class="gallery-container"
        ref="galleryContainer"
        @mouseenter="stopScrolling"
        @mouseleave="startScrolling"
      >
        <div
          v-for="(image, index) in [...images, ...images]"
          :key="index"
          class="gallery-item"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            class="gallery-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = ref([
  { src: 'src/assets/img/and1.jpg', alt: 'Image 1' },
  { src: 'src/assets/img/and2.jpg', alt: 'Image 2' },
  { src: 'src/assets/img/vers.jpg', alt: 'Image 3' },
  { src: 'src/assets/img/WhatsApp Image 2024-11-20 at 20.16.27_29c683f9.jpg', alt: 'Image 4' },
  { src: 'src/assets/img/and1.jpg', alt: 'Image 5' },
  { src: 'src/assets/img/and2.jpg', alt: 'Image 6' },
]);

const galleryContainer = ref(null);
let scrollInterval;

const startScrolling = () => {
  // Créer un intervalle pour défiler automatiquement
  scrollInterval = setInterval(() => {
    if (galleryContainer.value) {
      galleryContainer.value.scrollLeft += 3; // Ajuste la vitesse ici
      // Réinitialiser le défilement pour l'effet infini
      if (
        galleryContainer.value.scrollLeft >=
        galleryContainer.value.scrollWidth / 2
      ) {
        galleryContainer.value.scrollLeft = 0;
      }
    }
  }, 10); // Intervalle de temps pour un défilement fluide
};

const stopScrolling = () => {
  clearInterval(scrollInterval);
};

onMounted(() => {
  startScrolling(); // Démarrage automatique du défilement
});

onBeforeUnmount(() => {
  stopScrolling(); // Nettoyage de l'intervalle
});
</script>

<style scoped>
/* About Section */
.about-section {
  background-color: #080808;
  color: #fff;
  padding-top: 5rem; /* Ajouter du rembourrage en haut */
}

.about-section .container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Gallery Section */
.gallery-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: hidden; /* Cache les bords inutiles */
  scroll-behavior: smooth;
  white-space: nowrap; /* Maintient les éléments sur une seule ligne */
  position: relative;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  width: 16rem;
  height: auto;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(80%);
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.gallery-img:hover {
  filter: grayscale(0%);
  transform: scale(1.1);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .gallery-container {
    gap: 1rem;
  }

  .gallery-item {
    width: 12rem;
  }
}
</style>
