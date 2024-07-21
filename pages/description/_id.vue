<template>
  <!-- start page-wrapper -->
  <div class="description-page-wrapper">
    <!-- Start header -->
    <app-header></app-header>
    <!-- End of header -->

    <!-- start of breadcumb-section -->
    <div class="wpo-breadcumb-area">
      <div class="container">
        <b-row
          style="box-shadow: 0px 10px 40px 0px rgb(50 50 50 / 10%); padding: 12px; border-radius: 50px; background-color: #303443; margin: 20px 30px;font-size: 18px!important;">
          <b-col md="4">
            <p class="mb-0" style="display: flex;justify-content: center; color: white;font-size: 18px;">
              Booking From: <span class="theme-color ml-2">{{ bookingStart }}</span>
            </p>
          </b-col>
          <b-col md="4">
            <p class="mb-0" style="display: flex;justify-content: center;color: white;font-size: 18px;">
              Booking To: <span class="theme-color  ml-2">{{ bookingEnd }}</span>
            </p>
          </b-col>
          <b-col md="4">
            <p class="mb-0" style="display: flex;justify-content: center;color: white;font-size: 18px;">
              Guests: <span class="theme-color  ml-2">{{ bookingGuests }}</span>
            </p>
          </b-col>
        </b-row>

        <div class="row">
          <div class="col-12">
            <div class="wpo-breadcumb-wrap">
              <h1 class="text-dark text-left font-weight-bold"><b>{{ name }}</b></h1>
              <p class="text-left d-flex">
                <i class="fi flaticon-placeholder"></i>
                <a href="#map-location" class="text-muted">{{ address }}</a>
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-7 p-0 mb-3">
            <image-not-found errorText="Wedding Images Not Available" v-if="weddingImages.length == 0" class="">
            </image-not-found>
            <div v-else>
              <b-carousel id="carousel-1" controls indicators img-height="100%" img-width="100%" :interval="3000"
                v-b-modal.wedding-images>
                <b-carousel-slide v-for="(weddingImage, index) in weddingImages" :key="index">
                  <template #img>
                    <img class="d-block img-fluid w-100 h-100" :src="weddingImage" alt="image slot" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
              <!-- Wedding Images slider modal -->
              <b-modal id="wedding-images" title="Wedding Images" size="xl" hide-footer>
                <b-carousel id="carousel-2" controls img-width="1024" :interval="0">
                  <b-carousel-slide v-for="(weddingImage, index) in weddingImages" :key="index">
                    <template #img>
                      <img class="d-block img-fluid w-100" :src="weddingImage" alt="image slot" />
                    </template>
                  </b-carousel-slide>
                </b-carousel>
              </b-modal>
            </div>
          </div>
          <div class="col-md-5 d-flex flex-column justify-content-between">
            <div class="h-100 pb-2">
              <image-not-found errorText="Video Not Available" v-if="weddingVideo.length == 0">
              </image-not-found>

              <iframe height="100%" width="100%" :src="weddingVideo" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>

            <div class="h-100 pb-3">
              <image-not-found errorText="Resort Images Not Available" v-if="coverImage.length == 0">
              </image-not-found>

              <b-img class="d-block h-100 sm-mx-auto" :src="coverImage" alt="image slot" rounded
                v-b-modal.resort-images></b-img>

              <b-modal id="resort-images" size="xl" title="Resort Images" hide-footer>
                <b-carousel id="carousel-3" :interval="0" controls img-width="1024">
                  <!-- Slides for Entrance Images -->
                  <b-carousel-slide v-for="(image, index) in images" :key="index">
                    <template #img>
                      <img class="d-block img-fluid w-100" :src="image" alt="image slot" />
                    </template>
                  </b-carousel-slide>
                </b-carousel>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Start Room-details area-->
    <div class="Room-details-area mt-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="room-description">
              <div class="room-title">
                <h2>Description</h2>
              </div>
                <p v-if="isActive" class="p-wrap mb-4" align="justify" style="line-height: inherit;" >
                {{description | truncate(220)}} <a @click="toggleClass"  style="color: #a70000; cursor: pointer;">...read more</a>
              </p>
              <p v-else class="p-wrap mb-4" align="justify" style="line-height: inherit;">
                {{description}} <a @click="toggleClass"  style="color: #a70000; cursor: pointer;">...read less</a>
              </p>
              
              
              <div class="room-title">
                <h2>Hotel Facilities</h2>
              </div>
              <ul class="ml-3 mb-4 descriptionBullet">
                <li v-for="hotelFacility in hotelFacilities" :key="hotelFacility.name"
                  style="font-size: 18px !important; list-style: none;">
                  {{ hotelFacility.name }}
                </li>
              </ul>

              <div class="room-title">
                <h2>Menu</h2>
              </div>

              <ul class="ml-4 mb-4 descriptionBullet">
                <li v-for="(menu, index) in menus" :key="index" style="font-size: 18px !important;list-style: none;">
                  <a :href="menu.url" target="_blank">{{ menu.category }}</a>
                </li>
              </ul>

              <div class="room-title">
                <h2>Room Rate</h2>
              </div>
              <ul class="ml-3 mb-4 descriptionBullet">
                <li style="font-size: 18px !important;list-style: none;">
                  Double Occupancy(2 guests) Per Room Per Night Rate -
                  {{ doubleOccupancyRoomRate }}
                </li>
                <li style="font-size: 18px !important;list-style: none;">
                  Triple Occupancy(3 guests) Per Room Per Night Rate -
                  {{ tripleOccupancyRoomRate }}
                </li>
              </ul>

              <div class="room-title">
                <h2>Room Rate Inclusions</h2>
              </div>
              <ul class="ml-3 mb-4 descriptionBullet">
                <li v-for="room in roomInclusion" :key="room.id" style="font-size: 18px !important;list-style: none;">
                  {{ room.name }}
                </li>
              </ul>
            </div>
            <div class="row mb-5" v-if="wedding_planning_decoration_budget">
              <div class="col-12">
                <div class="room-title">
                  <h2>Wedding Planning & Decoration budget</h2>
                </div>
                <p style="font-size: 18px !important;">
                  {{ wedding_planning_decoration_budget }}
                </p>
                <p>
                  <span style="color: #fc4c4c">Includes:</span><br/>
                  <span>Decor for 4 functions which includes Mehendi, haldi, sangeet & wedding</span>
                </p>
              </div>
            </div>

            <div class="row mb-5" v-if="property_terms">
              <div class="col-12">
                <div class="room-title">
                  <h2>Property Terms</h2>
                </div>
                <p style="font-size: 18px !important;">
                  {{ property_terms }}
                </p>
              </div>
            </div>

            <div class="row mb-5" id="map-location">
              <div class="col-12">
                <div class="room-title">
                  <h2>View on map</h2>
                </div>
                <iframe :src="map" class="map" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>

            <div v-if="$device.isDesktop">
              <div class="row mb-2">
                <div class="col-md-12">
                  <h2>Hotels Nearby within budget</h2>
                  <hr />
                  <div class="row large">
                    <div class="col-md-4" v-for="otherProperty in otherProperties" :key="otherProperty.id">
                      <b-card :img-src="otherProperty.featured_image" img-height="150px" img-alt="Image"
                        style="max-width: 20rem; height: 20rem" img-top tag="article" class="mb-2">
                        <b-card-text>
                          <NuxtLink class="text-dark h4 text-decoration-none font-weight-bold" target="_blank" :to="{
                            path: 'description',
                            query: {
                              id: otherProperty.id,
                              start_date: startDate,
                              end_date: endDate,
                              guests: guests,
                              budget: displayBudget,
                            },
                          }" :key="$route.params.id">{{
  otherProperty.name.length > 30
  ? `${otherProperty.name.slice(0, 30)}...`
  : otherProperty.name
}}</NuxtLink>
                        </b-card-text>
                      </b-card>
                    </div>
                  </div>
                  <!--  carousel cards for mobile view -->
                  <div class="col-md-4 mx-1 hidden">
                    <b-carousel id="carousel-4" :interval="0" controls img-width="w-100">
                      <b-carousel-slide v-for="otherProperty in otherProperties" :key="otherProperty.id">
                        <template #img>
                          <b-card :img-src="otherProperty.featured_image" img-height="150px" img-alt="Image"
                            style="max-width: 30rem; height: 25rem" img-top tag="article" class="mb-2">
                            <b-card-text> </b-card-text>
                          </b-card>
                        </template>
                        <NuxtLink style=" background: rgb(0, 0, 0);
                          background: rgba(0, 0, 0, 0.5);"
                          class="text-white h2 text-decoration-none font-weight-bold mt-4" target="_blank" :to="{
                            path: 'description',
                            query: {
                              id: otherProperty.id,
                              start_date: startDate,
                              end_date: endDate,
                              guests: guests,
                              budget: displayBudget,
                            },
                          }" :key="$route.params.id">{{
  otherProperty.name.length > 30
  ? `${otherProperty.name.slice(0, 30)}...`
  : otherProperty.name
}}</NuxtLink>
                      </b-carousel-slide>
                    </b-carousel>
                  </div>
                  <!-- End of carousel for mobile views -->
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-12 d-flex align-items-start justify-content-center">
            <section style="position: sticky; top: 0px">
              <div class="blog-sidebar room-sidebar">
                <div class="widget check-widget">
                  <h3 class="mb-1 pb-2">Budget</h3>
                  <h4>
                    <span v-if="isLoading">
                      <b-skeleton></b-skeleton>
                    </span>
                    <span v-else class="text-danger h2 font-weight-bold">₹ {{ priceFormatter(calcBudget) }}</span>
                  </h4>
                  <ul class="ml-3 descriptionBullet">
                    <template v-if="isLoading">
                      <li>
                        <b-skeleton></b-skeleton>
                      </li>
                      <li>
                        <b-skeleton></b-skeleton>
                      </li>
                    </template>
                    <template v-else>
                      <li class="mt-2" style="list-style: none;">
                        Double Occupancy -
                        {{ this.budget.double_occupancy_room_count }}
                      </li>
                      <li class="mt-2" style="list-style: none;">
                        Triple Occupancy -
                        {{ this.budget.triple_occupancy_room_count }}
                      </li>
                    </template>
                  </ul>
                  <hr class="mt-4 mb-4" />
                  <b-form-group label="Budget Type">
                    <b-form-radio v-model="selectedBudget" @change="changeBudgetData" name="some-radios"
                      value="best_budget_plan">Best Budget</b-form-radio>

                    <b-form-radio v-model="selectedBudget" @change="changeBudgetData" name="some-radios"
                      value="comfortable_budget_plan">Comfortable Budget</b-form-radio>
                  </b-form-group>
                </div>
              </div>

              <div class="blog-sidebar room-sidebar mt-1 mb-1">
                <div class="widget check-widget">
                  <h3 class="mb-1 pb-2">Check Availability</h3>
                  <form @submit.prevent="checkAvailable">
                    <!-- Datepicker as text field -->
                    <b-form-group id="start_day" label="Start Date:" label-for="input-1" class="mt-3">
                      <div class="input-group date">
                        <b-form-datepicker class="m-0" :state="startDateState" id="start-date" placeholder="Start Date"
                          v-model="startDate" :date-disabled-fn="dateDisabledStartDate" @input="setEndDate()"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            weekday: 'short',
                          }"></b-form-datepicker>
                      </div>
                    </b-form-group>

                    <!-- Datepicker as text field -->
                    <b-form-group id="end_day" label="End Date:" label-for="input-1">
                      <div class="input-group">
                        <b-form-datepicker class="m-0" id="end-date" placeholder="End Date" :state="endDateState"
                          :date-disabled-fn="dateDisabledEndDate" v-model="endDate" @input="setStartDate()"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',

                            weekday: 'short',
                          }"></b-form-datepicker>
                      </div>
                    </b-form-group>

                    <b-form-group id="guests" label="Guests:" label-for="input-1">
                      <div class="input-group">
                        <input type="number" id="guests" v-model="guests" placeholder="Guests"
                          v-bind:class="(startDateState == null) ? '' : (startDateState == true) ? 'error-success' : 'error-border'" />
                      </div>
                    </b-form-group>
                    <div class="input-group date">
                      <button class="theme-btn w-100 rounded" style="background-color: #303443;" type="submit">
                        Check Availability
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="blog-sidebar room-sidebar">
                <button v-b-modal.budget-calculator @click="() => (tabIndex = 0)"
                  class="btn-budget-calculator w-100 mb-1">
                  Budget Calculator
                </button>

                <button @click="gotoPlanwedding" class="theme-btn w-100 mb-3">
                  Plan my wedding
                </button>
                <button v-b-modal.budget-calculator @click="() => (tabIndex = 1)" class="theme-btn w-100 mb-3">
                  Book Now
                </button>
              </div>
              <!-- Budget Calculator  -->
              <b-modal hide-footer size="lg" :title="'🖥️ Budget Calculator -' + name" id="budget-calculator">
                <b-tabs v-model="tabIndex">
                  <b-tab title="Calculator">
                    <div class="widget check-widget">
                      <p>
                        Hi
                        {{ this.$store.getters.getName }}
                        ,<br />Here you can customize your wedding plans for
                        <span class="font-weight-bold">{{ guests }}</span>
                        guests from
                        <span class="font-weight-bold">{{
                          startDateForBudgetCalculator
                        }}</span>
                        -
                        <span class="font-weight-bold">{{
                          endDateForBudgetCalculator
                        }}</span>
                        <br/>The total budget includes Breakfast, lunch & dinner for 2 guests in double occupancy rooms & 3 guests in triple occupancy rooms.
                      </p>


                      <h3 class="mb-4">
                        Proposed Budget
                        <span class="theme-color ml-3 font-weight-bold">₹ {{ priceFormatter(calcDetailedBudget)
                        }}</span>
                      </h3>
                      <div style="
                          height: 60vh;
                          overflow-y: auto;
                          overflow-x: hidden;
                        ">
                        <section v-for="item in detailsBudget" :key="item.date">
                          <h5>Date - {{ item.date }}</h5>
                          <div class="row mb-2" v-for="(detailItem, index) in item.data" :key="index">
                            <div class="col-4 d-flex align-items-center">
                              <p>{{ detailItem.chargable_type_details }}</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center align-items-center">
                              ₹ {{ priceFormatter(detailItem.rate) }}
                            </div>
                            <div v-if="detailItem.chargable_type_is_starter === 0"
                              class="col-1 d-flex justify-content-center align-items-center" style="margin-left: 15px">
                              <b-button @click="incrementRooms(detailItem, item.data)" pill variant="outline-success">+
                              </b-button>
                            </div>
                            <div v-if="detailItem.chargable_type_is_starter === 0"
                              class="col-1 d-flex justify-content-center align-items-center">
                              {{ detailItem.selectedQty }}
                            </div>
                            <div v-if="detailItem.chargable_type_is_starter === 0"
                              class="col-1 d-flex justify-content-center align-items-center">
                              <b-button @click="decrementRooms(detailItem, item.data)" pill variant="outline-danger">-
                              </b-button>
                            </div>
                            <div v-else class="col-1 d-flex justify-content-center align-items-center"
                              style="margin-left: 15px">
                              <b-checkbox :id="detailItem.chargable_type_id + '_' + item.date"
                                :name="detailItem.chargable_type_details" v-model="detailItem.isChecked" :value="1"
                                unchecked-value="0"
                                @change="add_starter(detailItem.rate, detailItem, item.data)"></b-checkbox>
                              <div class=" col-1 d-flex justify-content-center align-items-center">
                                {{ detailItem.selectedQty == 0 ? guests : detailItem.selectedQty }}
                              </div>
                            </div>
                          </div>
                        </section>


                      </div>
                      <div class="mt-2 d-flex justify-content-end">
                        <b-button class="theme-btn" @click="tabIndex++">Booking Summary >></b-button>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab title="Booking Summary">
                    <h3 class="mb-3 mt-2">
                      Proposed Budget
                      <span class="theme-color ml-3 font-weight-bold">₹ {{ priceFormatter(calcDetailedBudget) }}</span>
                    </h3>
                    <div style="height: 60vh; overflow: auto; overflow-x: auto">
                      <section v-for="item in detailsBudget" :key="item.date">
                        <h5>Date - {{ item.date }}</h5>
                        <div class="row mb-2" v-for="(detailItem, index) in item.data" :key="index">
                          <div class="col-4 d-flex align-items-center">
                            <p>{{ detailItem.chargable_type_details }}</p>
                          </div>
                          <div class="col-3 d-flex justify-content-center align-items-center">
                            ₹ {{ priceFormatter(detailItem.rate) }}
                          </div>
                          <div class="col-2 d-flex justify-content-center align-items-center">
                            {{ detailItem.selectedQty }}
                          </div>
                          <div class="col-3 d-flex align-items-center">
                            ₹{{
                              priceFormatter(
                                detailItem.selectedQty * detailItem.rate
                              )
                            }}
                          </div>
                        </div>
                      </section>
                      <h4 class="font-weight-bold text-dark  mt-5">Please add the below details: (optional)</h4>
                      <b-container class="d-flex justify-content-center mt-4">
                        <!-- Input for Bride Name  -->
                        <b-form-group id="input-group-2" label="Bride Name" label-for="input-2">
                          <b-form-input id="input-2" type="text" placeholder="Bride Name" v-model="bride_name"
                            style="border-radius: 2rem; padding: 1.475rem 0.75rem;">
                          </b-form-input>
                        </b-form-group>
                        <!-- Input for Groom Name -->
                        <b-form-group class="ml-5" id="input-group-4" label="Groom Name" label-for="input-4">
                          <b-form-input id="input-4" type="text" placeholder="Groom Name" v-model="groom_name"
                            style="border-radius: 2rem; padding: 1.475rem 0.75rem;"></b-form-input>
                        </b-form-group>
                      </b-container>


                    </div>

                    <div class="d-flex justify-content-between mt-2">
                      <b-button class="theme-btn" @click="tabIndex--">
                        Previous</b-button>
                      <b-button class="theme-btn" @click="bookingResort">Confirm Booking</b-button>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-modal>
            </section>
          </div>



          <div class="col-lg-8 col-12 mt-4 mb-4" v-if="$device.isMobileOrTablet">
            <div class="row mb-2">
              <div class="col-md-12">
                <h2>Hotels Nearby within budget</h2>
                <hr />
                <div class="row large">
                  <div class="col-md-4" v-for="otherProperty in otherProperties" :key="otherProperty.id">
                    <b-card :img-src="otherProperty.featured_image" img-height="150px" img-alt="Image"
                      style="max-width: 20rem; height: 20rem" img-top tag="article" class="mb-2">
                      <b-card-text>
                        <NuxtLink class="text-dark h4 text-decoration-none font-weight-bold" target="_blank" :to="{
                          path: 'description',
                          query: {
                            id: otherProperty.id,
                            start_date: startDate,
                            end_date: endDate,
                            budget: displayBudget,
                            guests: guests,
                          },
                        }" :key="$route.params.id">{{
  otherProperty.name.length > 30
  ? `${otherProperty.name.slice(0, 30)}...`
  : otherProperty.name
}}</NuxtLink>
                      </b-card-text>
                    </b-card>
                  </div>
                </div>
                <!--  carousel cards for mobile view -->
                <div class="col-md-4 mx-1 hidden">
                  <b-carousel id="carousel-4" :interval="0" controls img-width="w-100">
                    <b-carousel-slide v-for="otherProperty in otherProperties" :key="otherProperty.id">
                      <template #img>
                        <b-card :img-src="otherProperty.featured_image" img-height="150px" img-alt="Image"
                          style="max-width: 30rem; height: 25rem" img-top tag="article" class="mb-2">
                          <b-card-text> </b-card-text>
                        </b-card>
                      </template>
                      <NuxtLink style=" background: rgb(0, 0, 0);
                          background: rgba(0, 0, 0, 0.5);"
                        class="text-white h2 text-decoration-none font-weight-bold mt-4" target="_blank" :to="{
                          path: 'description',
                          query: {
                            id: otherProperty.id,
                            start_date: startDate,
                            end_date: endDate,
                            budget: displayBudget,
                            guests: guests,
                          },
                        }" :key="$route.params.id">{{
  otherProperty.name.length > 30
  ? `${otherProperty.name.slice(0, 30)}...`
  : otherProperty.name
}}</NuxtLink>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
                <!-- End of carousel for mobile views -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--End Room-details area-->
  </div>
  <!-- end of page-wrapper -->
</template>

<script>
import moment from "moment";
import Vue from "vue";
import { mapActions } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";
import ImageNotFound from "../../components/ui/ImageNotFound.vue";

export default {
  name: "description",
  middleware: "auth",
  components: { AppHeader, ImageNotFound },
  data() {
    return {
      isActive: true,
      tabIndex: 0,
      name: "",
      address: "",
      coverImage: "",
      description: "",
      map: "",
      images: [],
      weddingImages: [],
      weddingVideo: "",
      hotelFacilities: [],
      doubleOccupancyRate: "",
      tripleOccupancyRate: "",
      menus: [],
      alcholMenuLink: "",
      liveCounterMenuLink: "",
      otherProperties: "",
      doubleOccupancyRoomRate: "",
      tripleOccupancyRoomRate: "",
      roomInclusion: "",
      wedding_planning_decoration_budget: 0,
      budget: {
        budget_display: 0,
        double_occupancy_room_count: 0,
        triple_occupancy_room_count: 0,
      },
      bestBudgetPlan: "",
      comfortableBudgetPlan: "",
      selectedBudget: "",
      doubleRoomCountForCalculate: "",
      tripleRoomCountForCalculate: "",
      calculatedBudget: "",
      startDate: "",
      endDate: "",
      guests: "",
      bride_name: "",
      groom_name: "",
      nights: "",
      isAvailable: true,
      detailsBudget: "",
      bookingStart: "",
      bookingEnd: "",
      preBookingStartDate: "",
      preBookingEndDate: "",
      bookingGuests: "",
      displayBudget: "",
      property_terms: "",
      isLoading: false,
      startDateState: null,
      endDateState: null,
      // calcDetailedBudget: 0,
      isChecked: false
    };
  },
  head: {
    head: {
      title: "Awayddings - Destination Wedding Planner in India with Top Destinations",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature." },
        { hid: "keywords", name: "keywords", content: "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings" },
      ],
    },
    script: [
      {
        type: "text/javascript",
        src: "js/jquery.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "js/owl.carousel.min.js",
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
  mounted() {
    this.setupData();
    this.getDescription();
    this.getBudgetData();
  },

  filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) ;
            } else {
                return text;
            }
        },
    },

  computed: {
    startDateForBudgetCalculator() {
      return moment(this.startDate).format("DD/MM/YYYY");
    },

    endDateForBudgetCalculator() {
      return moment(this.endDate).format("DD/MM/YYYY");
    },

    isDisable() {
      if (this.startDate == "" || this.endDate == "") {
        return true;
      }
      return false;
    },

    calcBudget() {
      this.calculatedBudget =
        this.doubleOccupancyRate * this.budget.double_occupancy_room_count +
        this.tripleOccupancyRate * this.budget.triple_occupancy_room_count;

      this.calculatedBudget = this.calculatedBudget * this.nights;

      return this.calculatedBudget;
    },

    calcDetailedBudget() {
      let totalBudget = 0;
      for (let i = 0; i < this.detailsBudget.length; i++) {
        let totalSelectedQty =
          this.detailsBudget[i].data[0].selectedQty +
          this.detailsBudget[i].data[1].selectedQty;
        for (let j = 0; j < this.detailsBudget[i].data.length; j++) {
          //console.log("updateing..."+this.detailsBudget[i].data[j].percentage_occupancy);
          if (
            totalSelectedQty > this.detailsBudget[i].data[j].percentage_occupancy && 
            this.detailsBudget[i].data[j].chargable_type_is_starter != 1
          ) {
            totalBudget = totalBudget;
          } else {
            totalBudget =
              totalBudget +
              this.detailsBudget[i].data[j].selectedQty *
              this.detailsBudget[i].data[j].rate;
          }
        }
      }
      return totalBudget;
    },
  },

  filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) ;
            } else {
                return text;
            }
        },
    },

  methods: {
    ...mapActions(["toggleLoading"]),
    priceFormatter(price) {
      return Number(price).toLocaleString();
    },

    toggleClass() {
      this.isActive = !this.isActive; // Toggle the class
    },

    incrementRooms(item, allItems) {
      const guestSelected = this.guests;
      const doubleRoomSelectedQty = allItems[0].selectedQty;
      const tripleRoomSelectedQty = allItems[1].selectedQty;
      if (
        item.chargable_type_details.toLowerCase() == "double occupancy room" ||
        item.chargable_type_details.toLowerCase() == "triple occupancy room"
      ) {
        let totalRooms = item.total_rooms;
        let totalSelectedQty =
          allItems[0].selectedQty + allItems[1].selectedQty;
        if (totalSelectedQty >= totalRooms || item.selectedQty == item.qty) {
          item.selectedQty = item.selectedQty;
        } else {
          if (
            item.chargable_type_details.toLowerCase() == "double occupancy room"
          ) {
            if (allItems[1].selectedQty == 0) return;
          }
          if (
            item.chargable_type_details.toLowerCase() == "triple occupancy room"
          ) {
            if (allItems[0].selectedQty == 0) return;
          }
          item.selectedQty += 1;

          if (
            item.chargable_type_details.toLowerCase() == "double occupancy room"
          ) {
            let currentAccommodatedGuest =
              item.selectedQty * 2 + tripleRoomSelectedQty * 3;
            let toRemoveRoomsInTriple = Math.floor(
              (currentAccommodatedGuest - guestSelected) / 3
            );
            if (allItems[1].selectedQty == 0) return;
            allItems[1].selectedQty -= toRemoveRoomsInTriple;
          }

          if (
            item.chargable_type_details.toLowerCase() == "triple occupancy room"
          ) {
            let currentAccommodatedGuest =
              item.selectedQty * 3 + doubleRoomSelectedQty * 2;
            let toRemoveRoomsDouble = Math.floor(
              (currentAccommodatedGuest - guestSelected) / 2
            );
            if (allItems[0].selectedQty == 0) return;
            allItems[0].selectedQty -= toRemoveRoomsDouble;
          }
        }
      } else {
        if (item.selectedQty == item.qty) {
          item.selectedQty = item.selectedQty;
        } else {
          item.selectedQty += 1;
        }
      }
    },

    decrementRooms(item, allItems) {
      const guestSelected = this.guests;
      const doubleRoomSelectedQty = allItems[0].selectedQty;
      const tripleRoomSelectedQty = allItems[1].selectedQty;
      if (item.selectedQty == 0) {
        item.selectedQty = item.selectedQty;
      } else {
        item.selectedQty -= 1;
        if (
          item.chargable_type_details.toLowerCase() == "double occupancy room"
        ) {
          let currentAccommodatedGuest =
            item.selectedQty * 2 + tripleRoomSelectedQty * 3;
          let toAddRoomsInTriple = Math.ceil(
            (guestSelected - currentAccommodatedGuest) / 3
          );
          if (toAddRoomsInTriple < 0) return;
          allItems[1].selectedQty += toAddRoomsInTriple;
        }

        if (
          item.chargable_type_details.toLowerCase() == "triple occupancy room"
        ) {
          let currentAccommodatedGuest =
            item.selectedQty * 3 + doubleRoomSelectedQty * 2;
          let toAddRoomsDouble = Math.ceil(
            (guestSelected - currentAccommodatedGuest) / 2
          );
          if (toAddRoomsDouble < 0) return;
          allItems[0].selectedQty += toAddRoomsDouble;
        }
      }
    },

    add_starter(value, detailItem, item) {
      if (detailItem.isChecked === 1) {
        detailItem.selectedQty = this.guests;
      } else {
        detailItem.selectedQty = 0;
      }
      this.calcDetailedBudget;
    },

    setupData() {
      this.bookingStart = moment(this.$route.query.start_date).format(
        "DD/MM/YYYY"
      );
      this.preBookingStartDate = this.$route.query.start_date;
      this.startDate = this.$route.query.start_date;
      this.bookingEnd = moment(this.$route.query.end_date).format("DD/MM/YYYY");
      this.preBookingEndDate = this.$route.query.end_date;
      this.endDate = this.$route.query.end_date;
      this.bookingGuests = this.$route.query.guests;
      this.guests = this.$route.query.guests;
      this.displayBudget = this.$route.query.budget;
    },

    budgetCalculatorData() {
      const id = this.$route.query.id;
      this.$axios
        .get(`api/v1/properties/${id}/budget-calculator`, {
          params: {
            check_in: this.startDate,
            check_out: this.endDate,
            adult: this.guests,
            property_id: id,
          },
        })
        .then((res) => {
          this.detailsBudget = res.data.data;
          console.log(">> detailsBudget" + this.detailsBudget);
          for (let i = 0; i < this.detailsBudget.length; i++) {
            for (let j = 0; j < this.detailsBudget[i].data.length; j++) {
              if (
                this.detailsBudget[i].data[j].chargable_type_details ==
                "Double Occupancy Room"
              ) {
                Vue.set(
                  this.detailsBudget[i].data[j],
                  "selectedQty",
                  this.budget.double_occupancy_room_count
                );
              } else if (
                this.detailsBudget[i].data[j].chargable_type_details ==
                "Triple Occupancy Room"
              ) {
                Vue.set(
                  this.detailsBudget[i].data[j],
                  "selectedQty",
                  this.budget.triple_occupancy_room_count
                );
              } else {
                Vue.set(this.detailsBudget[i].data[j], "selectedQty", 0);
              }
            }
          }
        });
    },

    formatNumberToLakhs(number, decimals, recursiveCall) {
      const decimalPoints = decimals || 2;
      const noOfLakhs = number / 100000;
      let displayStr;
      let isPlural;

      // Rounds off digits to decimalPoints decimal places
      function roundOf(integer) {
        return +integer.toLocaleString(undefined, {
          minimumFractionDigits: decimalPoints,
          maximumFractionDigits: decimalPoints,
        });
      }

      if (noOfLakhs >= 1 && noOfLakhs <= 99) {
        const lakhs = roundOf(noOfLakhs);
        isPlural = lakhs > 1 && !recursiveCall;
        displayStr = `${lakhs} Lakh${isPlural ? "s" : ""}`;
      } else if (noOfLakhs >= 100) {
        const crores = roundOf(noOfLakhs / 100);
        const crorePrefix =
          crores >= 100000
            ? changeNumberFormat(crores, decimals, true)
            : crores;
        isPlural = crores > 1 && !recursiveCall;
        displayStr = `${crorePrefix} Crore${isPlural ? "s" : ""}`;
      } else {
        displayStr = roundOf(+number);
      }

      return displayStr;
    },

    setBudget(data) {
      this.budget.budget_display = data.budget_display;
      this.budget.double_occupancy_room_count =
        data.double_occupancy_room_count;

      this.budget.triple_occupancy_room_count =
        data.triple_occupancy_room_count;
    },

    checkAvailable() {
      const id = this.$route.query.id;
      this.isLoading = true;
      this.$axios
        .get(`api/v1/properties/${id}/available`, {
          params: {
            start_date: this.startDate,
            end_date: this.endDate,
            adult: this.guests,
            property_id: id,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.$router.replace({
              path: "description",
              query: {
                id: id,
                start_date: this.startDate,
                end_date: this.endDate,
                guests: this.guests,
                budget: this.displayBudget,
              },
            });
            this.bookingStart = moment(this.startDate).format("DD/MM/YYYY");

            this.bookingEnd = moment(this.endDate).format("DD/MM/YYYY");

            this.bookingGuests = this.guests;
            this.preBookingStartDate = this.startDate;
            this.preBookingEndDate = this.endDate;
            this.getBudgetData(this.startDate, this.endDate, this.guests);
            this.budgetCalculatorData();
            this.isLoading = false;
            this.startDateState = true;
            this.endDateState = true;
            this.$toast.success("Room available");
          } else {
            this.isLoading = false;
            this.startDateState = false;
            this.endDateState = false;
            this.$toast.error(res.data.message);
          }

        })
        .catch((error) => {
          this.isLoading = false;
          this.$toast.error(
            `No rooms available between ${moment(this.startDate).format(
              "DD/MM/YYYY"
            )} and ${moment(this.endDate).format("DD/MM/YYYY")} for ${this.guests
            } guests`
          );
        });
    },

    changeBudgetData() {
      if (this.selectedBudget == "best_budget_plan") {
        this.setBudget(this.bestBudgetPlan);
      } else if (this.selectedBudget == "comfortable_budget_plan") {
        this.setBudget(this.comfortableBudgetPlan);
      }
      this.budgetCalculatorData();
    },

    getDescription() {
      this.$store.dispatch("toggleLoading", true, { root: true });
      const id = this.$route.query.id;
      this.$axios.get("api/v1/properties/" + id).then((resp) => {
        const data = resp.data.data;
        console.log(data);
        this.name = data.name;
        this.coverImage = data.cover_image;
        this.address = data.location;
        this.description = data.description;
        this.map = data.gmap_embedded_code;
        this.wedding_planning_decoration_budget =
          data.wedding_planning_decoration_budget;
        this.hotelFacilities = data.amenities;
        this.roomInclusion = data.room_inclusion;
        this.menus = data.property_menus;
        this.otherProperties = data.other_properties;
        this.doubleOccupancyRoomRate = data.double_occupancy_rate;
        console.log("Double Rate" + data.double_occupancy_rate);
        this.tripleOccupancyRoomRate = data.triple_occupancy_rate;
        this.property_terms = data.property_terms;
        // resort related images
        data.images.forEach((image) => {
          this.images.push(image.url);
        });

        // wedding images
        data.wedding_images.forEach((weddingImage) => {
          this.weddingImages.push(weddingImage.url);
        });

        this.weddingVideo = data.wedding_video;
        this.$store.dispatch("toggleLoading", false, { root: true });
      });
    },

    getBudgetData(startDate = null, endDate = null, guests = null) {
      const id = this.$route.query.id;

      let start_date = startDate ?? this.$route.query.start_date;
      let end_date = endDate ?? this.$route.query.end_date;
      let adults = guests ?? this.$route.query.guests;
      this.$axios
        .get(`api/v1/properties/${id}/budget`, {
          params: {
            start_date: start_date,
            end_date: end_date,
            adult: adults,
            property_id: id,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.bestBudgetPlan = res.data.data.best_budget_plan;
            this.comfortableBudgetPlan = res.data.data.comfortable_budget_plan;

            // initial budget value
            this.setBudget(this.bestBudgetPlan);
            this.selectedBudget = "best_budget_plan";
            this.doubleOccupancyRate = res.data.data.double_occupancy_rate;
            this.tripleOccupancyRate = res.data.data.triple_occupancy_rate;
            this.doubleRoomCountForCalculate =
              this.budget.double_occupancy_room_count;
            this.tripleRoomCountForCalculate =
              this.budget.triple_occupancy_room_count;
            this.calculatedBudget = this.budget.budget_display;
            this.nights = res.data.data.nights;
            this.budgetCalculatorData();
          }
        });
    },

    dateDisabledStartDate(ymd, date) {
      let today = new Date();
      today.setDate(today.getDate() - 1);
      // Return `true` if the date should be disabled
      return date < today;
    },

    dateDisabledEndDate(ymd, date) {
      let today = new Date();
      today.setDate(today.getDate());
      if (this.startDate) {
        today = new Date(this.startDate);
      }
      // Return `true` if the date should be disabled
      return date < today;
    },

    setEndDate() {
      let date = new Date(this.startDate);
      date.setDate(date.getDate() + 1);
      this.endDate = moment(date).format("YYYY-MM-DD");
      this.endDateState = null;
      this.startDateState = null;
    },

    gotoPlanwedding() {
      this.$router.push({
        name: "event",
        query: { hotel_name: this.name, location: this.address }
      });
    },

    setStartDate() {
      this.endDateState = null;
      this.startDateState = null;
    },

    bookingResort() {
      this.$bvModal
        .msgBoxConfirm(
          `Please confirm that you want to book resort ${this.name}  from date ${this.startDateForBudgetCalculator} - ${this.endDateForBudgetCalculator} for ${this.guests} guests`,
          {
            title: "Confirm Booking 🚀",
            size: "md",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            cancelVariant: "danger",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          if (value) {
            console.log(">>details<< " + this.detailsBudget);
            this.$axios
              .post(
                "api/v1/pre-booking",
                {
                  user_budget: this.$route.query.budget,
                  check_in: this.preBookingStartDate,
                  check_out: this.preBookingEndDate,
                  adults: this.bookingGuests,
                  total_budget: this.calcDetailedBudget,
                  property_id: this.$route.query.id,
                  remarks: "123123'123123123213",
                  details: this.detailsBudget,
                  bride_name: this.bride_name,
                  groom_name: this.groom_name,
                },
                {
                  headers: {
                    Authorization: `Bearer ${this.$store.getters.getToken}`,
                  },
                }
              )
              .then((res) => {
                console.log(
                  "🚀 ~ file: _id.vue ~ line 1133 ~ .then ~ res",
                  res.status
                );
                if (res.status == 200) {
                  this.$toast.success(
                    "Congratulations! Your have successfully booked the venue"
                  );
                  this.$router.push("user/manage-bookings");
                }
              });
          }
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
};
</script>

<style scoped>
::v-deep .carousel-item img {
  height: 590px !important;
}

.map {
  width: 100%;
  height: 600px;
}

::v-deep .btn-danger,
::v-deep .btn-danger:not(:disabled):not(.disabled):active,
::v-deep .btn-danger,
::v-deep .btn-danger:hover,
::v-deep .btn-danger:active,
::v-deep .btn-danger:focus {
  background-color: #fc3333;
  border-color: #fc3333;
}

::v-deep .btn-budget-calculator {
  background: #000000;
  cursor: pointe;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 15px 45px;
  border: 0;
  border-radius: 6px;
  text-transform: capitalize;
  z-index: 1;
  position: relative;
  font-size: 16px;
  font-size: 1.06667rem;
}

::v-deep .btn-budget-calculator:hover {
  background: #2d2d2d !important;
}
details {
    display: inline-block !important;
}

.hidden {
  display: none;
}

@media screen and (max-width: 500px) {
  .hidden {
    /* visibility: hidden; */
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .large {
    visibility: hidden;
    display: none;
  }
}
</style>
