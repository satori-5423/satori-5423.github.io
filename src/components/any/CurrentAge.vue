<script setup>
import { ref, onMounted } from 'vue'

const age = ref(0)

onMounted(() => {
  const birthday = new Date('2004-02-09')
  const today = new Date()
  let currentAge = today.getFullYear() - birthday.getFullYear()
  const m = today.getMonth() - birthday.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    currentAge -= 1
  }
  age.value = currentAge
})
</script>

<template>
  {{ age }}
</template>
