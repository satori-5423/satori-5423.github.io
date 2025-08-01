<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import RibbonFall from '@/components/any/RibbonFall.vue'
import HomePage from '@/components/desktop/HomePage.vue'

const showMain = ref(false)
const showIntro = ref(true)
const scrollSections = ref([])

const updateScroll = () => {
  const mainEl = document.querySelector('.main')
  if (!mainEl) return
  const scrollTop = mainEl.scrollTop
  const mainHeight = mainEl.clientHeight

  scrollSections.value.forEach((section) => {
    const offsetTop = section.offsetTop
    // const sectionHeight = section.clientHeight
    // const sectionCenter = offsetTop + sectionHeight / 2

    // 门逻辑：提前关闭，在滚动至 50% 屏幕时完成
    if (section.classList.contains('door-scene')) {
      const start = 0
      const end = mainHeight * 0.5
      const rawProgress = (scrollTop - start) / (end - start)
      const progress = Math.min(Math.max(rawProgress, 0), 1)
      section.style.setProperty('--scroll', progress.toFixed(3))
    }

    // 文字逻辑：滑动速度减半，方向修正并从 0 到 0.5
    if (section.classList.contains('text-slide')) {
      const start = offsetTop - mainHeight
      const end = offsetTop + mainHeight
      const rawProgress = (scrollTop - start) / (end - start)
      const progress = Math.min(Math.max(rawProgress, 0), 1) * 0.5
      section.style.setProperty('--text-scroll', progress.toFixed(3))
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    showIntro.value = false
    setTimeout(() => {
      showMain.value = true
      nextTick(() => {
        scrollSections.value = Array.from(document.querySelectorAll('.scroll-section'))
        updateScroll()

        document.querySelectorAll('.text-slide .scroll-box').forEach((el, i) => {
          el.setAttribute('data-direction', i % 2 === 0 ? 'left' : 'right')
        })

        const mainEl = document.querySelector('.main')
        if (mainEl) {
          mainEl.addEventListener('scroll', updateScroll)
        }
      })
    }, 1000)
  }, 2000)
})

onUnmounted(() => {
  const mainEl = document.querySelector('.main')
  if (mainEl) {
    mainEl.removeEventListener('scroll', updateScroll)
  }
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
        <!-- 丢弃
        <section class="scroll-section door-scene">
          <LeftDoor class="door left" />
          <RightDoor class="door right" />
          <div class="center-box">
            <MainPage class="main-content" />
          </div>
        </section>
        -->

        <section class="scroll-section text-slide with-bg">
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
  font-size: 4vw;
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
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  --scroll: 0;
  --text-scroll: 0;
}

.door-scene {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.door {
  position: absolute;
  top: 0;
  width: 50vw;
  height: 100vh;
  background: #000;
  z-index: 10;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.door.left {
  left: 0;
  transform: translateX(calc(-50vw + 50vw * var(--scroll)));
}

.door.right {
  right: 0;
  transform: translateX(calc(50vw - 50vw * var(--scroll)));
}

.center-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
}

.main-content {
  position: absolute;
  top: 50vh;
  left: 50vw;
  z-index: 15;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  gap: 4vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.text-slide .scroll-box {
  font-size: 1.8vw;
  line-height: 1.5;
  opacity: calc(1 - abs(var(--text-scroll) - 0.25) * 4);
  transition:
    transform 0.5s ease,
    opacity 0.3s ease;
  white-space: normal;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 80vw;
  padding: 1.5vw 2vw;
  border-radius: 1.5vw;
  box-shadow: 0 0.2vh 1vh rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.scroll-box[data-direction='right'] {
  transform: translateX(calc((0.25 - var(--text-scroll)) * -400vw));
}

.scroll-box[data-direction='left'] {
  transform: translateX(calc((0.25 - var(--text-scroll)) * 400vw));
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
