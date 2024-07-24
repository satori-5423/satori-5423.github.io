<script setup>
import Name from '../views/global-name.vue'
import Date from '../views/save-date.vue'
import Age from '../views/current-age.vue'
</script>

<template>
    <!-- About Me -->
    <h1>
      <name />'s Homepage
    </h1>
    <h3>
        Birthday: February 9, 2004 (<age /> years old)
    </h3>
    <h3>
        Languages: Chinese, Japanese, English
    </h3>
    <h3>
        Page Last Updated: <date />
    </h3>
</template>
