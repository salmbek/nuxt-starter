const webpack = require("webpack");
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'metro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet',href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"},
      { rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
      
    ],
    scripts: [
      { src: "https://code.jquery.com/jquery-3.5.1.slim.min.js" },
      { src: " https://unpkg.com/@popperjs/core@2" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/css/bootstrap.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
        { src: "~/plugins/jquery-1.js", mode: "client" },
        { src: "~/plugins/popper-1.js", mode: "client" },
        { src: "~plugins/bootstrap-1.js", mode: "client" },
        { src: "~/plugins/main-1.js", mode: "client" },
        { src: "~/plugins/main-lg-1.js", mode: "client" },
        { src: "~/plugins/mycourses-1.js", mode: "client" },
        { src: "~/plugins/login-1.js", mode: "client" },
        { src: "~/plugins/profile-1.js", mode: "client" },
        {src: "~/plugins/loading-1.js", mode:"client"}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/netlify-files',
    ['@nuxtjs/netlify-files', { /* module options */ }]
  ],
  netlifyFiles: {
    /* module options */
    
  },
  generate: {
    fallback: true
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins:[
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: "jquery"
      })
    ]
  }
}
