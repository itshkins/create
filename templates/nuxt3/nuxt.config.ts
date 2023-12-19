// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import pugPlugin from 'vite-plugin-pug'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: true,
  pages: false,
  modules: [
    `@pinia/nuxt`,
    `nuxt-swiper`,
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  css: [
    `normalize.css/normalize.css`,
    `${__dirname}/assets/styles/fonts.scss`,
    `${__dirname}/assets/styles/globals.scss`,
  ],
  vite: {
    plugins: [
      svgLoader(),
      pugPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: /* language=scss */ `
            @import "@/assets/styles/variables";
            @import "@/assets/styles/mixins";
          `,
        }
      }
    }
  },
  swiper: {
  },
})
