<template>
  <!-- start page-wrapper -->
  <div class="description-page-wrapper">
    <Script>
      gtag('event', 'conversion', {'send_to': 'AW-323022855/TuWgCLav05UYEIfgg5oB'});
    </Script>
    <!-- Start header -->
    <header id="header">
      <div class="wpo-site-header wpo-header-style-3">
        <nav class="navigation navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div class="mobail-menu">
                  <button type="button" class="navbar-toggler open-btn" @click="toggleMobileNavigation">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-6">
                <div class="navbar-header">
                  <a class="navbar-brand" href="/">
                    <img src="~/assets/images/awayddings-logo.png" class="img-fluid img-thumbnail border-0" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-9 col-md-1 col-1">
                <div id="navbar" class="collapse navbar-collapse navigation-holder">
                  <button class="menu-close"><i class="ti-close"></i></button>
                  <ul class="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/about">About Us</nuxt-link>
                    </li>

                    <li>
                      <nuxt-link to="/contact-us">Contact</nuxt-link>
                    </li>
                  </ul>
                </div>
                <!-- end of nav-collapse -->
              </div>
            </div>
          </div>
          <!-- end of container -->
        </nav>
      </div>
    </header>
    <!-- End header -->
    <b-container class="mt-5 mb-5" style="text-align: center">
      <header class="site-header" id="header">
        <h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
      </header>

      <div class="main-content">
        <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
        <p class="main-content__body">Thanks a bunch for filling that out. It
          means a lot to us, just like you do! We really appreciate you giving us a moment of your time today.
          Our team will get in touch with you within 6 hrs.
        </p>
        <p>If you want to get in touch soon, drop in a whatsapp message and we shall contact you ASAP</p>
      </div>

      <div>
        <nuxt-link to="/" class="theme-btn w-100 mb-3 w-50" style="color: white !important;width: 20rem !important;">
          Go to Home
        </nuxt-link>
      </div>
    </b-container>

  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "booking-Jaipur",
  components: {
    AppHeader,
  },
  head: {
    title: "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Awayddings is the best destination wedding planner in Jaipur offers luxurious destination weddings venues in Jaipur to experience the magic of nature." },
      { hid: "keywords", name: "keywords", content: "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Jaipur, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings" },
    ],
  },
  data() {
    return {
    };
  },
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          innerHTML: `gtag('event', 'conversion', {'send_to': 'AW-323022855/T4xhCPu-r84DEIfgg5oB'});`
        },
        {
          type: 'text/javascript',
          innerHTML: `<!-- Hotjar Tracking Code for https://www.awayddings.com -->
          (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3080245,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
        }
      ], __dangerouslyDisableSanitizers: ['script']
    }
  }
}

</script>

<style scoped>
::v-deep .fa-check:before {
  content: "\f00c";
}

::v-deep .fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.main-content__checkmark {
  font-size: 9.75rem;
  line-height: 1;
  color: #24b663;
}

.site-header__title {
  font-size: 4rem;
}

.main-content__body {
  font-size: 1.5rem;
}
</style>
