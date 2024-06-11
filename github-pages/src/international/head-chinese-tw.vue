<script setup>
import Name from '../views/global-name.vue'
import Date from '../views/save-date.vue'
import Age from '../views/current-age.vue'
</script>

<template>
    <!-- 關於我 -->
    <h1>
      <name />的個人主頁
    </h1>
    <h3>
        生日：2004年2月9日（<age />歲）
    </h3>
    <h3>
        國籍：中國（China）
    </h3>
    <h3>
        頁面最後更新日期：<date />
    </h3>
</template>
