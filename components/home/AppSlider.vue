<template>
  <!-- start of wpo-hero-slide-section -->
  <section class="wpo-hero-slider">
    <div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="slide-inner slide-bg-image">
            <!-- <div class="gradient-overlay"></div> -->
            <div class="container-fluid">
              <div class="slide-content">
                <div data-swiper-parallax="300" class="slide-title">
                  <h2 style="font-weight: 900">
                    Book your favourite destination wedding venue !
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <!-- end slide-inner -->
        </swiper-slide>
        <!-- end swiper-slide -->
        <swiper-slide class="slide-2">
          <div class="slide-inner slide-bg-image">
            <!-- <div class="gradient-overlay"></div> -->
            <div class="container-fluid">
              <div class="slide-content">
                <div data-swiper-parallax="300" class="slide-title">
                  <h2 style="font-weight: 900">
                    Tailor your destination wedding to any budget. Let your love bloom !
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <!-- end slide-inner -->
        </swiper-slide>
        <swiper-slide class="slide-3">
          <div class="slide-inner slide-bg-image">
            <!-- <div class="gradient-overlay"></div> -->
            <div class="container-fluid">
              <div class="slide-content">
                <div data-swiper-parallax="300" class="slide-title">
                  <h2 style="font-weight: 900">
                    Don't just dream of your destination wedding. Make it a reality !
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <!-- end slide-inner -->
        </swiper-slide>
        <!-- end swiper-slide -->
      </swiper>
      <!-- end swiper-wrapper -->
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <!-- swipper controls -->
    </div>
  </section>
  <!-- end of wpo-hero-slide-section-->
</template>

<script>
// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "AppSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&display=swap");

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.slide-1 {
  background-image: url("@/assets/images/slider/slide-1.webp");
}

.slide-2 {
  background-image: url("@/assets/images/slider/slide-2.webp");
}

.slide-3 {
  background-image: url("@/assets/images/slider/slide-3.webp");
}

h2 {
  font-family: "Nunito", sans-serif;
  position: relative;
  z-index: 100;
  color: #fff;
  font-weight: 900;
}
</style>
