<template>
  <div class="payment-failed">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h2 class="text-center">Payment Failed</h2>
          <div class="text-center">
            <img src="~/static/paymentfailed.png" alt="Payment Failed" style="max-width: 200px;"> <!-- Payment failed image -->
          </div>
        <template>
  <b-card title="Payment Failed" class="text-center">
    <p>Unfortunately, your payment could not be processed.</p>
    <p>Please <a href="/user/manage-bookings" @click="retryPayment">try again</a>.</p>
    <p>Transaction ID: {{ transactionId }}</p>
    <p>If you need further assistance, please contact us at: <a :href="'tel:' + phoneNumber">{{ phoneNumber }}</a></p>
  </b-card>
</template>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactionId: '', // You will set this from the backend response
      phoneNumber: '+91 9370 157 830' // Your support phone number
    };
  },
  mounted() {
    this.transactionId = this.$route.query.transactionId;
  },
  methods: {
    retryPayment() {
     
    }
  }
};
</script>

<style scoped>
.payment-failed {
  margin-top: 50px;
}
</style>