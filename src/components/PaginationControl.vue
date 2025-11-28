<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
}>()

const pages = computed(() => {
  const total = props.totalPages
  const current = props.currentPage
  const delta = 1
  const range = []
  const rangeWithDots: (number | string)[] = []
  let l: number | undefined

  range.push(1)

  if (total <= 1) return range

  for (let i = current - delta; i <= current + delta; i++) {
    if (i < total && i > 1) {
      range.push(i)
    }
  }
  range.push(total)

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
})

const prevPage = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1)
  }
}

const goToPage = (page: number) => {
  emit('update:currentPage', page)
}
</script>

<template>
  <div class="pagination" v-if="totalPages > 1">
    <button class="page-btn" :disabled="currentPage === 1" @click="prevPage">&lt;</button>

    <div class="page-numbers">
      <template v-for="page in pages" :key="page">
        <button
          v-if="page !== '...'"
          class="page-num"
          :class="{ active: currentPage === page }"
          @click="goToPage(page as number)"
        >
          {{ page }}
        </button>
        <span v-else class="dots">...</span>
      </template>
    </div>

    <button class="page-btn" :disabled="currentPage === totalPages" @click="nextPage">&gt;</button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
}

.page-btn,
.page-num {
  background: var(--color-card-bg);
  border: 1px solid #ebeef5;
  color: var(--color-text);
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s;
  font-family: var(--font-family-base);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn:not(:disabled):hover,
.page-num:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.page-num.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.page-numbers {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dots {
  color: var(--color-text);
  padding: 0 5px;
}
</style>
