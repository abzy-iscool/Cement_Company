// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  render: {
    static: {
      // enable client-side caching for 1 day (24 hours)
      maxAge: 1000 * 60 * 60 * 24,
    }
  },
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
});

