<template lang="pug">
Html(lang="ru")
  Head
    Title {{ title }}
    Meta(v-if="description" name="description" :content="description")
    Link(rel="preconnect" href="https://fonts.googleapis.com")
    Link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
    Link(href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet")
  Body
    .app.container
      AppHeader
      ErrorBlock(v-if="pageStore.error")
      PendingBlock(v-if="pageStore.pending")
      template(v-for="item in body")
        component(
          v-if="TYPE_TO_COMPONENT[item.type]"
          :is="TYPE_TO_COMPONENT[item.type]"
          :data="item.data"
        )
      AppFooter
</template>

<script lang="ts" setup>
import {usePageStore} from '~/stores/page-store'
import {ArticleIntroBlock, ImageBlock, ArticleListBlock, SliderBlock, SubscribeFormBlock, TextBlock, CtaFormBlock} from '#components'

const TYPE_TO_COMPONENT = {
  article_list_block: ArticleListBlock,
  article_intro_block: ArticleIntroBlock,
  text_block: TextBlock,
  image_block: ImageBlock,
  slider_block: SliderBlock,
  subscribe_form_block: SubscribeFormBlock,
  cta_form_block: CtaFormBlock,
}

const pageStore = usePageStore()
const title = computed(() => pageStore.data?.meta?.title ?? `Test Blog`)
const description = computed(() => pageStore.data?.meta?.description)
const body = computed(() => pageStore.data?.body)
</script>

<style lang="scss">
.app {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

