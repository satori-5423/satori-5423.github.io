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
  <div class="page-layout">
    <div class="triangle top">
      <span class="triangle-text top-text">顶部</span>
    </div>
    <div class="triangle bottom">
      <span class="triangle-text bottom-text">底部</span>
    </div>
    <div class="triangle left">
      <span class="triangle-text left-text">左侧</span>
    </div>
    <div class="triangle right">
      <span class="triangle-text right-text">右侧</span>
    </div>

    <div class="center-box">
      <div class="clock">
        <div class="clock-time">{{ formatTime(now) }}</div>
        <div class="clock-date">{{ formatDate(now) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f0f0f0;
}

.center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vw;
  height: 25vw;
  max-width: 90vw;
  max-height: 80vh;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2vw;
  box-shadow: 0 1vh 3vh rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.triangle {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  pointer-events: auto;
  display: flex;
}

.triangle:hover {
  transform: scale(1.02);
  z-index: 2;
}

.triangle.top {
  background: #ffcccc;
  clip-path: polygon(0 0, 100% 0, 50% 50%);
  justify-content: center;
  align-items: flex-start;
  padding-top: 12vh;
}

.triangle.bottom {
  background: #ccffcc;
  clip-path: polygon(0 100%, 100% 100%, 50% 50%);
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 12vh;
}

.triangle.left {
  background: #ccccff;
  clip-path: polygon(0 0, 0 100%, 50% 50%);
  justify-content: flex-start;
  align-items: center;
  padding-left: 12vw;
}

.triangle.right {
  background: #ffffcc;
  clip-path: polygon(100% 0, 100% 100%, 50% 50%);
  justify-content: flex-end;
  align-items: center;
  padding-right: 12vw;
}

.triangle.top:hover {
  background-color: #ff9999;
}

.triangle.bottom:hover {
  background-color: #99ff99;
}

.triangle.left:hover {
  background-color: #9999ff;
}

.triangle.right:hover {
  background-color: #ffff99;
}

.triangle-text {
  color: #333;
  font-size: 2vw;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  user-select: none;
  position: relative;
}

.triangle:hover .triangle-text {
  opacity: 1;
}

.left-text,
.right-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.clock {
  width: 100%;
  height: 100%;
  padding: 3vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}

.clock-time {
  font-size: 5vw;
  font-weight: bold;
  margin-bottom: 2vh;
}

.clock-date {
  font-size: 2vw;
  opacity: 0.9;
}
</style>
