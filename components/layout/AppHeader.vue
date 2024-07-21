<template>
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
                  <li class="menu-item-has-children">
                    <nuxt-link to="#">Destinations</nuxt-link>
                    <ul class="sub-menu">
                      <li v-for="location in locations" :key="location.id">
                        <!-- <nuxt-link to="/destination/goa"
                          >{{ destination.name }}goa</nuxt-link
                        > -->
                        <nuxt-link :to="{
                          path: 'search',
                          query: {
                            id: location.id,
                            start_date: calcStartDate,
                            end_date: calcEndDate,
                            guests: guests,
                            budget: budget,
                          },
                        }">{{ location.name }}</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/event">Plan My Wedding</nuxt-link>
                  </li>
                  
                  <li>
                    <nuxt-link to="/about">About Us</nuxt-link>
                  </li>
                  <li>
                    
                  </li>
                  <!-- <li class="menu-item-has-children">
                    <nuxt-link to="#">Top Destinitions</nuxt-link>
                    <ul class="sub-menu">
                      <li>
                        <nuxt-link to="/top-destination/goa">Goa</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/top-destination/udaipur"
                          >Udaipur</nuxt-link
                        >
                      </li>
                    </ul>
                  </li> -->
                  <!-- <li class="menu-item-has-children">
                    <a href="#">Blog</a>
                  </li> -->

                  <li>
                    <nuxt-link to="/contact-us">Contact</nuxt-link>
                  </li>
                  <!-- for users after log in  -->
                  <li v-if="isAuthenticated" class="menu-item-has-children">
                    <nuxt-link to="#">
                      Welcome,   <span v-if="getName.indexOf(' ') !== -1">
                           {{ getName.substring(0, getName.indexOf(' ')) }}
                       </span>
                       <span v-else>
                           {{ getName }}
                       </span>
                    </nuxt-link>
                    <ul class="sub-menu">
                      <li>
                        <nuxt-link to="/user/manage-profile">Profile</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/user/manage-bookings">Venue/ Resort bookings</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/user/event-bookings">Wedding Planning bookings</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/user/change-password">Change Password</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/sign-in" @click.native="logout()">Log Out</nuxt-link>
                      </li>
                    </ul>
                  </li>

                  <!-- for users who doesn't log in  -->
                  <template v-else>
                    <li>
                      <nuxt-link to="/register">Register</nuxt-link>
                    </li>
                    <li class="menu-item-has-children">
                      <nuxt-link to="#">Sign In</nuxt-link>
                      <ul class="sub-menu">
                        <li>
                          <nuxt-link to='/sign-in'>Customer</nuxt-link>
                        </li>
                        <li>
                          <a href='https://portal.awayddings.com' target="_blank">Vendor</a>
                        </li>
                      </ul>
                    </li>
                  </template>
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
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "AppHeader",

  computed: {
    ...mapGetters(["isAuthenticated", "getName"]),

    calcStartDate() {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 1);
      return moment(newDate).format("YYYY-MM-DD");
    },

    calcEndDate() {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 2);
      return moment(newDate).format("YYYY-MM-DD");
    },
  },
  data() {
    return {
      locations: [],
      startDate: "",

      endDate: "",
      guests: 50,
      budget: 200000,
    };
  },

  methods: {
    toggleMobileNavigation() {
      var navbar = $(".navigation-holder");
      var openBtn = $(".mobail-menu .open-btn");
      var xbutton = $(".mobail-menu .navbar-toggler");

      openBtn.on("click", function (e) {
        e.stopImmediatePropagation();
        navbar.toggleClass("slideInn");
        xbutton.toggleClass("x-close");
        return false;
      });
    },

    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/");
      this.$toast.success("Logged out successfully");
    },
    getLocations() {
      this.$axios.get("locations").then((res) => {
        this.locations = res.data.data;
        console.log(this.locations);
      });
    },
  },
  mounted() {
    this.getLocations();
  },
};
</script>
