<script setup>
import Name from '../views/global-name.vue'
import Date from '../views/save-date.vue'
import Age from '../views/current-age.vue'
</script>

<template>
    <!-- 自分について -->
    <h1>
      <name />の個人ページ
    </h1>
    <h3>
        誕生日：2004年2月9日（<age />歳）
    </h3>
    <h3>
        言語：中国語、日本語、英語
    </h3>
    <h3>
        ページの最終更新日：<date />
    </h3>
</template>
