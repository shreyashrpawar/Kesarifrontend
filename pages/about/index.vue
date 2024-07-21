<template>
  <!-- start page-wrapper -->
  <div class="page-wrapper">
    <!-- Start header -->
    <app-header></app-header>
    <!-- end of header -->
    <!-- start of wpo-about-section -->
    <hero-section />
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
    <div class="wpo-destination-area">
      <div class="container">
        <div class="wpo-section-title">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-12">
              <div class="wpo-section-title-left text-center">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="destination-wrap">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <our-team imgSrc="vijay.jpeg" name="Vijay Kumar" designation="Chief Strategy Officer"
                about="Vijay Kumar is an Ideator, Dreamer, and Passionate with 19 years of FMCG, Hospitality & Service Industry experience. Worked with Leaders and Startup companies. He built and scaled startups like Kokum Juicery Private Limited, and Sabka Mandi. He has done his Post Graduation in Marketing from Mumbai University"
                linkedin="https://www.linkedin.com/in/vijay-k-315a147" />
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <our-team imgSrc="ashish.jpeg" name="Ashish Godghate" designation="Founder & Chief Experience Officer"
                about="B Tech - ICT Mumbai, MBA - IIM Rohtak. Accelerator Program - Cornell University.A problems solver with 5 years of experience across startup unicorns like OYO, ofbusiness focused on sales, operations, strategy"
                linkedin="https://www.linkedin.com/in/ashish-godghate-80b34aa2" />
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <our-team imgSrc="sourav.jpeg" name="Sourav Lahoti" designation="Technical Consultant"
                about="8+ Years experience, working as Tech Lead in a 180 million $ funded US Fintech. "
                linkedin="https://www.linkedin.com/in/souravlahoti" />
            </div>
          </div>
        </div>
        <div class="destination-wrap">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <our-team imgSrc="raghvendra.png" name="Raghvendra Rathore" designation="Region Head - West India"
                about="15+ years of experience in Tourism & wedding industry" linkedin="#" />
            </div>
          </div>
        </div>
      </div>
    </div>

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
