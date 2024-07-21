<template>
  <div class="destination-item">
    <div class="destination-img">
      <img
        :src="require('@/assets/images/team/' + imgSrc)"
        class="img-fluid"
        width="100%"
        height="100px"
        alt=""
      />
    </div>
    <div class="destination-content">
      <h3>
        {{ name }}
      </h3>
      <p>{{ designation }}</p>
      <span class="sub">
       <a :href=linkedin target="_blank" class="sub" style="font-size: 24px;"><i class="fa fa-linkedin fa-2xl"></i></a>
       </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeam",
  props: ["imgSrc", "designation", "about", "name", "linkedin"],
};
</script>
