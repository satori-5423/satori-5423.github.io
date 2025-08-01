<script setup>
import Info from '@/assets/info.json'

const socialLinks = Info.socialLinks
</script>

<template>
  <section v-for="link in socialLinks" :key="link.name" class="card social-item-inline">
    <a :href="link.url" target="_blank">
      <img :src="link.icon" :alt="link.name" />
    </a>
  </section>
</template>

<style scoped>
.card {
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(5px);
  border-radius: 1vh;
  padding: 2vh 2vw;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.card:hover {
  background: rgba(0, 0, 0, 0.5);
  transform: translateY(-0.5vh);
}

.social-item-inline img {
  width: 6vh;
  height: 6vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>
