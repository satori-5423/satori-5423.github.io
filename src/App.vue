<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavBar from '@/components/Layout/NavBar.vue'
import MDBackground from '@/components/MDBackground.vue'

const route = useRoute()
const showNav = computed(() => route.path !== '/love')
</script>

<template>
  <MDBackground />
  <NavBar v-if="showNav" />
  <div class="app-content">
    <RouterView />
  </div>
</template>

<style>
.app-content {
  min-height: 100vh;
}
</style>
