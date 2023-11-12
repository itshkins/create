// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import pugPlugin from 'vite-plugin-pug'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  pages: false,
  modules: [
    `@pinia/nuxt`,
    `nuxt-swiper`,
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL ?? `https://devtwit8.ru/api/v1/page/?path=`,
    },
  },
  vite: {
    plugins: [
      svgLoader(),
      pugPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: /* language=scss */ `
            @import "normalize.css/normalize.css";
            @import "@/assets/styles/mixins";
            @import "@/assets/styles/variables";
            @import "@/assets/styles/globals";
          `,
        }
      }
    }
  },
})
