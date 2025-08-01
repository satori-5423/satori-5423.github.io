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
  gap: 2vw;
  margin: 1vh 3vw;
}

.avatar {
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
}

.info {
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
}

.divider {
  border: 0;
  border-top: 0.1vh solid rgba(255, 255, 255, 0.3);
  margin: 2vh 0;
}

.motto {
  font-style: italic;
  margin: 0 3vw;
}
</style>
