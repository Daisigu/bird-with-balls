// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@tresjs/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  tres: {
    devtools: true,
  },
  nitro: {
    experimental: {
      websocket: true
    }
  },
})