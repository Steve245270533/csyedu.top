import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['tegaki/nuxt'],
  compatibilityDate: '2026-09-14',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Steve Chen',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#161616', media: '(prefers-color-scheme: dark)' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  nitro: { prerender: { routes: ['/', '/lab', '/contact'], crawlLinks: true } },
  typescript: { strict: true },
})
