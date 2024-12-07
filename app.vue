<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    }
  ]
})

useSeoMeta({
  title: 'Spinning bird with Balls',
  description: 'Spinning bird with Balls',
  ogTitle: 'Spinning Bird with Balls',
  ogDescription: 'Spinning Bird with Balls',
  ogImage: '/main-image.jpg',
  ogUrl: 'https://spinning-bird-with-balls.ru/',
  twitterTitle: 'Spinning Bird with Balls',
  twitterDescription: 'Spinning Bird with Balls',
  twitterImage: '/main-image.jpg',
  twitterCard: 'summary_large_image'
})

</script>
<template>
  <div class="flex-grow text-white bg-black flex-col flex min-h-[100svh]">
    <VHeader/>
    <VBirdModel class="flex-grow"/>
    <VFooter/>
  </div>
</template>
