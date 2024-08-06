<template>
  <div>
  
    
    <b-modal id="modal-95" hide-footer  class="decor-modal p-0" >
        <template #modal-title>
        Event Bookings Information
        </template>
        <b-row class="bv-example-row ">
          <b-col cols="12" class="pt-3 pb-2">
            <div v-for="(events, date) in groupedData" :key="date" class="card-evevt-info">
              <h2>{{ date }}</h2>
              <b-table class="dataTable" :items="events"
                  :fields="EventDetails" :responsive="true" show-empty>
                  <template #cell(decor_image)="row">
                    <img :src="row.item.decor_image" alt="" srcset="" height="50px" width="50px"
                      style="border-radius: 50px" />
                  </template>
                </b-table>
            </div>
            <div class="card-evevt-info" >
              <h2>Additional</h2>
              <b-table class="dataTable" :items="addsondData" :fields="addsondInfo" :responsive="true" show-empty>
                <template #cell(addition_facility_image_url)="row">
                  <img :src="row.item.addition_facility_image_url" alt="" srcset="" height="50px" width="50px"
                    style="border-radius: 50px" />
                </template>
              </b-table>      
            </div>
            <div   :key="date" class="card-evevt-info">
              <h2>Additional Artist</h2>
              <b-table class="dataTable" :items="addsondArtist" :fields="artistInfo" :responsive="true" show-empty>
                <template #cell(artist_person_image)="row">
                  <img :src="row.item.artist_person_image" alt="" srcset="" height="50px" width="50px"
                    style="border-radius: 50px" />
                </template>
              </b-table>      
            </div>
            <div v-if="bookingSummary" class="card-evevt-info">
                        <template>
                          <div class="text-right p-4">
                            <h5>
                              Discount:
                              {{
                                  priceFormatter(
                                    bookingSummary.discount
                                  )
                              }}
                            </h5>
                            <h4>
                              Net Amount:
                              {{
                                  priceFormatter(
                                    bookingSummary.amount
                                  )
                              }}
                            </h4>
                          </div>
                        </template>
            </div>
          </b-col>
          
        </b-row> 
    </b-modal>
    <app-header></app-header>
    
    <div class="cart-area section-padding">
      <div class="container">
      <div>
        <h1>Event Bookings</h1>
<hr />
      </div>
        <b-tabs pills content-class="mt-3">
          <b-tab title="PRE-BOOKING" active>
            <div class="form">
              <div class="cart-wrapper">
                <div v-if="preBookingData" class="row">
                  <div class="col-12">
                    
                    <b-table v-if="!isBusy && preBookingData.length > 0" class="dataTable" :items="preBookingData"
                      :fields="fields" :responsive="true" show-empty>
                      

                      <template #cell(property_image)="row">
                        <img :src="row.item.property_image" alt="" srcset="" height="50px" width="50px"
                          style="border-radius: 50px" />
                      </template>
                     

                      <template #cell(action)="row">
                        <b-button size="sm" variant="danger" class="red-btn" v-b-modal.modal-95 @click="handleClickThank(row.item)">
                           Details
                        </b-button>
                      </template>
                    </b-table>
                    
                  </div>
                </div>
                <no-booking v-if="preBookingData.length == 0" booking-type="pre-booking"></no-booking>
              </div>
            </div>
          </b-tab>
          <b-tab title="BOOKING">
            <div class="form">
              <div class="cart-wrapper">
                <div v-if="bookingData" class="row">
                  <div class="col-12">
                    <b-skeleton-table v-if="isBusy" :rows="5" :columns="6" :table-props="{ bordered: false }">
                    </b-skeleton-table>
                    <b-table v-if="!isBusy && bookingData.length > 0" class="dataTable" :items="bookingData"
                      :fields="fields" :responsive="true" show-empty>
                      <template #cell(property_image)="row">
                        <img :src="row.item.property_image" alt="" srcset="" height="50px" width="50px"
                          style="border-radius: 50px" />
                      </template>
                      <template #emptyfiltered="scope">
                        <h4>{{ scope.emptyFilteredText }}</h4>
                      </template>
                      <template #cell(booking_dates)="row">
                        {{ dateFormatter(row.item.check_in) }} -
                        {{ dateFormatter(row.item.check_out) }}
                      </template>

                      <template #cell(action)="row">
                      <b-button size="sm" variant="danger" class="red-btn" v-b-modal.modal-95 @click="handleClickThank(row.item)">
                           Details
                        </b-button>
                        <b-button size="sm" variant="danger" class="red-btn" @click="row.toggleDetails">
                          {{ row.detailsShowing ? "Hide" : "Show" }} Payments Info
                        </b-button>
                      </template>

                      <template #row-details="row">
                        

                        <b-table :fields="paymentsFields" :items="
                          row.item.booking_payment_summary
                            .booking_payment_details
                        " :responsive="true" bordered caption-top>
                          <template #table-caption>
                            <h5>Payments Details</h5>
                          </template>

                          <template #cell(amount)="row">
                            {{ priceFormatter(row.item.amount) }}
                          </template>

                          <template #cell(payment_mode)="row">
                            <span v-if="row.item.payment_mode">{{
                                row.item.payment_mode
                            }}</span>
                            <span v-else>Not Available</span>
                          </template>
                          <template #cell(payment_status)="row">
                            <span v-if="row.item.payment_mode != null">
                              <b-badge pill variant="success">Paid</b-badge>
                            </span>
                            <span v-else>
                              <b-badge pill variant="warning">Pending</b-badge>
                            </span>
                          </template>
                        </b-table>
                      </template>
                    </b-table>
                  </div>
                </div>
                <no-booking v-if="bookingData.length == 0" booking-type="confirm"></no-booking>
              </div>
            </div>
          </b-tab>
          <b-tab title="COMPLETED">
            <div class="form">
              <div class="form">
                <div class="cart-wrapper">
                  <div v-if="completedData" class="row">
                    <div class="col-12">
                      <b-skeleton-table v-if="isBusy" :rows="5" :columns="6" :table-props="{ bordered: false }">
                      </b-skeleton-table>
                      <b-table v-if="!isBusy && completedData.length > 0" class="dataTable" :items="completedData"
                        :fields="fields" :responsive="true" show-empty>
                        <template #emptyfiltered="scope">
                          <h4>{{ scope.emptyFilteredText }}</h4>
                        </template>

                        <template #cell(resort_image)="row">
                          <img :src="row.item.property.featured_image" alt="" srcset="" height="50px" width="50px"
                            style="border-radius: 50px" />
                        </template>
                        <template #cell(booking_dates)="row">
                          {{ dateFormatter(row.item.check_in) }} -
                          {{ dateFormatter(row.item.check_out) }}
                        </template>

                        <template #cell(action)="row">
                          <b-button size="sm" variant="danger" class="red-btn" @click="row.toggleDetails">
                            {{ row.detailsShowing ? "Hide" : "Show" }} Details
                          </b-button>
                        </template>

                        <template #row-details="row">
                          <b-table :fields="bookingDetailsFields" :items="row.item.booking_details" :responsive="true"
                            bordered>
                            <template #cell(total_amount)="row">
                              {{ priceFormatter(row.item.qty * row.item.rate) }}
                            </template>
                          </b-table>
                          <hr />
                          <template>
                            <div style="float: right">
                              <h5>
                                Discount:
                                {{
                                    priceFormatter(
                                      row.item.booking_payment_summary.discount
                                    )
                                }}
                              </h5>
                              <h4>
                                Net Amount:
                                {{
                                    priceFormatter(
                                      row.item.booking_payment_summary.amount
                                    )
                                }}
                              </h4>
                            </div>
                          </template>

                          <b-table :fields="paymentsFields" :items="
                            row.item.booking_payment_summary
                              .booking_payment_details
                          " :responsive="true" bordered caption-top>
                            <template #table-caption>
                              <h5>Payments Details</h5>
                            </template>

                            <template #cell(amount)="row">
                              {{ priceFormatter(row.item.amount) }}
                            </template>

                            <template #cell(payment_mode)="row">
                              <span v-if="row.item.payment_mode">{{
                                  row.item.payment_mode
                              }}</span>
                              <span v-else>Not Available</span>
                            </template>
                            <template #cell(payment_status)="row">
                              <span v-if="row.item.payment_mode != null">
                                <b-badge pill variant="success">{{
                                    row.item.payment_mode
                                }}</b-badge>
                              </span>
                              <span v-else>
                                <b-badge pill variant="warning">{{
                                    row.item.payment_mode
                                }}</b-badge>
                              </span>
                            </template>
                            <template #cell(remark)="row">
                              {{ row.item.remarks }}
                            </template>
                          </b-table>
                        </template>
                      </b-table>
                    </div>
                  </div>
                  <no-booking v-if="!completedData" booking-type="completed"></no-booking>
                </div>
              </div>
            </div>
            <!-- <div class="form">
              <div class="cart-wrapper">
                <div v-if="bookingData" class="row">
                  <div class="col-12">
                    <b-skeleton-table
                      v-if="isBusy"
                      :rows="5"
                      :columns="6"
                      :table-props="{ bordered: false }"
                    ></b-skeleton-table>
                    <b-table
                      v-else
                      class="dataTable"
                      :items="completedDatas"
                      :fields="fields"
                      :responsive="true"
                      show-empty
                    >
                      <template #emptyfiltered="scope">
                        <h4>{{ scope.emptyFilteredText }}</h4>
                      </template>

                      <template #cell(resort_image)="row">
                        <img
                          :src="row.item.property.featured_image"
                          alt=""
                          srcset=""
                          height="50px"
                          width="50px"
                          style="border-radius: 50px"
                        />
                      </template>
                      <template #cell(booking_dates)="row">
                        {{ dateFormatter(row.item.check_in) }} -
                        {{ dateFormatter(row.item.check_out) }}
                      </template>

                      <template #cell(action)="row">
                        <b-button
                          size="sm"
                          variant="danger"
                          class="red-btn"
                          @click="row.toggleDetails"
                        >
                          {{ row.detailsShowing ? "Hide" : "Show" }} Details
                        </b-button>
                      </template>

                      <template #row-details="row">
                        <b-table
                          :fields="preBookingDetailsFields"
                          :items="row.item.pre_booking_details"
                          :responsive="true"
                          bordered
                        >
                          <template #cell(total_amount)="row">
                            {{ priceFormatter(row.item.qty * row.item.rate) }}
                          </template>
                        </b-table>
                        <hr />
                        <b-table
                          :fields="paymentsFields"
                          :items="row.item.pre_booking_details"
                          :responsive="true"
                          bordered
                          caption-top
                        >
                          <template #table-caption>
                            <h5>Payments</h5>
                          </template>

                          <template #cell(amount)="row">
                            {{ priceFormatter(row.item.qty * row.item.rate) }}
                          </template>

                          <template #cell(payment_mode)="row">
                            <span v-if="row.item">NEFT</span>
                          </template>
                          <template #cell(payment_status)="row">
                            <span v-if="row.item">
                              <b-badge pill variant="success"
                                >Completed</b-badge
                              ></span
                            >
                          </template>
                        </b-table>
                      </template>
                    </b-table>
                  </div>
                </div>
                <no-booking v-else booking-type="completed"></no-booking>
              </div>
            </div> -->
          </b-tab>
          <b-tab title="CANCELLED">
            <div class="form">
              <div class="cart-wrapper">
                <div v-if="cancelledData" class="row">
                  <div class="col-12">
                    <b-skeleton-table v-if="isBusy" :rows="5" :columns="6" :table-props="{ bordered: false }">
                    </b-skeleton-table>
                    <b-table v-if="!isBusy && cancelledData.length > 0" class="dataTable" :items="cancelledData"
                      :fields="fields" :responsive="true">
                      <template #cell(property_image)="row">
                        <img :src="row.item.property_image" alt="" srcset="" height="50px" width="50px"
                          style="border-radius: 50px" />
                      </template><template #cell(action)="row">
                        <b-button size="sm" variant="danger" class="red-btn" v-b-modal.modal-95 @click="handleClickThank(row.item)">
                          {{ row.detailsShowing ? "Hide" : "Show" }} Details
                        </b-button>
                      </template>
                    </b-table>
                  </div>
                </div>
                <no-booking v-if="cancelledData.length == 0" booking-type="cancelled"></no-booking>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import NoBooking from "../../components/booking/NoBooking.vue";
import AppHeader from "../../components/layout/AppHeader.vue";
function groupBy(obj, key) {
  return obj.reduce((result, obj) => {
    const keyValue = obj[key];
    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(obj);
    return result;
  }, {});
}
export default {
  middleware: "auth",
  components: { AppHeader, NoBooking },
  name: "EventBookings",
  props: {
    groupedData: Object, // Receive the groupedData as a prop
  },
  data() {
    return {
      groupedData:[],
      addsondData:[],
      addsondArtist:[],
       artistInfo:[],
      preBookingData: [],
      bookingData: [],
      completedData: [],
      cancelledData: [],
      isBusy: false,
      fields: [
        "property_image",
        {
          key: "property_name",
          label: "Property Name",
        },
        {
          key: "location_name",
          label: "Location",
        },
        {
          key: "total_amount",
          label: "Total Amount",
          formatter: (value) =>
            "₹ " +
            Number(value).toLocaleString(),
        },
        {
          key: "check_in",
          label: "Start Date",
        },
        {
          key: "check_out",
          label: "End Date",
        },
        "action",
      ],

      EventDetails: [
        {
          key: "event_name",
          label: "Event Name",
        },
        "decor_image",
         {
          key: "decor_amount",
          label: "Decor Amount",
        },
        {
          key: "event_start_time",
          label: "Start Time",
        },
        {
          key: "event_end_time",
          label: "End Time",
        },
         
        {
          key: "artist_person_name",
          label: "Artist",
        },
        {
          key: "artist_person_amount",
          label: "Artist Amount",
        },
        {
          key: "day_total",
          label: "Event Total",
        },
      ],
      addsondInfo: [
        {
          key: "addition_facility_image_url",
          label: "Image",
        },
        {
          key: "addition_facility_name",
          label: "Name",
        },
        {
          key: "facility_amount",
          label: "Amount",
        },
      ],
      artistInfo: [
        {
          key: "artist_person_image",
          label: "Image",
        },
        {
          key: "artist_person_name",
          label: "Name",
        },
        {
          key: "artist_person_amount",
          label: "Amount",
        },
      ],
      paymentsFields: [
        {
          key: "date",
          label: "Due Date",
          formatter: (value) => this.dateFormatter(value),
        },
        {
          key: "amount",
          label: "Amount",
        },
        {
          key: "payment_mode",
          label: "Mode of Payment",
        },
        {
          key: "payment_status",
          label: "Status of Payment",
        },
      
      ],
    };
  },

  mounted() {
    this.getPreBookingData();
  },

  methods: {
    priceFormatter(price) {
      return "₹ " + Number(price).toLocaleString();
    },

    dateFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    getPreBookingData() {
      this.isBusy = true;
      let storage = JSON.parse(window.localStorage.getItem("vuex"));
      if (storage) {
        this.$axios
          .get("get_event_bookings_history", {
            headers: {
              Authorization: `Bearer ${storage.auth.token}`,
            },
          })
          .then((res) => {
            if (res.data.success) {
              this.preBookingData = res.data.data.pending;
              console.log(this.preBookingData, " this.preBookingData")
              this.bookingData = res.data.data.approved;
              this.completedData = res.data.completed;
              this.cancelledData = res.data.data.cancelled;
              this.isBusy = false;
            }
          });
      }
    },
    handleClickThank(data) {
      console.log(data, "data=======")
      this.groupedData = groupBy(data.booking_details, 'date');
      this.addsondData = data.addson_event_details;
      this.addsondArtist = data.addson_artist_person;
      this.bookingSummary = data.booking_payment_summary;
    },
    
  },
  
};
   
</script>

<style scoped>
::v-deep .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  background-color: #fc3333;
}

::v-deep a {
  color: #fc3333;
}

.btn-danger:not(:disabled):not(.disabled):active,
.red-btn,
.red-btn:hover,
.red-btn:active,
.red-btn:focus {
  background-color: #fc3333;
  border-color: #fc3333;
}

::v-deep .dataTable tr td {
  vertical-align: middle;
}
.card-evevt-info {
    border: 1px solid #ccc;
    border-radius: 16px;
    margin-bottom: 20px;
}
.card-evevt-info h2{
      padding: 12px 16px;
    font-size: 18px;
    margin: 0px;
    background: #fc3333;
    border-radius: 16px 16px 0px 0px;
    color: #fff;
}
</style>
