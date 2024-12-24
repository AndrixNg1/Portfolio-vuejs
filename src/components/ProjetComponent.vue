<template>
  <section class="bg-gray-900 text-gray-100 py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-indigo-400 tracking-tight">
          Projects Realized
        </h2>
        <p class="text-lg text-gray-400 mt-4">
          A showcase of some of the best projects I have had the pleasure of working on.
        </p>
      </div>

      <!-- Project Cards -->
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="rounded-t-lg object-cover h-48 w-full"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-indigo-300 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ project.description }}
            </p>
            <div class="flex items-center space-x-4">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="text-indigo-500 hover:text-indigo-300 font-medium text-sm"
              >
                GitHub
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="text-indigo-500 hover:text-indigo-300 font-medium text-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Example projects data
const projects = ref([
  {
    id: 1,
    title: "Sleek Website",
    description: "A sleek and modern showcase of personal and professional achievements.",
    image: "src/assets/img/Screenshot 2024-12-22 113925.png",
    github: "https://github.com/AndrixNg1/demo-vitrine.git",
    demo: "https://iotech-vitrine.netlify.app/",
  },
  {
    id: 2,
    title: "XXXXXXXX  XXXXX",
    description: "xxxxxxxx  xxxxx",
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 3,
    title: "xxxxxxxxx xxxxxxxx",
    description: "XxxxxxxxxXxxxxxxxxxxxX.",
    image: "https://via.placeholder.com/400x300",
    github: null,
    demo: "https://taskmanager-demo.com",
  },
  {
    id: 4,
    title: "Blog Application",
    description: "A blog platform for sharing thoughts, stories, and news with an engaging design.",
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com/username/blog-app",
    demo: "https://blog-demo.com",
  },
]);
</script>

<style>
/* Hover animations for project cards */
.hover\:shadow-xl:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}
</style>
