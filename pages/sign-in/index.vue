<template>
  <div>
    <!-- Start header -->
    <app-header></app-header>
    <!-- End Header  -->
    <b-container fluid>
      <b-row class="pt-4 pb-4" no-gutters>
        <b-col class="mt-3 d-flex align-items-center justify-content-center" md="6">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="slide-1">
              <img src="~assets/images/vector/Hindu Marriage.svg" alt="Hindu Marriage" />
            </swiper-slide>
            <swiper-slide class="slide-2">
              <img src="~assets/images/vector/Christian Marriage.svg" alt="Christian Marriage" />
            </swiper-slide>
            <swiper-slide class="slide-3">
              <img src="~assets/images/vector/Muslim Wedding.svg" alt="Muslim Wedding" />
            </swiper-slide>
            <swiper-slide class="slide-4">
              <img src="~assets/images/vector/Sikh Marriage.svg" alt="Sikh Marriage" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </b-col>
        <b-col md="6" class="d-flex justify-content-center align-items-center mt-3">
          <section>
            <h1 class="font-weight-bold">Login</h1>
            <p>Make your wedding a memorable event with us</p>

            <!-- Log in with OTP Section -->
            <!-- <b-form>
              <b-form-group id="phone" label="Phone*" label-for="phone">
                <b-form-input
                  id="phone"
                  type="tel"
                  placeholder="+91(123-456-7890)"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button
                type="submit"
                block
                pill
                @click="$bvModal.show('bv-sign-in')"
                squared
                variant="danger"
                class="mt-4 mb-5 p-3 theme-bg-color"
                >Log In with OTP</b-button
              >
            </b-form>
            <b-row no-gutters>
              <b-col cols="3">
                <hr />
              </b-col>
              <b-col
                cols="6"
                class="d-flex justify-content-center align-items-center"
                >or Sign in with Email
              </b-col>
              <b-col cols="3">
                <hr />
              </b-col>
            </b-row> -->

            <b-form @submit.prevent="onSubmit">
              <!-- Input for Email  -->
              <b-form-group id="input-group-2" label="Email*" label-for="input-2">
                <b-form-input id="input-2" type="email" placeholder="mail@website.com" v-model="form.username" required>
                </b-form-input>
              </b-form-group>
              <!-- Input for Password -->
              <b-form-group class="mt-4" id="input-group-4" label="Password*" label-for="input-4">
                <b-form-input id="input-4" type="password" placeholder="Min. 8 characters" v-model="form.password"
                  required></b-form-input>
              </b-form-group>
              <div class="d-flex justify-content-end">
                <b-link class="font-weight-bold" href="/forgot-password">Forgot Password?</b-link>
              </div>

              <b-button type="submit" block pill squared variant="danger" class="mt-4 p-3 mb-2 theme-bg-color"><span>{{
              processing ? "Logging In" : "Log In with Email"
              }}</span>
              </b-button>
            </b-form>
            <p class="font-weight-bold text-center">
              Not registered yet?
              <nuxt-link to="/register">Create an Account</nuxt-link>
            </p>
          </section>
        </b-col>
      </b-row>

      <!-- OTP Sign In Modal  -->
      <!-- <b-modal id="bv-sign-in" hide-footer>
        <template #modal-title> Enter the OTP here </template>

        <div class="p-2 text-center">
          <h6>Please enter the one time password <br /></h6>
          <div><span> sent to</span> <small>+1******4343</small></div>
          <div class="d-flex justify-content-center">
            <otp-input
              ref="otpInput"
              input-classes="otp-input"
              separator="-"
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>

          <div class="mt-4">
            <button class="btn btn-danger px-4 validate">Validate</button>
          </div>
          <div
            class="mt-3 content d-flex justify-content-center align-items-center"
          >
            <span>Didn't get the code?</span>
            <a href="#" class="text-decoration-none ml-3">Resend(1/3)</a>
          </div>
        </div>
      </b-modal> -->
    </b-container>
  </div>
</template>

<script>
// import style (<= Swiper 5.x)
import OtpInput from "@bachdgvn/vue-otp-input";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapActions } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "SignIn",
  components: { AppHeader, OtpInput, Swiper, SwiperSlide },
  middleware: "guest",
  head: {
    title: "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature." },
      { hid: "keywords", name: "keywords", content: "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings" },
    ],
  },
  data() {
    return {
      errors: false,
      processing: false,
      form: {
        username: "",
        password: "",
      },
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
  methods: {
    ...mapActions(["LogIn"]),
    async onSubmit(event) {
      event.preventDefault();
      this.processing = true;
      this.$store
        .dispatch("LogIn", this.form)
        .then((res) => {
          console.log(this.$store.state.auth.username);
          this.processing = false;
          this.$router.push("/");
          this.$toast.success("Login Successful");
        })
        .catch((err) => {
          this.processing = false;
          this.$toast.error("Incorrect email or password!");
          this.errors = err.message;
          setTimeout(() => (this.errors = false), 3000);
        });
    },

    // handleOnComplete(value) {
    //   console.log("OTP completed: ", value);
    // },
    // handleOnChange(value) {
    //   console.log("OTP changed: ", value);
    // },
    // handleClearInput() {
    //   this.$refs.otpInput.clearInput();
    // },
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
