<template>
  <div>
    <app-header></app-header>

    <div class="cart-area section-padding">
      <div class="container">
        <b-tabs pills content-class="mt-3">
          <b-tab title="PRE-BOOKING" active>
            <div class="form">
              <div class="cart-wrapper">
                <div v-if="preBookingData" class="row">
                  <div class="col-12">
                    <b-skeleton-table v-if="isBusy" :rows="5" :columns="6" :table-props="{ bordered: false }">
                    </b-skeleton-table>
                    <b-table v-if="!isBusy && preBookingData.length > 0" class="dataTable" :items="preBookingData"
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
                        <b-table :fields="preBookingDetailsFields" :items="row.item.pre_booking_details"
                          :responsive="true" bordered>
                          <template #cell(total_amount)="row">
                            {{ priceFormatter(row.item.qty * row.item.rate) }}
                          </template>
                        </b-table>
                      </template>
                    </b-table>
                  </div>
                </div>
                <no-booking v-if="preBookingData && preBookingData.length === 0" booking-type="pre-booking"></no-booking>
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
                            <span v-if="row.item.transaction_status === 'PAYMENT_SUCCESS'">
                              <b-badge pill variant="success">Paid </b-badge>
                            </span>
                            <span v-else-if="row.item.transaction_status === 'pending' || row.item.transaction_status === 'PAYMENT_PENDING' || row.item.transaction_status === 'PAYMENT_INITIATED'">
                              <b-badge pill variant="warning">Pending</b-badge>
                            </span>
                            <span v-else-if="row.item.transaction_status === 'PAYMENT_FAILED'">
                              <b-badge pill variant="danger">Failed</b-badge>
                            </span>
                          </template>
                          
                          <template #cell(remarks)="row">
                            <span v-if="row.item.transaction_id">{{
                                row.item.transaction_id
                            }}</span>
                            <span v-else>Not Available</span>
                          </template>
                          <template #cell(trans_date)="row">
                            <span v-if="row.item.transaction_status!='pending'">{{
                                dateFormatter(row.item.updated_at)+" "+timeFormatter(row.item.updated_at)
                            }}</span>
                            <span v-else>Not Available</span>
                          </template>

                          <template #cell(payment_link)="row">
                            <template v-if="row.item.transaction_status === 'pending' || row.item.transaction_status === 'PAYMENT_FAILED' ">
                              <button
                              :disabled=isPayButtonDisabled(row)
                                @click=initiatePayment(row.item)
                                class="btn btn-primary"
                                :class="{ 'btn-disabled': isPayButtonDisabled(row) }">
                                Pay Now
                              </button>
                            </template>
                            <span v-else>
                            <button disabled class="btn btn-secondary">Paid</button>
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
                        <b-table :fields="preBookingDetailsFields" :items="row.item.pre_booking_details"
                          :responsive="true" bordered>
                          <template #cell(total_amount)="row">
                            {{ priceFormatter(row.item.qty * row.item.rate) }}
                          </template>
                        </b-table>
                      </template>
                    </b-table>
                  </div>
                </div>
                <no-booking v-if="cancelledData && cancelledData.length === 0" booking-type="cancelled"></no-booking>
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

export default {
  middleware: "auth",
  components: { AppHeader, NoBooking },
  name: "ManageBookings",
  data() {
    return {
      preBookingData: [],
      bookingData: [],
      completedData: [],
      cancelledData: [],
      isBusy: false,
      fields: [
        "resort_image",
        {
          key: "property.name",
          label: "Resort Name",
        },
        {
          key: "pax",
          label: "Guests",
        },
        {
          key: "total_amount",
          label: "Proposed Budget",
          formatter: (value) =>
            "₹ " +
            Number(value).toLocaleString(),
        },
        "booking_dates",
        "action",
      ],
      preBookingDetailsFields: [
        {
          key: "date",
          label: "Date",
          formatter: (value) => this.dateFormatter(value),
        },
        {
          key: "hotel_chargable_type.name",
          label: "Room Type",
        },
        {
          key: "rate",
          label: "Room Rate",
        },
        {
          key: "qty",
          label: "Quantity",
        },
        "total_amount",
      ],
      bookingDetailsFields: [
        {
          key: "date",
          label: "Date",
          formatter: (value) => this.dateFormatter(value),
        },
        {
          key: "hotel_chargable_type.name",
          label: "Room Type",
        },
        {
          key: "rate",
          label: "Room Rate",
        },
        {
          key: "qty",
          label: "Quantity",
        },
        "total_amount",
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
        {
          key: "remarks",
          label: "Transaction ID",
        },
        {
          key: "trans_date",
          label: "Transaction date",
        },
        {
           key: "payment_link", 
           label: "Payment Link",
        },
      ],
    };
  },

  mounted() {
    this.getPreBookingData();
  },

  methods: {
    initiatePayment(paymentItem) {
      console.log(paymentItem,"item");
      let storage = JSON.parse(window.localStorage.getItem("vuex"));
      const { booking_payment_summaries_id, installment_no, amount } = paymentItem;
      
      const url = `payment?amount=${amount}&booking_payment_summaries_id=${booking_payment_summaries_id}&installment_no=${installment_no}`;
      this.$axios.get(url, {
            headers: {
              Authorization: `Bearer ${storage.auth.token}`,
            },
          })
      .then(response => {
        // Handle the response, e.g., redirect to the payment gateway
        console.log(response)
        window.location.href = response.data; 
      })
      .catch(error => {
        // Handle errors
       this.$toast.error("Something went wrong! please try again later");
      });
    },
    priceFormatter(price) {
      return "₹ " + Number(price).toLocaleString();
    },

    dateFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    timeFormatter(date){
      return moment(date).format('LTS');
    },

    isPayButtonDisabled(row) {
      if(row.index==0){
        return false;
      }
      if(row.item.active_installment==1){
        return false;
      }
      return true;
   },

    getPreBookingData() {
      console.log(">>>>>>>>>");
      this.isBusy = true;
      let storage = JSON.parse(window.localStorage.getItem("vuex"));
      if (storage) {
        this.$axios
          .get("pre-booking", {
            headers: {
              Authorization: `Bearer ${storage.auth.token}`,
            },
          })
          .then((res) => {
            console.log(
              "🚀 ~ file: manage-bookings.vue ~ line 380 ~ .then ~ res",
              res
            );
            if (res.data.success) {
              console.log(
                "🚀 ~ file: manage-bookings.vue ~ line 386 ~ .then ~ res.data.success",
                res.data.success
              );
              this.preBookingData = res.data.data.pending;
              console.log(
                "🚀 ~ file: manage-bookings.vue ~ line 382 ~ .then ~ preBookingData",
                this.preBookingData
              );
              this.bookingData = res.data.data.approved;
              console.log(
                "🚀 ~ file: manage-bookings.vue ~ line 396 ~ .then ~ bookingData",
                this.bookingData
              );
             
              this.completedData = res.data.completed;
              this.cancelledData = res.data.data.cancelled;
              this.isBusy = false;
            }
          });
      }
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

.btn-disabled {
  color: #999999; 
  background-color: #dddddd; 
  cursor: not-allowed; 
}
</style>
