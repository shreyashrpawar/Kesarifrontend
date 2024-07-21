<template>
  <div>
    <!-- Start header -->
    <app-header></app-header>
    <!-- End Header  -->
    <b-container fluid>
      <b-row class="pt-4 pb-4" no-gutters>
        <b-col
          class="mt-3 d-flex align-items-center justify-content-center"
          md="6"
        >
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="slide-4">
              <img
                src="~assets/images/vector/Sikh Marriage.svg"
                alt="Sikh Marriage"
              />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </b-col>
        <b-col
          md="4"
          class="d-flex justify-content-center align-items-center mt-3"
        >
          <section>
            <h1 class="font-weight-bold">Thank you for submitting your selections.</h1>
            <p>
              You will receive a proposal pdf along with a quotation
            </p>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import style (<= Swiper 5.x)
import AppHeader from "../../components/layout/AppHeader.vue";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
export default {
  name: "thanks",
  components: { AppHeader },
  head: {
    title:
      "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings",
      },
    ],
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        autoplay: {
          delay: 2000,
        },
      },
    };
  },
};
</script>

<style scoped>
::v-deep .otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

::v-deep .otp-input.error {
  border: 1px solid red !important;
}

::v-deep .otp-input::-webkit-inner-spin-button,
::v-deep .otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::v-deep .form-control {
  border-radius: 2rem;
  padding: 1.475rem 0.75rem;
}

::v-deep label {
  font-weight: bold;
  color: black;
}
</style>
