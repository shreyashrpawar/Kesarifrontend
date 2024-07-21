<template>
  <!-- start page-wrapper -->
  <div class="description-page-wrapper">
    <!-- Start header -->
    <app-header></app-header>
    <!-- End header -->
    <manage-event>  </manage-event>
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
import ManageEvent from "../../components/manage_event/EventForm.vue";
export default {
  name: "event",
  middleware: "auth",
  components: {
    AppHeader,
    ManageEvent,
  },
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

.contact-card h5 {
  font-size: 1.1em;
}

@media only screen and (max-width: 767px) {
  .mobile-row-reverese {
    flex-direction: column-reverse;
  }
}
</style>
