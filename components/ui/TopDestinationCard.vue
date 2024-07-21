<template>
  <div class="destination-item">
    <div v-if="name == 'Goa'">
      <nuxt-link :to="{
        path: 'search',
        query: {
          location_id: 1,
          start_date: topDestinationStartDate,
          end_date: topDestinationEndDate,
          guests: 50,
          budget: 200000,
        },
      }">
        <div class="destination-img">
          <nuxt-img format="webp" :src="'/images/destination/' + imgSrc" class="img-fluid" width="100%" height="60%"
            alt="" />
        </div>
        <div class="destination-content">
          <span class="sub" v-if="parseInt(propertyCount) > 0">{{ propertyCount }} properties</span>
          <span class="sub" v-else>Coming Soon</span>
        </div>
      </nuxt-link>
    </div>
    <div v-else-if="name == 'Jaipur'">
      <nuxt-link :to="{
        path: 'search',
        query: {
          location_id: 2,
          start_date: topDestinationStartDate,
          end_date: topDestinationEndDate,
          guests: 50,
          budget: 200000,
        },
      }">
        <div class="destination-img">
          <nuxt-img format="webp" :src="'/images/destination/' + imgSrc" class="img-fluid" width="100%" height="60%"
            alt="" />
        </div>
        <div class="destination-content">
          <span class="sub" v-if="parseInt(propertyCount) > 0">{{ propertyCount }} properties</span>
          <span class="sub" v-else>Coming Soon</span>
        </div>
      </nuxt-link>
    </div>
    <div v-else-if="name.includes('Karjat')">
      <nuxt-link :to="{
        path: 'search',
        query: {
          location_id: 3,
          start_date: topDestinationStartDate,
          end_date: topDestinationEndDate,
          guests: 50,
          budget: 200000,
        },
      }">
        <div class="destination-img">
          <nuxt-img format="webp" :src="'/images/destination/' + imgSrc" class="img-fluid" width="100%" height="60%"
            alt="" />
        </div>
        <div class="destination-content">
          <span class="sub" v-if="parseInt(propertyCount) > 0">{{ propertyCount }} properties</span>
          <span class="sub" v-else>Coming Soon</span>
        </div>
      </nuxt-link>
    </div>
    <div v-else>
      <div class="destination-img">
        <nuxt-img format="webp" :src="'/images/destination/' + imgSrc" class="img-fluid" width="100%" height="60%"
          alt="" />
      </div>
      <div class="destination-content">
        <span class="sub" v-if="parseInt(propertyCount) > 0">{{ propertyCount }} properties</span>
        <span class="sub" v-else>Coming Soon</span>
        <!-- <h2>
        <a :href="propertyLink">{{ name }}</a>
      </h2> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopDestinationCard",
  props: ["imgSrc", "propertyCount", "name", "propertyLink", "topDestinationStartDate", "topDestinationEndDate"]
};
</script>
