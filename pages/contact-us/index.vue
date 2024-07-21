<template>
  <!-- start page-wrapper -->
  <div class="description-page-wrapper">
    <!-- Start header -->
    <app-header></app-header>
    <!-- End header -->
    <b-container>
      <b-row class="mb-5">
        <!-- <b-col md="6">
          <h3 class="font-weight-bold">
            Thanks for your interest in Awayddings!
          </h3>
          <p>Send us a message and we'll respond as soon as possible</p>
          <hr />
          <b-form>
            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                placeholder="John Doe"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="email"
                placeholder="name@mail.com"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Message:"
              label-for="input-2"
            >
              <b-form-textarea
                id="textarea"
                placeholder="Your Message"
                rows="8"
                max-rows="8"
              ></b-form-textarea>
            </b-form-group>
            <b-button class="mt-3 theme-btn">Send Message</b-button>
          </b-form>
        </b-col> -->
        <b-col md="6" class="d-flex justify-content-center align-items-center">
          <b-img src="~assets/images/vector/contact-us.svg" height="300px"></b-img>
        </b-col>
        <b-col md="6" class="d-flex justify-content-center align-items-center">
          <h3 class="font-weight-bold">
            Thanks for your interest in Awayddings!
          </h3>
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col lg="4" md="6" class="d-flex justify-content-center align-items-center mb-3">
          <b-card class="contact-card h-100 w-100 d-flex flex-column justify-content-center align-items-center p-3"
            no-body>
            <i class="fa fa-phone fa-3x theme-color"></i>
            <h5 class="mt-3">(+91)992-100-3303</h5>
          </b-card>
        </b-col>
        <b-col lg="4" md="6" class="d-flex justify-content-center align-items-center mb-3">
          <b-card class="contact-card h-100 w-100 d-flex flex-column justify-content-center align-items-center p-3"
            no-body>
            <i class="fa fa-envelope fa-3x theme-color"></i>
            <h5 class="mt-3">hello.kesari@awayddings.com</h5>
          </b-card>
        </b-col>
        <b-col lg="4" md="12" class="d-flex justify-content-center align-items-center mb-3">
          <b-card class="contact-card h-100 w-100 d-flex flex-column justify-content-center align-items-center p-3"
            no-body>
            <i class="fa fa-map-marker fa-3x theme-color"></i>
            <h5 class="mt-3">
              Pune Address:
              <span class="font-weight-light">Kesari Awayddings Private Limited, Kesari Tours, Baner Road, Opp Mauli
                Petrol Pump, Near Tea Villa Cafe, Pashan, Pune, Maharashtra, 411045</span>
            </h5>
            <!-- <h5>
              Udaipur Address:
              <span class="font-weight-light">34 Trimurti Complex, Near Vaishali Apartment, Manvakhera Road,
                Sector 4 udaipur 313001
              </span>
            </h5> -->
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col cols="12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.426499251759!2d73.79772677579753!3d18.55480096812656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3c2adbae83%3A0xc7e9cd165eb4dab8!2sKesari%20Tours%20-%20Baner!5e0!3m2!1sen!2sin!4v1710582025511!5m2!1sen!2sin"
            width="100%" height="600" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "contact-us",
  components: {
    AppHeader,
  },
  head: {
    title: "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature." },
      { hid: "keywords", name: "keywords", content: "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings" },
    ],
  }
};
</script>

<style scoped>
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

@media only screen and (max-width: 767px) {
  .mobile-row-reverese {
    flex-direction: column-reverse;
  }
}
</style>
