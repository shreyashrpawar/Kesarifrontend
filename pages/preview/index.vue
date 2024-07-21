<template>
 <div>
 <app-header></app-header>
 <b-container class="bv-example-row">
  <b-row>
    <b-col cols="12" class="py-5">
        <div class="accordion preview-accor" role="tablist">
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info">
                    <div class="ac-top-left">
                        <h1>
                            <small class="ac-t-day">Mon</small>
                            <span>15<small>th</small></span>
                        </h1>
                    </div>
                    <div class="ac-top-right">
                        <img src="~assets/images/right-arrow.png" alt="right arrow" />
                        <h2>  Mehendi <br /> <small>15-08-2023</small></h2>
                        <p>Mehendi starts at 10:00 AM and ends at 1:00 PM.</p>
                    </div>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info">
                    <div class="ac-top-left">
                        <h1>
                            <small class="ac-t-day">Tus</small>
                            <span>16<small>th</small></span>
                        </h1>
                    </div>
                    <div class="ac-top-right">
                    <img src="~assets/images/right-arrow.png" alt="right arrow" />
                        <h2>  Sangeet  <br /> <small>15-08-2023</small></h2>
                        <p>Sangeet  ndi starts at 10:00 AM and ends at 1:00 PM.</p>
                    </div>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info"><div class="ac-top-left">
                        <h1>
                            <small class="ac-t-day">Wed</small>
                            <span>17<small>th</small></span>
                        </h1>
                    </div>
                    <div class="ac-top-right">
                    <img src="~assets/images/right-arrow.png" alt="right arrow" />
                        <h2>  Wedding  <br /> <small>15-08-2023</small></h2>
                        <p>Wedding  starts at 10:00 AM and ends at 1:00 PM.</p>
                    </div></b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>
    </b-col>
  </b-row>
</b-container>
  
 </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "preview",
  components: { AppHeader },
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

      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      
    };
  },
};
</script>

<style scoped>
.preview-accor button.btn.btn-info {
    background-color: #fff;
    border: none;
    display: flex;
    outline: none !important;
    box-shadow: none;
   align-items: center;
}
.ac-top-left {
    width: 150px;
    text-align: left;
}
.ac-top-left h1{
    font-size: 42px;
}
.ac-top-left h1{
    font-size: 42px;
        margin-bottom:0px;
}
small.ac-t-day {
    font-size: 20px;
    display: block;
    line-height: 20px;
        color: #fc3333;
}
.ac-top-left h1 span small{
    font-size: 14px;
}
.ac-top-right {
    width: calc(100% - 150px);
        text-align: left;
    position:relative;
}
.ac-top-right img {
    position: absolute;
    top: calc(50% - 14px);
    right: 0;
    z-index: 999;
    width: 27px;
    pointer-events: none;
}
.ac-top-right h2 small{
    font-size:12px;
    display:block;
        color: #fc3333;
}
.ac-top-right p{
    margin-bottom:0px;
}
</style>
