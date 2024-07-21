<template>
  <div>
    <app-header></app-header>
    <h1>Udaipur</h1>
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "Udaipur",
  middleware: "auth",
  components: { AppHeader },
};
</script>
