<script setup>
// import { ref } from 'vue'
import ProfileTop from '@/components/mobile/ProfileTop.vue'
import ContactLink from '@/components/mobile/ContactLink.vue'
import CodeLang from '@/components/mobile/CodeLang.vue'
// import SakanaWidget from '@/components/any/SakanaWidget.vue'

// const width = window.innerWidth >= 768
</script>

<template>
  <div class="home-layout">
    <section class="card">
      <ProfileTop />
    </section>

    <div class="social-row-inline">
      <ContactLink />
    </div>

    <section class="card tech-columns">
      <CodeLang />
    </section>

    <div class="card other">
      The responsive layout for mobile devices is simply too hard to write, I gave up designing it.
    </div>

    <!-- 图片太大了
    <section class="sakana">
      <SakanaWidget v-if="width" />
      <SakanaWidget character="chisato" />
    </section>
    -->
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  margin: 4vh 6vw;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  max-width: 100vw;
}

.card {
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(5px);
  border-radius: 1vh;
  padding: 2vh 3vw;
}

.social-row-inline {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.tech-columns {
  display: flex;
  gap: 4vw;
}
.social-row-inline,
.tech-columns,
.other {
  margin-top: 2vh;
}

.other {
  font-size: 4vw;
  color: red;
}

.sakana {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 14vh;
  margin-top: 2vh;
}
</style>
