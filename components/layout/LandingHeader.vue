<template>
  <header id="header">
    <div class="wpo-site-header wpo-header-style-2">
      <nav class="navigation navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
            </div>
            <div class="col-lg-2 col-md-6 col-6">
              <div class="navbar-header">
                <a class="navbar-brand" href="/">
                  <img src="~/assets/images/title-logo.png" class="img-fluid" alt="" />
                </a>
              </div>
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
  name: "LandingHeader",

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
