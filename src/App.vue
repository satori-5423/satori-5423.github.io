<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/Layout/NavBar.vue'
import MDBackground from '@/components/MDBackground.vue'
</script>

<template>
  <MDBackground />
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
