<template>
  <div>
    <div class="room-item">
      <div class="room-img">
        <nuxt-link
          :to="{
            path: 'description',
            query: {
              id: resortRoute.id,
              start_date: resortRoute.startDate,
              end_date: resortRoute.endDate,
              guests: resortRoute.guests,
              budget: resortRoute.budget,
            },
          }"
          ><img height="300px" width="100%" :src="imgSrc" alt=""
        /></nuxt-link>
      </div>
      <div class="room-content">
        <h2 class="mb-0 mt-0" style="min-height: 80px;">
          <nuxt-link
            :to="{
              path: 'description',
              query: {
                id: resortRoute.id,
                start_date: resortRoute.startDate,
                end_date: resortRoute.endDate,
                guests: resortRoute.guests,
                budget: resortRoute.budget,
              },
            }"
            >{{ name }}</nuxt-link
          >
        </h2>
        <b-row>
          <b-col cols="4">
            <p class="d-flex mb-0">
              <i class="fi flaticon-placeholder mr-1"></i><strong></strong
              >{{ location }}
            </p>
          </b-col>
          <b-col cols="4">
            <p class="mb-0">
              <i class="fa fa-bed fa-lg mr-1"></i>{{ roomCount }}
            </p>
          </b-col>
          <b-col cols="4">
            <p class="mb-0"><i class="fa fa-moon-o mr-1"></i>{{ nights }}N</p>
          </b-col>
        </b-row>

        <h3>₹ {{ Number(price).toLocaleString() }}<span> (tax incl.)</span></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResortCard",
  props: {
    name: String,
    imgSrc: String,
    price: Number,
    resortRoute: Object,
    location: String,
    roomCount: Number,
    nights: Number,
  },
  mounted() {
    console.log("Resort", this.resortRoute);
  },
};
</script>
