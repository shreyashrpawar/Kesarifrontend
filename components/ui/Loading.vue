<template>
  <div
    v-if="isLoading !== false"
    class="loading z-50 fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-50 flex justify-center items-center"
  >
    <!-- <h1>{{ isLoading }}</h1> -->
    <div class="loadingio-spinner-ellipsis-wsclip50o6q z-50">
      <div class="ldio-zejxqo2x1aq">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    console.log("computed loading", this.isLoading);
  },
  computed: {
    isLoading() {
      if (
        this.$store.state.loading.isLoading ||
        this.$store.state.loading.isLoading === undefined
      )
        return true;
      // else return true;
      return this.$store.state.loading.isLoading;
    },
  },
});
</script>

<style scoped>
.loading {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-color: rgba(255, 255, 255, 0.623);
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes ldio-zejxqo2x1aq {
  0% {
    transform: translate(12px, 80px) scale(0);
  }
  25% {
    transform: translate(12px, 80px) scale(0);
  }
  50% {
    transform: translate(12px, 80px) scale(1);
  }
  75% {
    transform: translate(80px, 80px) scale(1);
  }
  100% {
    transform: translate(148px, 80px) scale(1);
  }
}
@keyframes ldio-zejxqo2x1aq-r {
  0% {
    transform: translate(148px, 80px) scale(1);
  }
  100% {
    transform: translate(148px, 80px) scale(0);
  }
}
@keyframes ldio-zejxqo2x1aq-c {
  0% {
    background: #fc4c4c;
  }
  25% {
    background: #10142e;
  }
  50% {
    background: #b95757;
  }
  75% {
    background: #303443;
  }
  100% {
    background: #f35f5f;
  }
}
.ldio-zejxqo2x1aq div {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: translate(80px, 80px) scale(1);
  background: #fc4c4c;
  animation: ldio-zejxqo2x1aq 1s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-zejxqo2x1aq div:nth-child(1) {
  background: #10142e;
  transform: translate(148px, 80px) scale(1);
  animation: ldio-zejxqo2x1aq-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1),
    ldio-zejxqo2x1aq-c 1s infinite step-start;
}
.ldio-zejxqo2x1aq div:nth-child(2) {
  animation-delay: -0.25s;
  background: #b95757;
}
.ldio-zejxqo2x1aq div:nth-child(3) {
  animation-delay: -0.5s;
  background: #303443;
}
.ldio-zejxqo2x1aq div:nth-child(4) {
  animation-delay: -0.75s;
  background: #f35f5f;
}
.ldio-zejxqo2x1aq div:nth-child(5) {
  animation-delay: -1s;
  background: #303443;
}
.loadingio-spinner-ellipsis-wsclip50o6q {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.ldio-zejxqo2x1aq {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-zejxqo2x1aq div {
  box-sizing: content-box;
}
</style>
