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
        <p>With a strong passion for clean code and elegant design, I thrive on turning complex ideas into intuitive and
          visually compelling digital platforms. Whether it's developing a robust web application, optimizing
          performance, or creating a unique user interface, I am dedicated to delivering results that exceed
          expectations. </p>
        <p>
          Feel free to explore my <a href="ProjectView.vue">portfolio of projects</a> and see how my expertise can add value
          to your business. Let's work together to transform your vision into an innovative digital solution that drives
          growth and success.</p>
      </div>

      <!-- Image -->
      <div class="image-container">
        <img src="@/assets/img/and1.jpg" alt="Andrix Ngoyi" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun script nécessaire pour ce composant statique
</script>

<style scoped>
/* Global adjustments for html and body */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

/* Section principale */
.about-page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  text-align: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 1rem;
}

/* Texte */
.text-content {
  z-index: 1;
  padding: 1rem;
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
  text-align: center;
  padding: 1rem;
}

.image-container img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out, transform 0.3s;
}

.image-container img:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}

/* Responsive */
@media screen and (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .text-content {
    text-align: center;
    padding: 1rem;
  }

  .text-content h1 {
    font-size: 2.5rem;
  }

  .text-content h2 {
    font-size: 1.6rem;
  }

  .text-content h3 {
    font-size: 1.2rem;
  }

  .text-content p {
    font-size: 0.9rem;
    margin: 0.8rem 0;
  }

  .image-container img {
    max-width: 250px;
  }
}
</style>
