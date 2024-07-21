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
            <swiper-slide class="slide-1">
              <img
                src="~assets/images/vector/Hindu Marriage.svg"
                alt="Hindu Marriage"
              />
            </swiper-slide>
            <swiper-slide class="slide-2">
              <img
                src="~assets/images/vector/Christian Marriage.svg"
                alt="Christian Marriage"
              />
            </swiper-slide>
            <swiper-slide class="slide-3">
              <img
                src="~assets/images/vector/Muslim Wedding.svg"
                alt="Muslim Wedding"
              />
            </swiper-slide>
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
          md="6"
          class="d-flex justify-content-center align-items-center mt-3"
        >
          <section>
            <h1 class="font-weight-bold">Reset Password</h1>
            <p>Enter your new password</p>

            <b-form @submit.prevent="onSubmit">
              <!-- Input for Email  -->
              <b-form-group
                id="input-group-1"
                label="Password*"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="password"
                  placeholder="password"
                  v-model.trim="password"
                  required
                ></b-form-input>
                <div style="color: red" v-if="!$v.password.required">
                  Password is required.
                </div>
                <div style="color: red" v-if="!$v.password.minLength">
                  Password must have at least
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Confirm Password*"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  placeholder="confirm password"
                  v-model.trim="password_confirmation"
                  required
                ></b-form-input>
                <div
                  style="color: red"
                  v-if="!$v.password_confirmation.sameAsPassword"
                >
                  Passwords must be identical.
                </div>
              </b-form-group>
              <b-button
                type="submit"
                block
                pill
                squared
                variant="danger"
                class="mt-4 p-3 mb-2 theme-bg-color"
                ><span>{{
                  processing ? "Resetting ..." : "Reset Password "
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
    </b-container>
  </div>
</template>

<script>
// import style (<= Swiper 5.x)
import OtpInput from "@bachdgvn/vue-otp-input";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { minLength, required, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";

export default {
  name: "SignIn",
  components: { AppHeader, OtpInput, Swiper, SwiperSlide },
  middleware: "guest",
  data() {
    return {
      errors: false,
      processing: false,
      password: "",
      password_confirmation: "",
      token: "",
      email: "",
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
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    password_confirmation: {
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    ...mapActions(["ForgotPassword"]),
    async onSubmit(event) {
      event.preventDefault();
      this.token = this.$route.params.id;
      this.email = this.$route.query.email;
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.processing = true;
      this.$store
        .dispatch("ResetPassword", {
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.token,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          if (res.data.hasError) {
            this.$toast.error(res.data.message);
          } else {
            this.$toast.success("Password reset successfully!");
            this.$router.push("/sign-in");
          }
          this.processing = false;
        })
        .catch((err) => {
          console.log("🚀 ~ file: index.vue ~ line 127 ~ onSubmit ~ err", err);
          this.processing = false;
          this.$toast.error("Incorrect email!");
          this.errors = err.message;
          setTimeout(() => (this.errors = false), 3000);
        });
    },
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
