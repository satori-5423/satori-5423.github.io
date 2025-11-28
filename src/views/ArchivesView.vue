<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usePosts } from '@/composables/usePosts'
import BlogPost from '@/components/BlogPost.vue'
import SideCard from '@/components/Layout/SideCard.vue'
import PaginationControl from '@/components/PaginationControl.vue'

const { searchPosts, posts } = usePosts()

const searchQuery = ref('')
const selectedTags = ref<string[]>([])
const selectedCategories = ref<string[]>([])

const allTags = computed(() => {
  const tags = new Set<string>()
  posts.value.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags)
})

const allCategories = computed(() => {
  const cats = new Set<string>()
  posts.value.forEach((p) => p.categories?.forEach((c) => cats.add(c)))
  return Array.from(cats)
})

const filteredPosts = computed(() => {
  if (
    !searchQuery.value &&
    selectedTags.value.length === 0 &&
    selectedCategories.value.length === 0
  ) {
    return posts.value
  }

  return searchPosts(searchQuery.value, {
    tags: selectedTags.value,
    categories: selectedCategories.value,
  })
})

const currentPage = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / itemsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPosts.value.slice(start, end)
})

watch([searchQuery, selectedTags, selectedCategories], () => {
  currentPage.value = 1
})

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((t) => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const toggleCategory = (cat: string) => {
  if (selectedCategories.value.includes(cat)) {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== cat)
  } else {
    selectedCategories.value.push(cat)
  }
}
</script>

<template>
  <div class="container" style="margin-top: 100px">
    <div class="main-content">
      <div class="card search-card">
        <div class="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input v-model="searchQuery" type="text" placeholder="Search posts..." />
        </div>

        <div class="filters">
          <div class="filter-group">
            <h4>Categories:</h4>
            <div class="tags">
              <span
                v-for="cat in allCategories"
                :key="cat"
                class="tag-pill"
                :class="{ active: selectedCategories.includes(cat) }"
                @click="toggleCategory(cat)"
              >
                {{ cat }}
              </span>
            </div>
          </div>

          <div class="filter-group">
            <h4>Tags:</h4>
            <div class="tags">
              <span
                v-for="tag in allTags"
                :key="tag"
                class="tag-pill"
                :class="{ active: selectedTags.includes(tag) }"
                @click="toggleTag(tag)"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-list">
        <BlogPost v-for="post in paginatedPosts" :key="post.id" :post="post" :is-preview="true" />

        <PaginationControl v-model:currentPage="currentPage" :totalPages="totalPages" />
        <div v-if="filteredPosts.length === 0" class="card no-results">
          <p>No posts found.</p>
        </div>
      </div>
    </div>
    <aside class="sidebar">
      <SideCard />
    </aside>
  </div>
</template>

<style scoped>
.search-card {
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  background: #f0f2f5;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 15px;
}

.search-bar i {
  color: #888;
  margin-right: 10px;
}

.search-bar input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 1rem;
  outline: none;
  color: var(--color-text);
}

.filter-group {
  margin-bottom: 10px;
}

.filter-group h4 {
  margin: 5px 0;
  font-size: 0.9rem;
  color: var(--color-meta);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-pill {
  background: #eef2f7;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--color-text);
}

.tag-pill:hover {
  background: #dfe6ed;
}

.tag-pill.active {
  background: var(--color-primary);
  color: white;
}

.no-results {
  text-align: center;
  padding: 40px;
  color: var(--color-meta);
}
</style>
