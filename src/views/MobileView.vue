<script setup>
import { ref, onMounted } from 'vue'
import RibbonFall from '@/components/any/RibbonFall.vue'
import HomePage from '@/components/mobile/HomePage.vue'

const showMain = ref(false)
const showIntro = ref(true)

onMounted(() => {
  setTimeout(() => {
    showIntro.value = false
    setTimeout(() => {
      showMain.value = true
    }, 1000)
  }, 2000)
})
</script>

<template>
  <div class="container">
    <transition name="fade-only" appear>
      <div class="intro" v-if="showIntro">
        <p class="intro-text">黄金郷へようこそ</p>
      </div>
    </transition>

    <transition name="fade-only" appear>
      <div class="main" v-if="showMain">
        <section class="scroll-section with-bg">
          <HomePage />
          <RibbonFall />
        </section>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  font-family: sans-serif;
  color: #fff;
  position: relative;
}

.intro,
.main {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.intro-text {
  font-size: 4vh;
  color: #ffd700;
  white-space: nowrap;
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.main {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  scroll-behavior: smooth;
}

.scroll-section {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  --scroll: 0;
  --text-scroll: 0;
}

.fade-only-enter-active,
.fade-only-leave-active {
  transition: opacity 1s ease;
}

.fade-only-enter-from,
.fade-only-leave-to {
  opacity: 0;
}

.fade-only-enter-to,
.fade-only-leave-from {
  opacity: 1;
}

.with-bg {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
