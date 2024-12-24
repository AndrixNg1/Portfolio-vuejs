<template>
  <div class="services">
    <div class="services-content">
      <h1 class="title">My Services</h1>
      <h2 class="subtitle">What I Do</h2>
      <p class="description">
        As a front-end developer, I create unique, accessible, and optimized user interfaces. I focus on delivering clean, maintainable code and solving real-world challenges for clients through tailored web solutions.
      </p>
      <div class="services-list">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-item group"
        >
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          title: "Web Design",
          description: "Creating responsive and modern websites with clean designs using HTML, CSS, JavaScript, and frameworks like Vue.js.",
        },
        {
          title: "Web Marketing",
          description: "Promoting products and services with basic digital marketing strategies, including SEO and content optimization.",
        },
        {
          title: "Development",
          description: "Building and maintaining scalable web applications using modern JavaScript frameworks and libraries."
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Section principale */
.services {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background: radial-gradient(circle, #1f2937, #000); /* Dégradé subtil */
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  color: #f5f5f5;
}

/* Contenu de la section */
.services-content {
  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #22c55e; /* Vert vif pour un accent moderne */
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.75rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.description {
  font-size: 1.1rem;
  color: #e0e0e0;
  line-height: 1.8;
  margin-bottom: 50px;
}

/* Liste des services */
.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.service-item {
  flex: 1 1 calc(33.333% - 30px);
  max-width: calc(33.333% - 30px);
  background-color: #1f2937;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
}

.service-content {
  position: relative;
  z-index: 1;
}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981; /* Couleur accent pour les titres */
  margin-bottom: 15px;
}

.service-description {
  font-size: 1rem;
  color: #e5e5e5;
  line-height: 1.6;
}

/* Animation d'arrière-plan au survol */
.service-item::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(34, 197, 94, 0.2), transparent);
  transform: rotate(45deg);
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 0;
}

.service-item:hover::before {
  opacity: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .service-item {
    flex: 1 1 calc(50% - 30px);
    max-width: calc(50% - 30px);
  }
}

@media (max-width: 768px) {
  .service-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
