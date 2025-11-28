<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import BlogPost from '@/components/BlogPost.vue'
import SideCard from '@/components/Layout/SideCard.vue'

const route = useRoute()
const { getPostById } = usePosts()

const post = computed(() => getPostById(route.params.id as string))
</script>

<template>
  <div class="container" style="margin-top: 100px">
    <div class="main-content">
      <BlogPost v-if="post" :post="post" :is-preview="false" />
      <div v-else class="card">
        <h2>Post not found</h2>
      </div>
    </div>
    <aside class="sidebar">
      <SideCard />
    </aside>
  </div>
</template>
