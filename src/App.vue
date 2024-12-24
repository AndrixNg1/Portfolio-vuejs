<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <header>


    <div class="wrapper">
      <HeaderComponent />


    </div>
  </header>

  <RouterView />
  <footer>
    <div class="wrapper">
      <FooterComponent />
    </div>

  </footer>
</template>
