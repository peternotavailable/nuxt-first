// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  devtools: { enabled: true }, 
  app: {
    head: {
      title: 'Nuxt Dojo', 
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ], 
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ] 
    }
  }, 
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }, 
  pinia: {
    autoImports: [
      'defineStore'
    ]
  }, 
  i18n: {
    langDir: 'locales', 
    locales: [
      {
        code: 'en', 
        iso: 'en-US', 
        file: 'en.json'
      }, 
      {
        code: 'zh', 
        iso: 'zh-TW', 
        file: 'zh.json'
      }, 

    ], 
    defaultLocale: 'zh', 
    strategy: 'no_prefix', 
    detectBrowserLanguage: {
      useCookie: true, 
      cookieKey: 'i18n_redirected', 
      redirectOn: 'root'
    }
  } 
})
