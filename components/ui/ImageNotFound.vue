<template>
  <div
    class="img-unavailable d-flex justify-content-center align-items-center w-100 h-100"
  >
    <p>{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  name: "ImageNotFound",
  props: {
    errorText: {
      type: String,
      default: "Image Not Available",
    },
  },
};
</script>
<style scoped>
.img-unavailable {
  background-color: #cccccc;
}
</style>
