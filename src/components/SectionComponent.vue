<template>
  <section class="about-page w-full">
    <!-- Starry Background -->
    <div class="star-background"></div>

    <!-- Content -->
    <div class="content-container">
      <!-- Text Content -->
      <div class="text-content">
        <h2>Welcome, I'm</h2>
        <h1>Andrix Ngoyi</h1>
        <h3>Web Developer & Front-End Specialist</h3>
        <p>
          I specialize in building dynamic, responsive, and performance-driven web solutions. By leveraging modern
          technologies like Vue.js, TailwindCSS, and other industry-standard frameworks, I craft seamless user
          experiences and scalable applications tailored to meet specific business needs.
        </p>
        <p>
          With a strong passion for clean code and elegant design, I thrive on turning complex ideas into intuitive and
          visually compelling digital platforms. Whether it's developing a robust web application, optimizing
          performance, or creating a unique user interface, I am dedicated to delivering results that exceed
          expectations.
        </p>
        <p>
          Feel free to explore my <a href="ProjectView.vue">portfolio of projects</a> and see how my expertise can add value
          to your business. Let's work together to transform your vision into an innovative digital solution that drives
          growth and success.
        </p>
      </div>

      <!-- Image -->
      <div class="image-container">
        <img src="@/assets/img/and1.jpg" alt="Andrix Ngoyi" class="animated-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun script nécessaire pour ce composant statique
</script>

<style scoped>
/* Section principale */
.about-page {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 4rem 2rem; /* Ajout de padding en haut pour le décalage */
  margin-top: 2rem; /* Marge supérieure supplémentaire pour un décalage global */
  color: #fff;
  box-sizing: border-box;
  text-align: center;
}

/* Conteneur principal */
.content-container {
  display: flex;
  flex-direction: row; /* Texte et image côte à côte par défaut */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
}

/* Texte */
.text-content {
  flex: 1; /* Occupe la moitié de l'espace */
  text-align: left; /* Alignement gauche sur grand écran */
}

.text-content h1 {
  font-size: 3rem;
  color: #00ff00;
  margin-bottom: 1rem;
}

.text-content h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #ccc;
}

.text-content h3 {
  font-size: 1.5rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.text-content p {
  margin: 1rem 0;
  line-height: 1.6;
  font-size: 1.1rem;
}

/* Image */
.image-container {
  flex: 1; /* Occupe l'autre moitié de l'espace */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem; /* Espacement sur mobile */
}

.image-container img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out, transform 0.3s;
  animation: fadeIn 1s ease-in-out; /* Animation d'entrée */
}

.image-container img:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media screen and (max-width: 768px) {
  .content-container {
    flex-direction: column; /* Texte et image empilés sur mobile */
  }

  .text-content {
    text-align: center; /* Centre le texte sur mobile */
    margin-bottom: 1rem;
  }

  .image-container {
    margin-top: 1rem;
  }
}
</style>
