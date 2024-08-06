import { POSITION } from "vue-toastification";
import webpack from "webpack";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  head: {
    title:
      "Awayddings - Destination Wedding Planner in India with Top Destinations",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "google-site-verification",
        content: "blvWuLISENqZxcT2UCE8FhXXPVhb4SrImkoaG6YeVgM",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Are you looking for a destination wedding venue? Awayddings destination wedding planner offers a luxurious destination wedding in India with top luxurious wedding destinations.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues",
      },
      {
        property: "og:title",
        content: `Awayddings - Destination Wedding Planner in India with Top Destinations`,
      },
      {
        property: "og:description",
        content: `Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature.`,
      },
      {
        property: "og:image",
        content: `/awayddings-logo.png`,
      },
      {
        name: "facebook-domain-verification",
        content: "n8sa9mqo7dtvilqnvg5ij96cbya5a1",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=AW-323022855",
        async: true,
      },
      {
        src: "/js/ga.js",
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-PSQ3E3DPRS",
        async: true,
      },
      {
        src: "/js/ga-2.js",
      },
      {
        src: "/js/pixel.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/fonts.css",
    "@/assets/css/themify-icons.css",
    "@/assets/css/font-awesome.min.css",
    "@/assets/css/flaticon.css",
    "@/assets/css/animate.css",
    "@/assets/css/slick.css",
    "@/assets/css/slick-theme.css",
    "@/assets/css/style.css",
    "@/assets/css/swiper.min.css",
    "@/assets/css/owl.transitions.css",
    "@/assets/css/jquery.fancybox.css",
    "@/assets/css/odometer-theme-default.css",
    "@/assets/css/jquery-ui.css",
    "@/assets/css/style.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vuex-persist", ssr: false }],

  middleware: ["auth"],
  // auth: "guest",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Nunito: {
        wght: [800, 900],
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "vue-toastification/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
  ],
  sitemap: {
    hostname: "https://www.awayddings.com",
    //hostname: "http://localhost:3000/ ",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || "https://dev.awayddings.com/api/v1/",
    // baseURL:"https://irasmart.life/",\
    // baseURL:"http://localhost:8000",
    proxyHeaders: false,
    credentials: false
  },

  generate: {
    fallback: true,
  },

  // Pass options for vue-toastification through the "toast" key
  toast: {
    timeout: 3000,
    position: POSITION.TOP_CENTER,
  },

  image: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  },

  buildModules: ["@nuxtjs/device", "@nuxt/image"],
};
