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
            <h1 class="font-weight-bold">Register</h1>
            <p>Make your wedding a memorable event with us</p>
            <b-form @submit.prevent="submitData">
              <!-- Input for Name  -->
              <b-form-group id="input-group-1" label="Name*" label-for="input-1">
                <b-form-input id="input-1" type="text" placeholder="John Doe" v-model="form.name" required>
                </b-form-input>
              </b-form-group>
              <!-- Input for Email  -->
              <b-form-group id="input-group-2" label="Email*" label-for="input-2">
                <b-form-input id="input-2" type="email" placeholder="mail@website.com" v-model="form.email" required>
                </b-form-input>
              </b-form-group>
              <!-- Input for Phone No  -->
              <b-form-group id="input-group-3" label="Phone*" label-for="input-3">
                <b-form-input id="input-3" type="tel" maxlenght="10" pattern="[1-9]{1}[0-9]{9}"
                  placeholder="123-456-7890" oninvalid="this.setCustomValidity('Please enter a valid phone number')"
                  oninput="this.setCustomValidity('')" v-model="form.phone" required></b-form-input>
              </b-form-group>
              <!-- Input for Password -->
              <b-form-group class="mt-4" id="input-group-4" label="Password*" label-for="input-4">
                <b-form-input id="input-4" type="password" placeholder="Min. 8 characters" minlength="8"
                  v-model="form.password" required></b-form-input>
              </b-form-group>
              <!-- Input for Confirm Password -->
              <!-- <b-form-group class="mt-4" id="input-group-5" label="Confirm Password*" label-for="input-5">
                <b-form-input id="input-5" type="password" placeholder="Re-type password" minlength="8"
                  v-model="confirmPassword" required></b-form-input>
              </b-form-group> -->

              <b-button type="submit" block pill squared variant="danger" class="mt-5 mb-2 p-3 theme-bg-color">Create
                Account</b-button>
            </b-form>
            <p class="font-weight-bold text-center">
              Already have an account?
              <nuxt-link to="/sign-in">Log In</nuxt-link>
            </p>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapActions } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "SignIn",
  components: { AppHeader, Swiper, SwiperSlide },
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
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        autoplay: {
          delay: 2000,
        },
      },
      loginForm: {
        username: "",
        password: "",
      },

      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
      },
      // confirmPassword: "",
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    submitData() {
      if(false){ //if (this.form.password !== this.confirmPassword) {
        this.$toast.error(
          "Confirm password doesn't match with Password. Please enter the same password to confirm password"
        );
      } else {
        this.$axios
          .post("register", this.form)
          .then((res) => {
            if (res.data.success === true) {
              this.$toast.success(
                "Congratulations! Your Account has been created successfully"
              );

              this.loginForm.username = this.form.email;
              this.loginForm.password = this.form.password;

              this.$store.dispatch("LogIn", this.loginForm).then((res) => {
                this.$router.push("/");
              });

              this.form.name = "";
              this.form.email = "";
              this.form.phone = "";
              this.form.password = "";
            }
          })
          .catch((error) => {
            this.$toast.error(
              "The details you provided either not valid or you already have an account"
            );
          });
      }
    },
  },
};
</script>

<style scoped>
::v-deep .form-control {
  border-radius: 2rem;
  padding: 1.475rem 0.75rem;
}

::v-deep label {
  font-weight: bold;
  color: black;
}
</style>
