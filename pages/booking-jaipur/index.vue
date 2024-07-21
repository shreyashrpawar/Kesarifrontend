<template>
  <!-- start page-wrapper -->
  <div class="description-page-wrapper">
    <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-323022855">

    </Script>
    <Script>
      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-323022855'); 
    </Script>
    <!-- Start header -->
    <landing-header></landing-header>
    <!-- End header -->
    <div class="hero-image">
      <div class="row">
        <div class="col-md-6 pt-5 mt-5 ml-4">
          <h1 data-animation="fadeInUp" data-animation_dur="1000" style="
                              animation-duration: 1000ms;
                              opacity: 1;
                              margin-top: 3rem;
                              font-weight: 600;
                            " class="animated hero-text fadeInUp mx-4">
            Looking for a dream destination wedding in Jaipur ?
          </h1>
          <p data-animation="fadeInUp" data-animation_dur="1500" style="animation-duration: 1500ms; opacity: 1"
            class="animated hero-sub-text fadeInUp mx-4">
            <b-icon icon="check-square" scale="1" variant="success"></b-icon>
            Select & Shortlist your Favorite Venues <br />
            <b-icon icon="check-square" scale="1" variant="success"></b-icon>
            Explore Budget & Live availability <br />
            <b-icon icon="check-square" scale="1" variant="success"></b-icon>
            Schedule a guided visit <br />
            <b-icon icon="check-square" scale="1" variant="success"></b-icon>
            Book online
          </p>
        </div>
        <div class="col-md-5 mt-5">
          <b-card title="" style="max-width: 100rem" class="m-5 pt-4 pb-4">
            <b-form @submit.prevent="getFormValues">
              <table style="width: 100%">
                <tr>
                  <td>
                    <b-form-group label-for="input_customer_name">
                      <template v-slot:label>
                        Customer Name <span class="text-danger">*</span>
                      </template>
                      <b-form-input id="input_customer_name" required></b-form-input>
                    </b-form-group>
                  </td>
                  <td>
                    <b-form-group label-for="input_customer_email">
                      <template v-slot:label>
                        Email Address <span class="text-danger">*</span>
                      </template>
                      <b-form-input id="input_customer_email" type="email" required>
                      </b-form-input>
                    </b-form-group>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b-form-group label-for="input_customer_mobile">
                      <template v-slot:label>
                        Mobile No. <span class="text-danger">*</span>
                      </template>
                      <b-form-input id="input_customer_mobile"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        type="number" maxlength="10" required></b-form-input>
                    </b-form-group>
                  </td>
                  <td>
                    <b-form-group label-for="input_customer_date">
                      <template v-slot:label>
                        Wedding Date <span class="text-danger">*</span>
                      </template>
                      <b-form-input id="input_customer_date" type="date" :min="new Date().toISOString().split('T')[0]"
                        required></b-form-input>
                    </b-form-group>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b-form-group label-for="input_customer_location">
                      <template v-slot:label> Couple Name </template>
                      <b-form-input id="input_customer_location"></b-form-input>
                    </b-form-group>
                  </td>
                  <td>
                    <b-form-group label-for="input_customer_pax">
                      <template v-slot:label>
                        Total Guests <span class="text-danger">*</span>
                      </template>
                      <b-form-input id="input_customer_pax"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        type="number" maxlength="4" required></b-form-input>
                    </b-form-group>
                  </td>
                </tr>
              </table>
              <b-button type="submit" class="mt-3 theme-btn">Get a free quote</b-button>
            </b-form>
          </b-card>
        </div>
      </div>
    </div>
    <b-container>
      <div style="text-align: center">
        <h1 class="m-4 mt-5">
          <span class="landing-title">Destination Wedding in Jaipur</span>
        </h1>
      </div>

      <b-container>
        <div class="room-wrap mb-3">
          <div class="d-flex justify-content-center">
            <div>
              <div class="room-item">
                <div class="room-img">
                  <img height="200px" width="300px"
                    src="https://awayddings.s3.ap-south-1.amazonaws.com/images/1676692624Enterence.png"
                    alt="Indana Palace Jaipur" />
                </div>
                <div class="room-content">
                  <h2 class="mb-0 mt-0">Indana Palace Jaipur</h2>
                </div>
              </div>
            </div>
            <div>
              <div class="room-item">
                <div class="room-img">
                  <img height="200px" width="300px"
                    src="	https://awayddings.s3.ap-south-1.amazonaws.com/images/1676699098Enterence1.jpg"
                    alt="Chokhi Dhani Ethnic Village Resort" />
                </div>
                <div class="room-content">
                  <h2 class="mb-0 mt-0">Chokhi Dhani Ethnic Village Resort</h2>
                </div>
              </div>
            </div>
            <div>
              <div class="room-item">
                <div class="room-img">
                  <img height="200px" width="300px"
                    src="https://awayddings.s3.ap-south-1.amazonaws.com/images/1676694394CPC_1122_012.jpg"
                    alt="Chomu palace" />
                </div>
                <div class="room-content">
                  <h2 class="mb-0 mt-0">Chomu Palace</h2>
                </div>
              </div>
            </div>
            <div>
              <div class="room-item">
                <div class="room-img">
                  <img height="200px" width="300px"
                    src="https://awayddings.s3.ap-south-1.amazonaws.com/images/1676863339Night%20Pic.jpg"
                    alt="Ramada by Wyndham Jaipur" />
                </div>
                <div class="room-content">
                  <h2 class="mb-0 mt-0">Ramada by Wyndham Jaipur</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container>

      <!-- start how-it-works-section -->
      <b-container>
        <section class="wpo-fun-fact-section-s2 section-padding">
          <div class="container-fluid">
            <div class="row">
              <div class="col col-12 mb-5">
                <h1><span class="landing-title">How It Works</span></h1>
              </div>
            </div>
            <div class="row">
              <div class="col col-xs-12">
                <div class="wpo-fun-fact-grids clearfix row">
                  <div class="grid col-md-3">
                    <div class="info">
                      <img src="~/assets/images/service/hotel.png" class="img-fluid" alt="" />
                      <h4>Discover Venue's</h4>
                      <p>
                        Input your requirements & see our recommendations &
                        prices.
                      </p>
                    </div>
                  </div>
                  <div class="grid col-md-3">
                    <div class="info">
                      <img src="~/assets/images/service/diamond.png" class="img-fluid" alt="" />
                      <h4>Guided Visits</h4>
                      <p>Visit venues on your own or with our venue expert.</p>
                    </div>
                  </div>
                  <div class="grid col-md-3">
                    <div class="info">
                      <img src="~/assets/images/service/calendar.png" class="img-fluid" alt="" />
                      <h4>Book Venue</h4>
                      <p>Get final quotes(upto 30% off) and book your venue.</p>
                    </div>
                  </div>
                  <div class="grid col-md-3">
                    <div class="info">
                      <img src="~/assets/images/service/book.png" class="img-fluid" alt="" />
                      <h4>Book Vendors</h4>
                      <p>
                        Meet our trusted vendors and book them at your ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end container -->
        </section>
      </b-container>

      <!-- end how-it-works-section -->

      <b-container>
        <section class="wpo-fun-fact-section-s2 section-padding">
          <div class="container-fluid">
            <div class="row">
              <div class="col col-12 mb-5">
                <h1><span class="landing-title">Why Jaipur?</span></h1>
              </div>
            </div>
            <div class="row">
              <h5>
                Forts and palaces and even better venues make the pink city Jaipur a
                popular wedding destination. Whether you want an intimate
                wedding with immediate family and friends or a lavish
                extravaganza, we highly recommend you take get in touch with us.
                Jaipur offers a variety of locations when it comes to picking a
                venue where you want to take your vows.
              </h5>
            </div>
          </div>
        </section>
      </b-container>

      <b-container>
        <section class="wpo-fun-fact-section-s2 section-padding">
          <div class="container-fluid">
            <div class="row">
              <div class="col col-12 mb-5">
                <h1><span class="landing-title">Why Choose Us?</span></h1>
              </div>
            </div>
            <div class="row">
              <div class="col col-xs-12">
                <div class="wpo-fun-fact-grids clearfix row">
                  <div class="grid col-md-3">
                    <div class="info">
                      <h3>
                        <span class="odometer" data-count="100">20</span>+
                      </h3>
                      <p>Wedding Resorts</p>
                    </div>
                  </div>
                  <div class="grid col-md-3">
                    <div class="info">
                      <h3>Trust & Safety</h3>
                      <p>Feel safe in our properties</p>
                    </div>
                  </div>
                  <div class="grid col-md-3">
                    <div class="info">
                      <h3>Best Prices</h3>
                      <p>Garanteed best pricing</p>
                    </div>
                  </div>
                  <div class="grid col-md-3">
                    <div class="info">
                      <h3><span class="odometer" data-count="35">30</span>+</h3>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </b-container>
      <!-- testimonial-area start -->
      <client-only>
        <div class="mb-3">
          <div class="row align-items-center justify-content-between">
            <div class="col col-12">
              <div style="text-align: center" class="mt-5 mb-5">
                <h1><span class="landing-title">Testimonials</span></h1>
              </div>
            </div>
          </div>
          <div>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <b-card img-left class="mb-5 testimonial-card overflow-hidden">
                  <b-row class="wpo-testimonial-content" no-gutters>
                    <b-col md="4">
                      <b-card-img src="~/assets/images/testimonial/review-1.png" alt="Image" class="rounded-0">
                      </b-card-img>
                    </b-col>
                    <b-col md="6" class="p-3">
                      <b-card-body>
                        <b-col md="6" class="mb-3">
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
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
                      <b-card-img src="~/assets/images/testimonial/review-2.png" alt="Image" class="rounded-0">
                      </b-card-img>
                    </b-col>
                    <b-col md="6" class="p-3">
                      <b-card-body>
                        <b-col md="6" class="mb-3">
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                        </b-col>
                        <p class="h4 testimonial-card-text">
                          <q>Thankyou to the whole awayddings team for making
                            our special day even more special. Best wishes for
                            your growth.</q>
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
                      <b-card-img src="~/assets/images/testimonial/review-3.png" alt="Image" class="rounded-0">
                      </b-card-img>
                    </b-col>
                    <b-col md="6" class="p-3">
                      <b-card-body>
                        <b-col md="6" class="mb-3">
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2" style="color: red"></b-icon>
                          <b-icon icon="star-fill" font-scale="2"></b-icon>
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
        </div>
      </client-only>
      <!-- testimonial-area end -->

      <div class="mb-5 mr-2 ml-2" id="get-a-quote">
        <h2 class="font-weight-bold mb-5" style="text-align: center">
          <span class="landing-title">Get a Free Quote from Awayddings!</span>
        </h2>

        <b-form @submit.prevent="getFormValues">
          <table style="width: 100%">
            <tr>
              <td>
                <b-form-group label-for="input_customer_name">
                  <template v-slot:label>
                    Customer Name <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_name" required></b-form-input>
                </b-form-group>
              </td>
              <td>
                <b-form-group label-for="input_customer_email">
                  <template v-slot:label>
                    Email Address <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_email" type="email" required></b-form-input>
                </b-form-group>
              </td>
            </tr>
            <tr>
              <td>
                <b-form-group label-for="input_customer_mobile">
                  <template v-slot:label>
                    Mobile No. <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_mobile"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number" maxlength="10" required></b-form-input>
                </b-form-group>
              </td>
              <td>
                <b-form-group label-for="input_customer_date">
                  <template v-slot:label>
                    Wedding Date <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_date" type="date" :min="new Date().toISOString().split('T')[0]"
                    required></b-form-input>
                </b-form-group>
              </td>
            </tr>
            <tr>
              <td>
                <b-form-group label-for="input_customer_location">
                  <template v-slot:label> Couple Name </template>
                  <b-form-input id="input_customer_location"></b-form-input>
                </b-form-group>
              </td>
              <td>
                <b-form-group label-for="input_customer_pax">
                  <template v-slot:label>
                    Total Guests <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_pax"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number" maxlength="4" required></b-form-input>
                </b-form-group>
              </td>
            </tr>
          </table>
          <b-button type="submit" class="mt-3 theme-btn">Send Message</b-button>
        </b-form>
      </div>
    </b-container>
    <b-modal ref="my-modal" size="lg" hide-footer title="Get a Free Quote from Awayddings">
      <div class="d-block text-center">
        <b-form @submit.prevent="getFormValues">
          <table style="width: 100%">
            <tr>
              <td>
                <b-form-group label-for="input_customer_name">
                  <template v-slot:label>
                    Customer Name <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_name" required></b-form-input>
                </b-form-group>
              </td>
              <td>
                <b-form-group label-for="input_customer_email">
                  <template v-slot:label>
                    Email Address <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_email" type="email" required>
                  </b-form-input>
                </b-form-group>
              </td>
            </tr>
            <tr>
              <td>
                <b-form-group label-for="input_customer_mobile">
                  <template v-slot:label>
                    Mobile No. <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_mobile"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number" maxlength="10" required></b-form-input>
                </b-form-group>
              </td>
              <td>
                <b-form-group label-for="input_customer_date">
                  <template v-slot:label>
                    Wedding Date <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_date" type="date" :min="new Date().toISOString().split('T')[0]"
                    required></b-form-input>
                </b-form-group>
              </td>
            </tr>
            <tr>
              <td>
                <b-form-group label-for="input_customer_location">
                  <template v-slot:label> Couple Name </template>
                  <b-form-input id="input_customer_location"></b-form-input>
                </b-form-group>
              </td>
              <td>
                <b-form-group label-for="input_customer_pax">
                  <template v-slot:label>
                    Total Guests <span class="text-danger">*</span>
                  </template>
                  <b-form-input id="input_customer_pax"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number" maxlength="4" required></b-form-input>
                </b-form-group>
              </td>
            </tr>
          </table>
          <b-button type="submit" class="mt-3 theme-btn">Get a free quote</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import LandingHeader from "../../components/layout/LandingHeader.vue";
export default {
  name: "booking-jaipur",
  components: {
    LandingHeader,
    Swiper,
    SwiperSlide,
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
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs['my-modal'].show()
    }, 5000)
  },
  head() {
    return {
      script: [
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
  },
  methods: {
    getFormValues(submitEvent) {
      let customer_name = submitEvent.target.elements.input_customer_name.value;
      let customer_email =
        submitEvent.target.elements.input_customer_email.value;
      let customer_mobile =
        submitEvent.target.elements.input_customer_mobile.value;
      let customer_location =
        submitEvent.target.elements.input_customer_location.value;
      let customer_date = submitEvent.target.elements.input_customer_date.value;
      let customer_pax = submitEvent.target.elements.input_customer_pax.value;
      this.$axios
        .post("leads/capture", {
          customer_name,
          customer_email,
          customer_mobile,
          customer_location,
          customer_date,
          customer_pax,
        })
        .then((res) => {
          if (res.data.success === true) {
            // this.$toast.success(
            //   "We have received your request. Our representative will get in touch with you shortly !"
            // );

            this.$router.push("/booking-jaipur/thank-you");
          }
        })
        .catch((error) => {
          this.$toast.error("Something went wrong! please try again later");
        });
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: -15px;
}

.contact-card {
  border-radius: 13px;
  border: none;
  box-shadow: 0px 1px 13.5px 1.5px rgb(46 49 108 / 8%);
}

::v-deep .form-control {
  border-radius: 2rem;
  padding: 1.475rem 0.75rem;
}

::v-deep label {
  font-weight: bold;
  color: black;
}

.contact-card h5 {
  font-size: 1.1em;
}

.room-img img {
  transition: transform 0.2s;
  border-radius: 10px;
}

.room-item {
  border-radius: 10px;
  margin-top: 3rem;
}

.room-img:hover img {
  transform: scale(1.2);
}

::v-deep .d-block {
  margin-left: 1rem !important;
}

::v-deep input {
  width: 90% !important;
}

.room-img {
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/images/slider/slide-1.webp");
  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  color: white;
  font-size: 4rem;
}

.hero-sub-text {
  color: white;
  font-size: 1.5rem;
  margin-left: 2rem;
}

img {
  max-width: none;
}

::v-deep.wpo-fun-fact-section-s2 {
  background: white;
  padding-left: 1rem;
  padding-right: 1rem;
}

.landing-title {
  font-weight: 700;
  font-size: 3rem;
  text-decoration: none;
  box-shadow: inset 0 -0.1em 0 rgba(255, 36, 36, 0.75);
  color: inherit;
}

@media only screen and (max-width: 767px) {
  .mobile-row-reverese {
    flex-direction: column-reverse;
  }

  ::v-deep input {
    width: 96% !important;
  }

  .d-flex {
    display: inline !important;
  }

  .room-img img {
    height: 300px;
  }

  .hero-sub-text {
    color: white;
    font-size: 1.5rem;
    margin-left: 0rem;
  }

  ::v-deep .wpo-fun-fact-section-s2 {
    background: white;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .card {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }
}
</style>
