export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
   vite: {
    plugins: [
      require('vite-tsconfig-paths')(),
    ],
  },
  // css: [
  //   '~/app/assets/css/tailwind.css',
  // ],
});