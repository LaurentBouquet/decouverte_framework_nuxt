// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/decouverte_framework_nuxt/', // Remplacez par le nom de votre repository
    buildAssetsDir: 'assets', // Évitez les noms commençant par "_"
  },
})

