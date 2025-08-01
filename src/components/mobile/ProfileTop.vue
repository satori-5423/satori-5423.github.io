<script setup>
import CurrentAge from '@/components/any/CurrentAge.vue'
</script>

<template>
  <div class="profile-top">
    <img class="avatar" src="https://avatars.githubusercontent.com/u/112957411?v=4" alt="avatar" />
    <div class="info">
      <h1>蝶 (Tyou)</h1>
      <p>suxue2746841150@163.com</p>
      <p>Age: <CurrentAge /> (2004-02-09)</p>
      <p>Nationality: China</p>
    </div>
  </div>
  <hr class="divider" />
  <p class="motto">錢塘江上潮信來，今日方知我是我。</p>
</template>

<style scoped>
.profile-top {
  display: flex;
  align-items: center;
  gap: 3vw;
  margin-bottom: 1vh;
}

.avatar {
  width: 12vh;
  height: 12vh;
  border-radius: 50%;
}

.info {
  font-size: 3.5vw;
  line-height: 1.3;
}

h1 {
  margin: 0 0 0.5vh 0;
  font-weight: 700;
  font-size: 5vw;
}

.divider {
  border: 0;
  border-top: 0.1vh solid rgba(255, 255, 255, 0.3);
  margin: 2vh 0;
}

.motto {
  font-style: italic;
  font-size: 3.8vw;
  margin: 0;
  text-align: center;
}
</style>
