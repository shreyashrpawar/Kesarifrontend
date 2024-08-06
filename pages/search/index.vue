<template>
  <div class="page-wrapper">
    <!-- Start header -->
    <app-header></app-header>
    <!-- end of header -->
    <!-- wpo-room-area-start -->
    <div class="wpo-room-area section-bg searchbar-padding" style="margin-top: 45px">
      <!-- Search Resorts section  -->
      <div class="wpo-select-section search-form search-form" style="z-index: 1">
        <div class="container">
          <b-form @submit.prevent="searchResorts">
            <b-row>
              <b-col md="2" sm="6">
                <b-form-group id="input-group-1" label="Destination" label-for="input-1">
                  <select class="custom-select form-control" id="destination" style="font-size: 14px"
                    v-model="form.locationId" @change="setLocationName($event)" required>
                    <option value="" disabled selected>Destination</option>
                    <option v-for="location in locationList" :value="location.id" :key="location.id">
                      {{ location.name }}
                    </option>
                  </select>
                </b-form-group>
              </b-col>
              <b-col md="3" sm="6">
                <b-form-group id="input-group-2" label="Booking Start - Booking End" label-for="input-2">
                  <date-range-picker class="input-2 form-control" ref="picker" opens="center" :min-date="minDate"
                    :ranges="false" :showDropdowns="true" :autoApply="true" v-model="dateRange">
                    <template #date="data">
                      <span class="small">{{ data.date | dateCell }}</span>
                    </template>

                    <template v-slot:input="picker" style="min-width: 350px">
                      <span v-if="picker.startDate == null" class="text-muted ml-2">Wedding Start - Wedding End</span>
                      <span v-else class="ml-2">{{ picker.startDate | date }} -
                        {{ picker.endDate | date }}</span>
                    </template>
                  </date-range-picker>
                </b-form-group>
              </b-col>
              <b-col md="3" sm="6">
                <b-form-group id="input-group-3" label="Guests" label-for="input-3">
                  <b-form-input v-model="form.guests" id="input-3" type="number"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="2" sm="6">
                <b-form-group id="input-group-3" label="Budget" label-for="input-3">
                  <b-form-input v-model="form.budget" id="input-3" type="number"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="2" sm="12" class="d-flex justify-content-center align-items-center">
                <button class="w-100 mt-3 theme-bg-color text-white btn" type="submit">
                  Check Availability
                </button>
              </b-col>
            </b-row>
          </b-form>
          <!-- <div class="row">
            <div class="col-lg-12">
              <div class="wpo-select-wrap">
                <div class="wpo-select-area">
                  <form class="clearfix" @submit.prevent="searchResorts">
                    <div class="select-sub">

                      <div class="input-group date">
                        <select
                          class="styled-select"
                          id="destination"
                          style="font-size: 14px"
                          v-model="form.locationId"
                          @change="setLocationName($event)"
                          required
                        >
                          <option value="" disabled selected>
                            Destination
                          </option>
                          <option
                            v-for="location in locationList"
                            :value="location.id"
                            :key="location.id"
                          >
                            {{ location.name }}
                          </option>
                        </select>
                        <i class="fi flaticon-placeholder"></i>
                      </div>
                    </div>
                    <div class="select-sub input-border">
                      <div class="input-group">
                        <date-range-picker
                          ref="picker"
                          opens="center"
                          :min-date="minDate"
                          :ranges="false"
                          :showDropdowns="true"
                          :autoApply="true"
                          v-model="dateRange"
                        >
                          <template #date="data">
                            <span class="small">{{
                              data.date | dateCell
                            }}</span>
                          </template>

                          <template
                            v-slot:input="picker"
                            style="min-width: 350px"
                          >
                            <i
                              class="fa fa-calendar fa-lg mr-1"
                              style="color: #7e90a6; margin-left: 10px"
                            ></i>
                            <span
                              v-if="picker.startDate == null"
                              class="text-muted"
                              >Wedding Start - Wedding End</span
                            >
                            <span v-else
                              >{{ picker.startDate | date }} -
                              {{ picker.endDate | date }}</span
                            >
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                    <div class="select-sub">

                      <div class="input-group date">
                        <input
                          type="number"
                          style="font-size: 14px"
                          placeholder="Guests"
                          min="1"
                          v-model="form.guests"
                          required
                        />
                        <i class="fi flaticon-user"></i>
                      </div>
                    </div>
                    <div class="select-sub">
                      <div class="input-group date budget">
                        <input
                          type="number"
                          style="font-size: 14px"
                          placeholder="Budget"
                          min="1"
                          v-model="form.budget"
                          required
                        />

                        <i
                          class="fa fa-inr fa-lg"
                          style="
                            color: #7e90a6;
                            margin-left: 10px;
                            margin-right: 0;
                          "
                        ></i>
                      </div>
                    </div>
                    <div class="select-sub">
                      <button class="theme-btn" type="submit">
                        Check Availability
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="container">
        <!-- Search Results section  -->
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="wpo-section-title-s2 mb-0">
              <h2>Search Results</h2>
            </div>
            <p class="text-center h5 mb-4">
              Showing results of Resort at
              <span class="font-weight-bold">{{ location }}</span> from booking
              date
              <span class="font-weight-bold">{{
              showBookingDate(startDate)
              }}</span>
              -
              <span class="font-weight-bold">{{
              showBookingDate(endDate)
              }}</span>
              for <span class="font-weight-bold">{{ guests }}</span> Guests
            </p>
          </div>
        </div>

        <div v-if="isLoading" class="text-center">
          <b-spinner variant="danger" label="Loading..."></b-spinner>
        </div>
        <div v-else-if="resorts.length === 0">
          <h5 class="text-center text-muted">Sorry! No search data found.</h5>
        </div>
        <div v-else class="room-wrap">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12" v-for="resort in resorts" :key="resort.id">
              <div class="room-item">
                <div class="room-img">
                  <nuxt-link :to="{
                    path: 'description',
                    query: {
                      id: resort.id,
                      start_date: startDate,
                      end_date: endDate,
                      guests: guests,
                      budget: budget,
                      locationName:form.locationName,
                    },
                  }"><img height="300px" width="100%" :src="resort.featured_image" alt="" /></nuxt-link>
                </div>
                <div class="room-content">
                  <h2 class="mb-0 mt-0" style="min-height: 80px;">
                    <nuxt-link :to="{
                      path: 'description',
                      query: {
                        id: resort.id,
                        start_date: startDate,
                        end_date: endDate,
                        guests: guests,
                        budget: budget,
                        locationName:form.locationName,
                      },
                    }">{{ resort.name }}
                    </nuxt-link>
                  </h2>
                  <b-row>
                    <b-col cols="12">
                      <p class="d-flex mb-0" style="min-height: 60px;">
                        <i class="fi flaticon-placeholder"></i>{{ resort.address }}
                      </p>
                    </b-col>
                    <b-col cols="6">
                      <p class="mb-0">Guests: {{ resort.pax }}</p>
                    </b-col>
                    <b-col cols="6">
                      <p class="mb-0">Wedding Nights: {{ resort.nights }}</p>
                    </b-col>
                  </b-row>
                  <span>
                    <h3>₹{{ Number(resort.amount).toLocaleString() }}<span style="font-size: 14px;"> (tax incl.)</span>
                    </h3>
                  </span>
                  <nuxt-link :to="{
                    path: 'description',
                    query: {
                      id: resort.id,
                      start_date: startDate,
                      end_date: endDate,
                      guests: guests,
                      budget: budget,
                      locationName:form.locationName,
                    },
                  }" class="theme-btn mt-3">Select This Resort</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div v-if="resorts.length > perPage" class="d-flex justify-content-center mt-4">
            <b-button class="theme-btn" @click="addResorts">{{
            isLoading ? "Loading..." : "Load More"
            }}</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import { mapActions } from "vuex";
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "Search",
  middleware: "auth",
  components: {
    AppHeader,
    DateRangePicker,
  },
  data() {
    return {
      resorts: "",
      startDate: "",
      endDate: "",
      guests: "",
      budget: "",
      isLoading: false,
      dateRange: {
        startDate: null,
        endDate: null,
      },
      minDate: new Date(),
      locationList: "",
      form: {
        guests: "",
        startDate: "",
        endDate: "",
        locationId: "",
        budget: "",
        locationName: "",
      },
      error: false,
      location: "",
      perPage: "",
      currentPage: "",
    };
  },
  head: {
    title: "Search - Awayddings",
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
        src: "js/script.js",
        body: true,
      },
    ],
  },

  mounted() {
    this.setupData();
    this.getSearchData();
    this.getLocations();
  },

  filters: {
    dateCell(value) {
      let dt = new Date(value);
      return dt.getDate();
    },
    date(val) {
      return val ? moment(val).format("DD/MM/YYYY") : "";
    },
  },

  methods: {
    ...mapActions(["toggleLoading"]),
    setupData() {
      this.form.locationId = this.$route.query.location_id;
      this.startDate = this.$route.query.start_date;
      this.form.startDate = this.$route.query.start_date;
      this.dateRange.startDate = this.$route.query.start_date;
      this.endDate = this.$route.query.end_date;
      this.form.endDate = this.$route.query.end_date;
      this.dateRange.endDate = this.$route.query.end_date;
      this.guests = this.$route.query.guests;
      this.form.guests = this.$route.query.guests;
      this.budget = this.$route.query.budget;
      this.form.budget = this.$route.query.budget;
      this.form.locationName = this.$route.query.location_name;
      this.location = this.$route.query.location_name;
    },

    getLocations() {
      this.$axios.get("locations").then((res) => {
        this.locationList = res.data.data;
      });
    },

    showBookingDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    getSearchData() {
      this.$store.dispatch("toggleLoading", true, { root: true });
      this.isLoading = true;
      this.$axios
        .get("properties", {
          params: {
            start_date: this.$route.query.start_date,
            end_date: this.$route.query.end_date,
            adults: this.$route.query.guests,
            budget: this.$route.query.budget,
            location_id: this.$route.query.location_id,
          },
        })
        .then((res) => {
          this.resorts = res.data.data.data;
          this.isLoading = false;
          this.perPage = res.data.data.per_page;
          console.log("perPage", res.data.data.per_page);
          this.currentPage = res.data.data.current_page;
          this.$store.dispatch("toggleLoading", false, { root: true });
        })
        .catch((err) => {
          if (err) this.error = true;
          this.isLoading = false;
          this.$store.dispatch("toggleLoading", false, { root: true });
        });
    },

    setLocationName(event) {
      this.form.locationName = event.target[event.target.selectedIndex].text;
      console.log(this.form.locationName);
    },

    searchResorts() {
      this.isLoading = true;
      this.form.startDate = moment(this.dateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.form.endDate = moment(this.dateRange.endDate).format("YYYY-MM-DD");
      this.startDate = this.form.startDate;
      this.endDate = this.form.endDate;
      this.guests = this.form.guests;
      this.location = this.form.locationName;

      this.$store.dispatch("SET_SEARCH_DATA", this.form);
      this.$router.replace({
        name: "search",
        query: {
          start_date: this.form.startDate,
          end_date: this.form.endDate,
          guests: this.form.guests,
          budget: this.form.budget,
          location_id: this.form.locationId,
          location_name: this.form.locationName,
        },
      });
      this.$axios
        .get("properties", {
          params: {
            start_date: this.form.startDate,
            end_date: this.form.endDate,
            adults: this.form.guests,
            budget: this.form.budget,
            location_id: this.form.locationId,
          },
        })
        .then((res) => {
          this.resorts = res.data.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          if (err) this.error = true;
        });
    },

    addResorts() {
      this.$axios
        .get("properties", {
          params: {
            page: this.currentPage + 1,
          },
        })
        .then((res) => {
          this.resorts.push(res.data.data.data);
          this.isLoading = false;
        })
        .catch((err) => {
          if (err) this.error = true;
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

::v-deep h2 {
  font-family: 'Nunito';
  font-weight: 700 !important;
}

.searchbar-padding {
  padding-top: 70px;
}

.styled-select {
  background-color: #fff !important;
}

.styled-select:invalid {
  color: #7f91a6;
  background-color: #fff;
}

::v-deep #example-datepicker {
  color: #154279;
  font-size: 1.25rem;
}

@media (max-width: 991px) {
  .searchbar-padding {
    padding-top: 0px;
  }

  .datepicker-ui {
    font-size: 0.9rem;
  }

  ::v-deep #example-datepicker {
    font-size: 1rem;
    padding-right: 0.1rem;
  }

  ::v-deep .b-form-btn-label-control.form-control>.form-control {
    padding-left: 0rem;
  }
}

@media (max-width: 767px) {
  .searchbar-padding {
    padding-top: 0px;
    margin-top: -20px;
  }
}

::v-deep .vue-daterange-picker {
  width: 100%;
  height: 34.25px;
  border: 1px solid #ced4da;
  padding: 0;
}

::v-deep .vue-daterange-picker .form-control {
  border: none;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.wpo-select-section .wpo-select-area form .input-border,
.wpo-select-section-s2 .wpo-select-area form .input-border {
  position: relative;
  border-right: 2px solid #c8ced4;
}

@media (max-width: 991px) {

  .wpo-select-section .wpo-select-area form .input-border,
  .wpo-select-section-s2 .wpo-select-area form .input-border {
    border-right: 0;
    border-bottom: 1px solid #c8ced4;
  }
}

.datepicker-ui {
  border: none;
}

.datepicker-ui:focus {
  box-shadow: none;
}
</style>
