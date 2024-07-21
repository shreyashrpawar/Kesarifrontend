<template>
  <div>
    <div class="page-wrapper">
      <!-- top navbar for homescreen -->
      <home-header />
      <!-- slider to show marketing content -->
      <app-slider />
      <!-- serch-area-start -->
      <div class="wpo-select-section search-form search-form">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="wpo-select-wrap">
                <div class="wpo-select-area">
                  <form class="clearfix" @submit.prevent="searchResorts">
                    <div class="select-sub">
                      <!-- Datepicker as text field -->
                      <div class="input-group date">
                        <select class="styled-select" id="destination" style="font-size: 1.2rem"
                          v-model="form.locationId" @change="setLocationName($event)" required>
                          <option value="" disabled selected>
                            Destination
                          </option>
                          <option v-for="location in locations" :value="location.id" :key="location.id">
                            {{ location.name }}
                          </option>
                        </select>
                        <i class="fi flaticon-placeholder"></i>
                      </div>
                    </div>
                    <div class="select-sub input-border">
                      <div class="input-group" @click="scrollItemView">
                        <date-range-picker ref="picker" opens="center" :min-date="minDate" :ranges="false"
                          :showDropdowns="true" :autoApply="true" v-model="dateRange">
                          <template #date="data">
                            <span class="small">{{
                            data.date | dateCell
                            }}</span>
                          </template>

                          <template v-slot:input="picker" style="min-width: 350px">
                            <i class="fa fa-calendar fa-lg mr-1" style="color: #7e90a6; margin-left: 10px"></i>
                            <span v-if="picker.startDate == null" class="text-muted">Wedding Start - Wedding End</span>
                            <span v-else>{{ picker.startDate | date }} -
                              {{ picker.endDate | date }}</span>
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                    <div class="select-sub">
                      <!-- Datepicker as text field -->
                      <div class="input-group date">
                        <input id="scrollItem" type="number" style="font-size: 1.2rem" placeholder="Guests" min="1"
                          v-model="form.guests" required />
                        <i class="fi flaticon-user"></i>
                      </div>
                    </div>
                    <div class="select-sub">
                      <div class="input-group date budget">
                        <input type="number" style="font-size: 1.2rem" placeholder="Budget" min="1"
                          v-model="form.budget" required />

                        <!-- Add the style and icon you want -->
                        <i class="fa fa-inr fa-lg" style="
                            color: #7e90a6;
                            margin-left: 10px;
                            margin-right: 0;
                          "></i>
                      </div>
                    </div>
                    <div class="select-sub">
                      <button class="theme-btn" type="submit">
                        Check Availability
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- search-area-end -->

      <!-- top-destination-area-start -->
      <div v-if="topDestinations.length > 0" class="wpo-destination-area mt-5 pb-1">
        <div class="container">
          <div class="wpo-section-title">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-6 col-md-8">
                <div class="wpo-section-title-s2 mb-0">
                  <h2>Top Destinations</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="destination-wrap">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12" v-for="(destination, index) in topDestinations" :key="index">
                <top-destination-card :imgSrc="destination.name.toLowerCase() + '.png'" :name="destination.name"
                  :propertyCount="destination.count" propertyLink="#" :topDestinationStartDate="topDestinationStartDate"
                  :topDestinationEndDate="topDestinationEndDate" />
              </div>
              <!-- <div class="col-lg-4 col-md-6 col-12">
                <top-destination-card imgSrc="udaipur.png" name="Udaipur" propertyCount="0" propertyLink="#" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- top-destination-area-end -->

      <!-- start how-it-works-section -->
      <how-it-works />
      <!-- end how-it-works-section -->

      <!-- how-it-works-section -->
      <!-- <section class="wpo-blog-pg-section section-padding">
        <div class="container">
          <div class="row">
            <div class="col col-lg-10 offset-lg-1">
              <div class="wpo-blog-content">
                <div class="post format-video">
                  <div class="entry-media video-holder">
                    <img src="~assets/images/blog/img-6.jpg" alt="">
                    <a href="https://www.youtube.com/embed/bU5DwiZ6RX0" target="_blank" class="video-btn"
                      data-type="iframe">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <!-- featured-resorts-section start -->
      <div v-if="featuredResorts" class="wpo-room-area section-padding">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-6 col-md-8">
              <div class="wpo-section-title-s2">
                <h2>Featured Resorts</h2>
              </div>
            </div>
          </div>
          <div class="room-wrap">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12" v-for="featuredResort in featuredResorts" :key="featuredResort.id">
                <resort-card :location="featuredResort.location" :name="featuredResort.name"
                  :img-src="featuredResort.featured_image" :price="featuredResort.amount"
                  :room-count="featuredResort.pax" :nights="featuredResort.night" :resort-route="{
                    id: featuredResort.id,
                    startDate: calcStartDate,
                    endDate: calcEndDate,
                    guests: 50,
                    budget: 500000,
                  }" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- featured-resorts-section end-->

      <!-- start why-choose-us-section -->
      <choose-us />
      <!-- end why-choose-us-section -->

      <!-- testimonial-area start -->
      <client-only>
        <b-container class="mb-5">
          <div class="row align-items-center justify-content-between">
            <div class="col col-12">
              <div style="text-align: center" class="mt-5 mb-5">
                <h2>Top Reviews</h2>
              </div>
            </div>
          </div>
          <div>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <b-card img-left class="mb-5 testimonial-card overflow-hidden">
                  <b-row class="wpo-testimonial-content" no-gutters>
                    <b-col md="4">
                      <nuxt-img format="webp" src="/images/testimonial/review-1.png" alt="Image" class="rounded-0">
                      </nuxt-img>
                    </b-col>
                    <b-col md="6" class="p-3">
                      <b-card-body>
                        <b-col md="6" class="mb-3">
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                        </b-col>
                        <p class="h4 testimonial-card-text">
                          <q>Thankyou team Awayddings for giving us amazing
                            memories to cherish. We are happy with your service
                            and will stay in touch for future plans.</q>
                        </p>
                        <h2 class="text-danger mt-3">Gaurav & Jyoti</h2>
                        <span>- Longuinhos beach resort</span>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </swiper-slide>
              <swiper-slide>
                <b-card img-left class="mb-5 testimonial-card overflow-hidden">
                  <b-row class="wpo-testimonial-content" no-gutters>
                    <b-col md="4">
                      <nuxt-img format="webp" src="/images/testimonial/review-2.png" alt="Image" class="rounded-0">
                      </nuxt-img>
                    </b-col>
                    <b-col md="6" class="p-3">
                      <b-card-body>
                        <b-col md="6" class="mb-3">
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                        </b-col>
                        <p class="h4 testimonial-card-text">
                          <q>Thankyou to the whole awayddings team for making our
                            special day even more special. Best wishes for your
                            growth.</q>
                        </p>
                        <h2 class="text-danger mt-3">Aman & Upsana</h2>
                        <span>- Longuinhos beach resort</span>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </swiper-slide>
              <swiper-slide>
                <b-card img-left class="mb-5 testimonial-card overflow-hidden">
                  <b-row class="wpo-testimonial-content" no-gutters>
                    <b-col md="4">
                      <nuxt-img format="webp" src="/images/testimonial/review-3.png" alt="Image" class="rounded-0">
                      </nuxt-img>
                    </b-col>
                    <b-col md="6" class="p-3">
                      <b-card-body>
                        <b-col md="6" class="mb-3">
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color:red"></b-icon>
                        </b-col>
                        <p class="h4 testimonial-card-text">
                          <q>Thank you Team Awayddings for amazing memories and
                            smooth Venue booking experience.</q>
                        </p>
                        <h2 class="text-danger mt-3">Kavita & Yogesh</h2>
                        <span>- Bambolim beach resort</span>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </swiper-slide>

              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </b-container>
      </client-only>
      <!-- testimonial-area end -->
      <!-- start blog-section -->
      <section class="wpo-blog-section section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="wpo-section-title-s2">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div class="wpo-blog-items">
            <div class="row">
              <div class="col col-lg-4 col-md-6 col-12" v-for="(blog, index) in blogs" :key="index">
                <blog-card :blog-title="blog.title" :blog-link="'/blog/' + blog.slug" :img-src="blog.img"
                  :blog-description="blog.description" />
              </div>
            </div>
          </div>



        </div>
      </section>
      <!-- end blog-section -->
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "swiper/css/swiper.css";
// import style (<= Swiper 5.x)
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import { mapActions } from "vuex";
import AppSlider from "../components/home/AppSlider.vue";
import BlogCard from "../components/home/BlogCard.vue";
import ChooseUs from "../components/home/ChooseUs.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import HowItWorks from "../components/home/HowItWorks.vue";
import ResortCard from "../components/home/ResortCard.vue";
import TopDestinationCard from "../components/ui/TopDestinationCard.vue";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    DateRangePicker,
    ResortCard,
    ChooseUs,
    HowItWorks,
    TopDestinationCard,
    BlogCard,
    AppSlider,
    HomeHeader,
  },

  async asyncData({ $content, params }) {
    const blogs = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch();
    return {
      blogs
    }
  },

  data() {
    return {
      locations: "",
      featuredResorts: "",
      topDestinations: [],
      topDestinationStartDate: moment(new Date())
        .add(1, "days")
        .format("YYYY-MM-DD"),
      topDestinationEndDate: moment(new Date())
        .add(2, "days")
        .format("YYYY-MM-DD"),
      form: {
        guests: "",
        startDate: "",
        endDate: "",
        locationId: "",
        budget: "",
        locationName: "",
      },
      destinationState: null,
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      dateRange: {
        startDate: null,
        endDate: null,
      },
      minDate: new Date(),
    };
  },

  head: {
    title: "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature." },
      { hid: "keywords", name: "keywords", content: "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings" },
    ],

    script: [
      {
        type: "text/javascript",
        src: "js/jquery.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/bootstrap.bundle.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/modernizr.custom.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/jquery-plugin-collection.js",
        body: true,
      },

      {
        type: "text/javascript",
        src: "js/script.js",
        body: true,
      },
    ],
  },
  computed: {
    calcStartDate() {
      return moment(new Date()).format("YYYY-MM-DD");
    },

    calcEndDate() {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 2);
      return moment(newDate).format("YYYY-MM-DD");
    },
  },

  filters: {
    dateCell(value) {
      let dt = new Date(value);
      return dt.getDate();
    },
    date(val) {
      return val ? moment(val).format("DD/MM/YYYY") : "";
    },
  },

  methods: {
    ...mapActions(["SET_SEARCH_DATA", "toggleLoading"]),

    setupSearchData() {
      this.form.locationId = this.$store.getters.getDestination;
      this.form.guests = this.$store.getters.getGuests;
      this.form.startDate = this.$store.getters.getStartDate;
      this.dateRange.startDate = this.$store.getters.getStartDate;
      this.form.endDate = this.$store.getters.getEndDate;
      this.dateRange.endDate = this.$store.getters.getEndDate;
      this.form.budget = this.$store.getters.getBudget;
    },

    // scroll calender when clicked
    scrollItemView() {
      var element = document.getElementById("scrollItem");
      element.scrollIntoView({ behavior: "smooth" });
    },

    getLocations() {
      this.$axios.get("api/v1/locations").then((res) => {
        this.locations = res.data.data;
      });
    },

    getFeaturedResorts() {
      this.$axios.get("api/v1/property/random").then((res) => {
        this.featuredResorts = res.data.data;
        console.log("test");
      });
    },

    getTopDestination() {
      this.$store.dispatch("toggleLoading", true);
      this.$axios.get("api/v1/top-destination").then((res) => {
        this.topDestinations = res.data.data;
        console.log(
          "🚀 ~ file: index.vue ~ line 533 ~ this.$axios.get ~ topDestinations",
          this.topDestinations
        );
      });
      this.$store.dispatch("toggleLoading", false);
    },

    setLocationName(event) {
      this.form.locationName = event.target[event.target.selectedIndex].text;
    },

    searchResorts() {
      this.form.startDate = moment(this.dateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.form.endDate = moment(this.dateRange.endDate).format("YYYY-MM-DD");
      this.$store.dispatch("SET_SEARCH_DATA", this.form);

      this.$router.push({
        name: "search",
        query: {
          start_date: this.form.startDate,
          end_date: this.form.endDate,
          guests: this.form.guests,
          budget: this.form.budget,
          location_id: this.form.locationId,
          location_name: this.form.locationName,
        },
      });
    },
  },

  mounted() {
    this.getLocations();
    this.getTopDestination();
    this.getFeaturedResorts();
    this.setupSearchData();
    // this.showModal();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

::v-deep h2 {
  font-family: 'Nunito';
  font-weight: 700 !important;
}

.card>img.card-img-left {
  max-height: 300px;
}

.styled-select {
  background-color: #fff !important;
}

.styled-select:invalid {
  color: #7f91a6;
  background-color: #fff;
}

::v-deep #example-datepicker {
  color: #154279;
  font-size: 1.25rem;
}

@media (max-width: 991px) {
  .datepicker-ui {
    font-size: 0.9rem;
  }

  ::v-deep #example-datepicker {
    font-size: 1rem;
    padding-right: 0.1rem;
  }

  ::v-deep .b-form-btn-label-control.form-control>.form-control {
    padding-left: 0rem;
  }
}

::v-deep .vue-daterange-picker {
  width: 100%;
  height: 60px;
  padding: 0;
}

::v-deep .vue-daterange-picker .form-control {
  border: none;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.wpo-select-section .wpo-select-area form .input-border,
.wpo-select-section-s2 .wpo-select-area form .input-border {
  position: relative;
  border-right: 2px solid #c8ced4;
}

@media (max-width: 991px) {

  .wpo-select-section .wpo-select-area form .input-border,
  .wpo-select-section-s2 .wpo-select-area form .input-border {
    border-right: 0;
    border-bottom: 1px solid #c8ced4;
  }
}

.datepicker-ui {
  border: none;
}

.datepicker-ui:focus {
  box-shadow: none;
}
</style>
