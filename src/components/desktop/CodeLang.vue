<script setup>
import Info from '@/assets/info.json'

const leftTech = Info.frontendTech
const rightTech = Info.backendTech
</script>

<template>
  <section class="card tech">
    <div v-for="tech in leftTech" :key="tech.name" class="tech-item">
      <img :src="tech.icon" class="tech-icon" :alt="tech.name" />
      <div class="bar"><div class="fill" :style="{ width: tech.level + '%' }"></div></div>
    </div>
  </section>
  <section class="card tech">
    <div v-for="tech in rightTech" :key="tech.name" class="tech-item">
      <img :src="tech.icon" class="tech-icon" :alt="tech.name" />
      <div class="bar"><div class="fill" :style="{ width: tech.level + '%' }"></div></div>
    </div>
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

.tech {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 28vh;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 2vh;
}

.tech-icon {
  width: 4vh;
  height: 4vh;
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
