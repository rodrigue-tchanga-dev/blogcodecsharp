export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: [
    '~/app/assets/css/tailwind.css',
  ],
});