<script setup>
import ChineseCom from './international/chinese-com.vue'
import ChineseTwCom from './international/chinese-tw-com.vue'
import JapaneseCom from './international/japanese-com.vue'
import EnglishCom from './international/english-com.vue'
import HeadChinese from './international/head-chinese.vue'
import HeadChineseTw from './international/head-chinese-tw.vue'
import HeadJapanese from './international/head-japanese.vue'
import HeadEnglish from './international/head-english.vue'
import { computed, onMounted, onUnmounted, nextTick, ref, watch } from 'vue'
import Snow from './views/snow-back.vue'

const lang = ref('en')
const tateyoko = ref(1016)

watch(() => {
  const userLanguages = navigator.languages
  if (userLanguages[0].startsWith('zh')) {
    lang.value = userLanguages[0].startsWith('zh-TW') ? 'zh-TW' : 'zh-CN'
  } else if (userLanguages[0].startsWith('ja')) {
    lang.value = 'ja'
  } else {
    lang.value = 'en'
  }
})

function zh_CN() { lang.value = 'zh-CN' }
function zh_TW() { lang.value = 'zh-TW' }
function ja() { lang.value = 'ja' }
function en() { lang.value = 'en' }

const height = ref(window.innerHeight)
const width = ref(window.innerWidth)

const updateWindowDimensions = () => {
  height.value = window.innerHeight
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowDimensions)
})

const isHeightGreaterThanWidth = computed(() => {
  return height.value > width.value
})

onMounted(() => {
  window.addEventListener('resize', updateWindowDimensions)

  nextTick(() => {
    adjustButtonHeights()
  })
})

const adjustButtonHeights = () => {
  const buttons = document.querySelectorAll('.btn')
  let maxHeight = 0
  let maxWidth = 0

  buttons.forEach((button) => {
    const height = button.offsetHeight
    const width = button.offsetWidth
    if (height > maxHeight) {
      maxHeight = height
    }
    if (width > maxWidth) {
      maxWidth = width
    }
  })

  buttons.forEach((button) => {
    button.style.height = `${maxHeight + 3}px`
    button.style.width = `${maxWidth}px`
  })
}
</script>

<template>
  <div class="container">
    <div :class="width > tateyoko ? 'dis-flex' : 'dis-grid'">
      <div v-if="width > tateyoko">
        <div v-if="lang === 'zh-CN'"><head-chinese /></div>
        <div v-else-if="lang === 'zh-TW'"><head-chinese-tw /></div>
        <div v-else-if="lang === 'ja'"><head-japanese /></div>
        <div v-else><head-english /></div>
        <div class="sukima"></div>
      </div>
      <div style="place-self: center;">
        <div class="language">
          <div class="btn" style="background-color: pink;" @click="zh_CN()">
            <div class="btn-content">
              <h3>
                简体<span v-if="isHeightGreaterThanWidth"><br /></span>中文
              </h3>
            </div>
          </div>
          <div style="width: 2vw;"></div>
          <div class="btn" style="background-color: mediumturquoise;" @click="zh_TW()">
            <div class="btn-content">
              <h3>
                繁體<span v-if="isHeightGreaterThanWidth"><br /></span>中文
              </h3>
            </div>
          </div>
          <div style="width: 2vw;"></div>
          <div class="btn" style="background-color: gold;" @click="ja()">
            <div class="btn-content">
              <h3>
                日本語
              </h3>
            </div>
          </div>
          <div style="width: 2vw;"></div>
          <div class="btn" style="background-color: aqua;" @click="en()">
            <div class="btn-content">
              <h3>
                English
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div v-if="width <= tateyoko">
        <div v-if="lang === 'zh-CN'"><head-chinese /></div>
        <div v-else-if="lang === 'zh-TW'"><head-chinese-tw /></div>
        <div v-else-if="lang === 'ja'"><head-japanese /></div>
        <div v-else><head-english /></div>
      </div>
    </div>
    <hr />
    <div class="page">
      <div v-if="lang === 'zh-CN'"><chinese-com /></div>
      <div v-else-if="lang === 'zh-TW'"><chinese-tw-com /></div>
      <div v-else-if="lang === 'ja'"><japanese-com /></div>
      <div v-else><english-com /></div>
    </div>
  </div>
  <snow />
</template>

<style scoped>
.container {
  align-items: center;
  padding: 3vw;
  -webkit-text-size-adjust: none;
}

.language {
  padding: 1.2vw;
  display: flex;
  justify-content: space-between;
  align-self: center;
}

.btn {
  display: grid;
  margin-bottom: 3vw;
  text-align: center;
  align-self: center;
  color: white;
  padding: 1vw;
  border-radius: 1vw;
  box-shadow:
    0px 3vw 8vw 1vw rgba(0, 0, 0, 0.04),
    0px 2vw 5vw rgba(0, 0, 0, 0.08);
  flex-grow: 1;
  flex-shrink: 0.225;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* 标准语法 */
}

.btn-content {
  align-self: center;
  justify-content: center;
}

.dis-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dis-grid {
  display: grid;
}

.page {
  place-self: center;
}

.sukima {
  width: 25vw;
}

@media (min-width: 1640px) {
  .container {
    margin: 2vw;
    font-size: 135%;
  }

  .sukima {
    width: 28vw;
  }
}

@media (max-width: 440px) {
  .container {
    size: small;
    font-size: small;
  }

  .language {
    align-items: center;
    align-self: center;
    width: 76.5vw;
  }
}

@media (max-width: 300px) {
  .container {
    size: 75%;
    font-size: 75%;
  }
}
</style>
