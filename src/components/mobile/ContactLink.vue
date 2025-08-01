<script setup>
import Info from '@/assets/info.json'

const socialLinks = Info.socialLinks
</script>

<template>
  <section v-for="link in socialLinks" :key="link.name" class="card social-item-inline">
    <a :href="link.url" target="_blank" rel="noopener noreferrer">
      <img :src="link.icon" :alt="link.name" />
    </a>
  </section>
</template>

<style scoped>
.card {
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(5px);
  border-radius: 1vh;
  padding: 2vh 3vw;
}

.social-item-inline img {
  width: 7vh;
  height: 7vh;
}

@media screen and (max-aspect-ratio: 1/2) {
  .social-item-inline img {
    width: 12vw;
    height: 12vw;
  }
}
</style>
