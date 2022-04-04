export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Racun Produk Sadiskon | Irit.Link by Sadiskon',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script:[
      {
        src: 'https://sdki.truepush.com/sdk/v2.0.3/app.js',
        body: true,
        async: true
      },
      {
        src: '/assets/js/truepush.js',
        body: true,
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
    'nuxt-delay-hydration'
  ],
  // Delay Hydration Config
  delayHydration: {
    mode: 'init',
    // debug: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    '@nuxt/http',
    'vue-social-sharing/nuxt',
    '@nuxtjs/gtm',
    ['nuxt-clipboard', { autoSetContainer: true }],
  ],
  // http config
  http: {
    baseURL: 'https://public-api.wordpress.com/rest/v1.1/sites/racunproduk.wordpress.com'
  },
  //firebase Config:
  //Progressive Web App
  pwa: {
    manifest: {
      name: 'Racun Diskon',
      lang: 'id',
      short_name: 'Racun Diskon',
      useWebmanifestExtension: false
    },
    
  },
  workbox:{
    // swURL: '/assets/js/sw-racun.js',
    importScripts: '/assets/js/sw-racun.js'
  },
  // Google Tag Manager
  gtm: {
    id: 'GTM-K5ZNMV4'
  },
  // Google Fonts

  googleFonts: {
    families: {
      Roboto: true,
    }
  },
  // IPX Middelware
  serverMiddleware: {
    '/_ipx': '~/server/middleware/ipx.js'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
