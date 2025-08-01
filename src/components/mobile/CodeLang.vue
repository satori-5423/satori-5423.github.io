<script setup>
import Info from '@/assets/info.json'

const leftTech = Info.frontendTech
const rightTech = Info.backendTech
</script>

<template>
  <section class="tech">
    <div v-for="tech in leftTech" :key="tech.name" class="tech-item">
      <img :src="tech.icon" class="tech-icon" :alt="tech.name" />
      <div class="bar"><div class="fill" :style="{ width: tech.level + '%' }"></div></div>
    </div>
  </section>

  <section class="tech">
    <div v-for="tech in rightTech" :key="tech.name" class="tech-item">
      <img :src="tech.icon" class="tech-icon" :alt="tech.name" />
      <div class="bar"><div class="fill" :style="{ width: tech.level + '%' }"></div></div>
    </div>
  </section>
</template>

<style scoped>
.tech {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 3vw;
}

.tech-icon {
  width: 5vh;
  height: 5vh;
}

.bar {
  flex: 1;
  height: 2vh;
  background: rgba(50, 50, 50, 0.8);
  border-radius: 1vh;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: rgb(160, 160, 160);
}
</style>
