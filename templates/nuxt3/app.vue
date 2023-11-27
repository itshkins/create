<template lang="pug">
Html(lang="ru")
  Head
    Title Формабокс
    Link(href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet")

    Link(rel="preload" href="~/assets/fonts/GraphikLCG-Regular.woff2" as="font" type="font/woff2")
    Link(rel="preload" href="~/assets/fonts/GraphikLCG-RegularItalic.woff2" as="font" type="font/woff2")
    Link(rel="preload" href="~/assets/fonts/GraphikLCG-Medium.woff2" as="font" type="font/woff2")
    Link(rel="preload" href="~/assets/fonts/GraphikLCG-Bold.woff2" as="font" type="font/woff2")
  Body(:class="{'with-modal': uiStore.isMobileMenuOpen}")
    Logo
</template>

<script lang="ts" setup>
const uiStore = useUiStore()
</script>

<style lang="scss">
</style>

