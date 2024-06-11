<script setup>
import Name from '../views/global-name.vue'
import Date from '../views/save-date.vue'
import Age from '../views/current-age.vue'
</script>

<template>
    <!-- 关于我 -->
    <h1>
      <name />的个人主页
    </h1>
    <h3>
        生日：2004年2月9日（<age />岁）
    </h3>
    <h3>
        国籍：中国（China）
    </h3>
    <h3>
        页面最近更新日期：<date />
    </h3>
</template>
