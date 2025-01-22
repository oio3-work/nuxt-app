// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  app: {
    head: {
      title: "Scholar",

      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "Scholar" }],
      script: [],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@hypernym/nuxt-anime", "@nuxt/image", "nuxt-swiper"],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dwh8dr1qp/image/upload/v1736691934/scholar_land/',
    },
    dir: "public",
  },
  css: ["@/assets/fonts.css"],
  ssr: false,
 
  runtimeConfig: {
    public: {
      apiBase: 'https://api.scholar-ai.iq/api/dash',
    }
  }
});
