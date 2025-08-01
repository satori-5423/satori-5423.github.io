<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const now = ref(new Date())

let timer
onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const formatTime = (date) =>
  date.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

const formatDate = (date) =>
  date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
</script>

<template>
  <div class="clock">
    <div class="clock-time">{{ formatTime(now) }}</div>
    <div class="clock-date">{{ formatDate(now) }}</div>
  </div>
</template>

<style scoped>
.clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3vh 3vw;
  height: 100%;
}

.clock-time {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 2vh;
}

.clock-date {
  font-size: 1.2vw;
  opacity: 0.9;
}
</style>
