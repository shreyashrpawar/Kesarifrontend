<template>
    <!-- start page-wrapper -->
    <div class="page-wrapper">
      <!-- Start header -->
      <app-header></app-header>
      <!-- end of header -->
      <!-- start of wpo-about-section -->
      <section class="wpo-about-section section-padding">
    <div class="container">
      <b-row class="wpo-about-section-wrapper about-row">

        <b-col lg="12">
          <h2 class="font-weight-bold">Refund Policy</h2>

          <p>We at Kesari Awayddings strive to provide excellent service to our customers. However, we understand that there may be circumstances where a refund is necessary. Our refund policy is as follows:</p>
    <ol>
        <li><strong>Cancellation Policy:</strong> Customers can cancel their order within 24 hours of placing it for a full refund. After 24 hours, cancellations are subject to review and may not be eligible for a full refund.</li>
        <li><strong>Refund Eligibility:</strong> Refunds are only issued for services that have not been provided or completed. If the service has been partially completed, a partial refund may be considered based on the extent of completion.</li>
        <li><strong>Refund Process:</strong> To request a refund, customers must contact our customer support team at [support@kesariawayddings.com]. Refunds will be issued to the original payment method within 7-10 business days of approval.</li>
        <li><strong>Exceptions:</strong> Some services may have specific refund policies outlined separately. Customers are encouraged to review the terms and conditions of each service before making a purchase.</li>
        <li><strong>Refund Disputes:</strong> In case of any disputes regarding refunds, customers are requested to contact our customer support team for resolution. We will strive to address any concerns promptly and fairly.</li>
    </ol>
    <p>By using our Service, you agree to abide by the terms of our refund policy. Kesari Awayddings reserves the right to amend or update this policy at any time without prior notice.</p>
    <p>If you have any questions or concerns about our refund policy, please contact us at hello.kesari@awayddings.com / 9370157830</p>

        </b-col>
      </b-row>
    </div>
  </section>
      <!-- end of wpo-about-section -->
      <!-- wpo-destination-area-start -->
      <!-- <div class="wpo-destination-area">
        <div class="container">
          <div class="wpo-section-title">
            <div class="row align-items-center justify-content-between">
              <div class="col-md-12">
                <div class="wpo-section-title-left text-center">
                  <h2>Browse Awayddings Venues</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="destination-wrap">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12">
                <top-destination-card
                  imgSrc="goa.png"
                  name="Goa"
                  propertyCount="25"
                  propertyLink="#"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <top-destination-card
                  imgSrc="goa.png"
                  name="Udaipur"
                  propertyCount="15"
                  propertyLink="#"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <top-destination-card
                  imgSrc="goa.png"
                  name="Japipur"
                  propertyCount="0"
                  propertyLink="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- wpo-destination-area-end -->
      <!-- Quotation-area-start -->
      <div class="wpo-destination-area">
        <div class="container text-center">
          <div class="destination-wrap">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <blockquote class="h3">
                  &quot;Once in a while, right in the middle of an ordinary life,
                  love gives us a fairy tale.&quot;
                </blockquote>
                <cite class="h5 font-weight-bold">Wedding Day</cite>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Quotation-area-end -->
      <!-- wpo-destination-area-start -->


      <!-- wpo-destination-area-end -->
    </div>
    <!-- end of page-wrapper -->
  </template>

  <script>
  import HeroSection from "../../components/about/HeroSection.vue";
  import OurTeam from "../../components/about/OurTeam.vue";
  import AppHeader from "../../components/layout/AppHeader.vue";
  import TopDestinationCard from "../../components/ui/TopDestinationCard.vue";
  export default {
    name: "about",
    components: {
      AppHeader,
      HeroSection,
      TopDestinationCard,
      OurTeam,
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
  };
  </script>