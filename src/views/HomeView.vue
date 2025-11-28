<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usePosts } from '@/composables/usePosts'
import BlogPost from '@/components/BlogPost.vue'
import SideCard from '@/components/Layout/SideCard.vue'
import PaginationControl from '@/components/PaginationControl.vue'

const { recentPosts } = usePosts()

const currentPage = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => Math.ceil(recentPosts.value.length / itemsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return recentPosts.value.slice(start, end)
})

watch(currentPage, () => {
  const container = document.querySelector('.container')
  if (container) {
    container.scrollIntoView({ behavior: 'smooth' })
  }
})
</script>

<template>
  <div class="home-wrapper">
    <div id="home-head">
      <div
        id="home-background"
        style="
          background-image: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80');
        "
      ></div>
      <div id="home-info">
        <span class="loop"></span>
        <span class="loop"></span>
        <span class="loop"></span>
        <span class="loop"></span>
        <div class="info">
          <div class="wrap">
            <h1>蝶の隠れ家</h1>
            <h3>Hi, here's satori-5423</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="main-content">
        <BlogPost v-for="post in paginatedPosts" :key="post.id" :post="post" :is-preview="true" />

        <PaginationControl v-model:currentPage="currentPage" :totalPages="totalPages" />
      </div>
      <aside class="sidebar">
        <SideCard />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  width: 100%;
}
</style>
