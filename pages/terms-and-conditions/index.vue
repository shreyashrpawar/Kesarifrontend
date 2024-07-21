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
          <h2 class="font-weight-bold">Terms And Conditions</h2>
          <hr />
          <p>Welcome to Kesari Awayddings, an online platform by A2WEDTECH PRIVATE LIMITED. 
            By accessing or using our website (the "Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the Service.</p>
          <ol>
            <li>
                <strong>Agreement to Terms:</strong>
                <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            </li>
            <li>
                <strong>Account:</strong>
                <p>When you create an account with us, you must provide us with accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            </li>
            <li>
                <strong>Intellectual Property:</strong>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Kesari Awayddings and its licensors.</p>
            </li>
            <li>
                <strong>Links to Other Websites:</strong>
                <p>Our Service may contain links to third-party websites or services that are not owned or controlled by Kesari Awayddings. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>
            </li>
            <li>
                <strong>Termination:</strong>
                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            </li>
            <li>
                <strong>Governing Law:</strong>
                <p>These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>
            </li>
            <li>
                <strong>Changes:</strong>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
            </li>
        </ol>
    <p><strong>Contact Us:</strong> If you have any questions about these Terms, please contact us at <a href="mailto:Hello.kesari@awayddings.com">Hello.kesari@awayddings.com</a> / <a href="tel:9370157830">9370157830</a></p>

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
