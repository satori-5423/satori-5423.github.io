<script setup lang="ts">
import { useLocale } from '@/composables/useI18nContent'

const { t } = useLocale()
</script>

<template>
  <div class="card side-card">
    <div class="avatar">
      <img src="https://github.com/satori-5423.png" alt="Avatar" />
    </div>
    <div class="name">蝶 (satori-5423)</div>
    <div class="description">Hi, here's satori-5423...</div>

    <div class="icon-links">
      <a href="https://github.com/satori-5423" target="_blank" title="GitHub">
        <i class="fa-brands fa-github fa-fw"></i>
      </a>
      <a href="https://t.me/satori_2768" target="_blank" title="Telegram">
        <i class="fa-brands fa-telegram fa-fw"></i>
      </a>
      <a href="https://discordapp.com/users/1031115461238202391" target="_blank" title="Discord">
        <i class="fa-brands fa-discord fa-fw"></i>
      </a>
      <a href="https://steamcommunity.com/id/2746841150" target="_blank" title="Steam">
        <i class="fa-brands fa-steam fa-fw"></i>
      </a>
    </div>

    <div class="menu-links">
      <div class="menu-item">
        <router-link to="/">
          <i class="fa-solid fa-house fa-fw"></i> {{ t('ui.home') }}
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/archives">
          <i class="fa-solid fa-box-archive fa-fw"></i> {{ t('ui.archives') }}
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/about">
          <i class="fa-solid fa-user fa-fw"></i> {{ t('ui.about') }}
        </router-link>
      </div>
    </div>

    <!-- 备用
    <div class="friend-links">
      <div class="friend-link">
        <a href="#" target="_blank">
          <img src="" alt="" />
        </a>
      </div>
    </div>
    -->
  </div>
</template>

<style scoped>
.side-card {
  text-align: center;
  position: sticky;
  top: 80px;
}

.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  transition: transform 0.5s;
}

.avatar:hover img {
  transform: rotate(360deg);
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 15px 0;
}

.description {
  color: var(--color-meta);
  margin-bottom: 20px;
}

.icon-links {
  border-top: 1px solid #cdcdcd;
  padding-top: 15px;
  margin: 10px auto;
  width: 85%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icon-links a {
  color: var(--color-meta);
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.25s;
}

.icon-links a:hover {
  background: var(--color-primary);
  color: #fff;
}

.friend-links {
  border-top: 1px solid #cdcdcd;
  padding-top: 15px;
  margin: 10px auto;
  width: 85%;
}

.friend-link {
  margin-bottom: 5px;
}

.friend-link a {
  color: var(--color-meta);
  display: block;
  padding: 5px 0;
  border-radius: 5px;
}

.friend-link a:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
