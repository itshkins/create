<template lang="pug">
Html(lang="ru")
  Head
    Title My App
    Link(rel="preconnect" href="https://fonts.googleapis.com")
    Link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
    Link(href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet")
  Body
    NuxtLayout
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.app {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

