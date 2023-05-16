import axios from 'axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Duffy Motors Manchester Ltd',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Duffy Motors is a highly rated MOT and Service centre, right in the heart of Manchester City Centre. Call 0161 834 4168.'
      },
      // open graph
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Duffy Motors Manchester Ltd'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'Duffy Motors is a highly rated MOT and Service centre, right in the heart of Manchester City Centre. Call 0161 834 4168.'
      }
    ],
    webfontloader: {
      google: {
        families: ['Montserrat:500,600,800', 'Trebuchet MS:400,500,600']
      }
    },
    link: [
      // add favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // defer non critical below the fold css
      { rel: 'preload', as: 'style', href: '/css/style.css', onload: 'this.rel="stylesheet"' }
    ]
  },

  /** Set Api Base URL Globally */
  env: {
    baseUrl: process.env.BASE_URL || 'https://duffymotors.co.uk/api/wp-json/wp/v2'
  },

  // Generate static routes make sure nuxt server is running before $ npm run generate
  generate: {
    routes () {
      return axios.get('https://duffymotors.co.uk/api/wp-json/wp/v2/posts').then((res) => {
        return res.data.map((post) => {
          return {
            route: '/blog/' + post.slug,
            payload: (post)
          }
        })
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/critical.css',
    '~assets/css/blocks.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-61237612-1'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-lazy-load', {
      defaultImage: '/images/lazy.gif',
      loadingClass: false,
      loadedClass: false,
      appendClass: false,
      
    }],
  ],

  sitemap: {
    hostname: 'https://duffymotors.co.uk',
    gzip: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#24c4e8'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    // removes on page css - need to add this to docs
    extractCSS: true,

    // minify build
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    },

    // post css
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'postcss-url': {},
        // to edit target browsers: use "browserslist" field in package.json
        'autoprefixer': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
    
  }

}
