<template>
  <div class="bg-gray-900 text-gray-100 min-h-screen py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-indigo-400 tracking-tight">
          Welcome to My Blog
        </h1>
        <p class="text-lg text-gray-400 mt-4">
          Explore articles, videos, and podcasts on development, design, and technology.
        </p>
      </header>

      <!-- Blog Posts -->
      <div
        class="space-y-12 transition-transform duration-500"
        :class="{'translate-y-0 opacity-100': loaded, 'translate-y-10 opacity-0': !loaded}"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Post Header -->
          <div class="mb-4">
            <h2 class="text-2xl font-semibold text-indigo-300 mb-2">
              {{ post.title }}
            </h2>
            <p class="text-gray-400 text-sm">{{ post.excerpt }}</p>
          </div>

          <!-- Post Media -->
          <div v-if="post.image || post.video || post.audio" class="mb-4">
            <img
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="rounded-md shadow-md mb-5"
            />
            <video
              v-if="post.video"
              controls
              class="w-full rounded-md shadow-md mb-5"
            >
              <source :src="post.video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <audio
              v-if="post.audio"
              controls
              class="w-full rounded-md shadow-md"
            >
              <source :src="post.audio" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>

          <!-- Read More Button -->
          <div class="text-right">
            <button
              class="bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white px-4 py-2 rounded-md shadow hover:shadow-md transition-all duration-200"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Blog posts
const posts = ref([
  {
    id: 1,
    title: "Introduction to Vue.js 3",
    excerpt: "Learn the basics of Vue.js 3 in this comprehensive article.",
    image: "https://via.placeholder.com/800x400",
    video: null,
    audio: null,
  },
  {
    id: 2,
    title: "Development Podcasts",
    excerpt: "Listen to our exclusive podcasts about modern development.",
    image: null,
    video: null,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 3,
    title: "Video Tutorial: Create a Vue.js Project",
    excerpt: "Learn how to set up a Vue.js project in a few minutes.",
    image: null,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    audio: null,
  },
]);

// Animation on load
const loaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 500); // Delay for smooth appearance
});
</script>

<style>
/* Global styling */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

/* Animations */
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.translate-y-10 {
  transform: translateY(2.5rem);
}
.translate-y-0 {
  transform: translateY(0);
}
</style>
