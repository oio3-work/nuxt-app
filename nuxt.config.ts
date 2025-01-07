// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Scholar",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "Scholar" }],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js",
        } 
      ],
      link: [
        {
          rel: "stylesheet",
          href: "node_modules/@glidejs/glide/dist/css/glide.core.min.css",
        },
        {
          rel: "stylesheet",
          href: "node_modules/@glidejs/glide/dist/css/glide.theme.min.css",
        },
        
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@hypernym/nuxt-anime", "@nuxt/image", "vue3-carousel-nuxt"],

  image: {
    dir: "public",
  },
  css: ["@/assets/fonts.css" ,  "@/assets/main.scss" , "@/assets/infinteScroll.css" ],
  plugins: [  '~/plugins/infinite-logo-carousel.js' ],
  ssr: false,
});
