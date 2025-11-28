<script setup lang="ts">
import SideCard from '@/components/Layout/SideCard.vue'
import { useLocale } from '@/composables/useI18nContent'

const { t } = useLocale()
</script>

<template>
  <div class="container" style="margin-top: 100px">
    <div class="main-content">
      <div class="card about-card">
        <div class="profile-header">
          <div class="avatar-wrapper">
            <img src="https://github.com/satori-5423.png" alt="Avatar" class="avatar" />
          </div>
          <h1>蝶 (satori-5423)</h1>
          <p class="subtitle">{{ t('about.subtitle') }}</p>
        </div>

        <div class="bio">
          <h2>{{ t('about.title') }}</h2>
          <p>
            {{ t('about.intro') }}
          </p>

          <h2>{{ t('about.skills') }}</h2>
          <div class="skills-grid">
            <div class="skill-item"><a href="https://isocpp.org/" target="_blank">C++</a></div>
            <div class="skill-item">
              <a href="https://www.rust-lang.org/" target="_blank">Rust</a>
            </div>
            <div class="skill-item"><a href="https://dev.java/" target="_blank">Java</a></div>
            <div class="skill-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                >JavaScript</a
              >
            </div>
            <div class="skill-item">
              <a href="https://spring.io/" target="_blank">Spring Boot</a>
            </div>
            <div class="skill-item"><a href="https://vuejs.org/" target="_blank">Vue.js</a></div>
            <div class="skill-item"><a href="https://mariadb.org/" target="_blank">MariaDB</a></div>
            <div class="skill-item">
              <a href="https://www.kernel.org/" target="_blank">Linux</a>
            </div>
            <div class="skill-item">
              <a href="https://zh.wikipedia.org/wiki/%E6%B1%89%E8%AF%AD" target="_blank">Chinese</a>
            </div>
            <div class="skill-item">
              <a href="https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%AA%9E" target="_blank"
                >Japanese</a
              >
            </div>
            <div class="skill-item">
              <a href="https://en.wikipedia.org/wiki/English_language" target="_blank">English</a>
            </div>
          </div>

          <h2>{{ t('about.contact') }}</h2>
          <a href="mailto:suxue2746841150@gmail.com">
            {{ t('about.contactText') }}
          </a>
        </div>
      </div>
    </div>
    <aside class="sidebar">
      <SideCard />
    </aside>
  </div>
</template>

<style scoped>
.about-card {
  padding: 40px;
}

.profile-header {
  text-align: center;
  margin-bottom: 40px;
}

.avatar-wrapper {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  margin: 0;
  color: var(--color-primary);
}

.subtitle {
  color: var(--color-meta);
  margin-top: 5px;
}

.bio h2 {
  color: var(--color-text);
  border-bottom: 2px solid #f0f2f5;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 15px;
}

.bio p {
  line-height: 1.8;
  color: #4a5568;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  user-select: none;
}

.skill-item {
  background: #eef2f7;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  color: var(--color-secondary);
}
</style>
