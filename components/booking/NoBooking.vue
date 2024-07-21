<template>
  <div>
    <b-row class="row">
      <b-col cols="4">
        <b-img
          src="~assets/images/vector/no-bookings.svg"
          height="250px"
        ></b-img>
      </b-col>
      <b-col cols="8" class="d-flex justify-content-left align-items-center">
        <section>
          <h5>{{ bookingType.toUpperCase() }} bookings</h5>
          <p>Looks like you don't have any {{ bookingType }} bookings</p>
          <b-button class="theme-btn" @click="redirectToHomePage"
            >Plan Your Wedding</b-button
          >
        </section>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "NoBooking",
  props: ["bookingType"],
  methods: {
    redirectToHomePage() {
      this.$router.push("/");
    },
  },
};
</script>
