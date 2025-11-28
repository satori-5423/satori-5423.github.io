<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18nContent'

const { setLang, currentLang } = useI18n()

const isTransparent = ref(true)

const handleScroll = () => {
  isTransparent.value = window.scrollY < 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const languages = [
  { code: 'zh-CN', label: '简' },
  { code: 'zh-TW', label: '繁' },
  { code: 'ja', label: '日' },
  { code: 'en', label: 'EN' },
]
</script>

<template>
  <nav class="navbar" :class="{ transparent: isTransparent }">
    <div class="nav-container">
      <div class="brand">
        <router-link to="/">蝶の隠れ家</router-link>
      </div>
      <div class="lang-switch">
        <button
          v-for="lang in languages"
          :key="lang.code"
          :class="{ active: currentLang === lang.code }"
          @click="setLang(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: #92cafa;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition:
    background 0.3s,
    box-shadow 0.3s;
}

.navbar.transparent {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: none;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.brand a {
  font-weight: bold;
  font-size: 1.2rem;
  color: #555;
  transition: color 0.3s;
}

.menu a {
  margin-left: 20px;
  color: #555;
  font-weight: 600;
  transition: color 0.3s;
}

.menu a:hover {
  color: #fff;
}

.lang-switch button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-weight: bold;
  color: #555;
  transition: color 0.3s;
}

.lang-switch button.active {
  color: #fff;
}

.navbar.transparent .brand a,
.navbar.transparent .menu a,
.navbar.transparent .lang-switch button {
  color: #fff;
}

.navbar.transparent .menu a:hover {
  color: #ddd;
}
</style>
