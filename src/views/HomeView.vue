<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DesktopView from '@/views/DesktopView.vue'
import MobileView from '@/views/MobileView.vue'

const isDesktopLayout = ref(window.innerWidth > window.innerHeight) // 768

onMounted(() => {
  const checkWidth = () => {
    isDesktopLayout.value = window.innerWidth > window.innerHeight // 768
  }
  window.addEventListener('resize', checkWidth)
  checkWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})
</script>

<template>
  <div v-if="isDesktopLayout">
    <DesktopView />
  </div>
  <div v-else>
    <MobileView />
  </div>
</template>
