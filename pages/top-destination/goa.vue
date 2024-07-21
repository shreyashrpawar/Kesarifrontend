<template>
  <div>
    <app-header></app-header>
    <h1>Goa</h1>
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  middleware: "auth",
  components: { AppHeader },
};
</script>
