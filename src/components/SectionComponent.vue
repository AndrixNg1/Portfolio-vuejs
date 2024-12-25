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
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  /* Décalage de la section vers le bas */
  margin-top: 10vh; /* Décale toute la section vers le bas */
}

/* Fond étoilé */
.star-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #0a0a0a, #000);
  z-index: -1;
}

.star-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: -1;
}

/* Conteneur principal */
.content-container {
  display: flex;
  flex-direction: row; /* Par défaut, photo à côté du texte */
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;
}

/* Texte */
.text-content {
  flex: 1;
  text-align: left;
}

.text-content h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ccc;
}

.text-content h1 {
  font-size: 3rem;
  color: #00ff00;
  margin-bottom: 0.5rem;
}

.text-content h3 {
  font-size: 1.5rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.text-content p {
  margin: 1rem 0;
  line-height: 1.6;
}

.text-content a {
  color: #00ff00;
  text-decoration: underline;
  transition: color 0.3s;
}

.text-content a:hover {
  color: #34d399;
}

/* Image */
.image-container {
  flex: 1;
  text-align: center;
}

.image-container img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out, transform 0.3s;
}

/* Animation d'entrée pour l'image */
.animated-image {
  opacity: 0;
  transform: translateY(20px); /* Déplacement vers le bas initial */
  animation: fadeInUp 1s ease-in-out forwards; /* Animation d'entrée */
}

.image-container img:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}

/* Responsive */
@media screen and (max-width: 768px) {
  .content-container {
    flex-direction: column; /* Empile la photo sous le texte */
  }

  .text-content {
    text-align: center;
  }

  .image-container {
    margin-top: 2rem;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
  }
}

/* Keyframes pour l'animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
