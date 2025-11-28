<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/Layout/NavBar.vue'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
</script>

<template>
  <ParticlesBackground />
  <NavBar />
  <div class="app-content">
    <RouterView />
  </div>
</template>

<style>
.app-content {
  min-height: 100vh;
}
</style>
