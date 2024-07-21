<template>
  <div>
    <!-- To fix multiple instance mounting issue need to insart a div around muxt -->
    <loading />
    <div>
      <nuxt />
    </div>
    <div>
      <SocialChat icon :attendants="attendants">
        <p slot="header">Click the attendant to chat on WhatsApp.</p>
        <template v-slot:button>
          <img
            src="@/assets/images/whatsapp.svg"
            alt="icon whatsapp"
            aria-hidden="true"
          />
        </template>
        <small slot="footer">Working hours: 10am to 6pm</small>
      </SocialChat>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "../components/layout/AppFooter.vue";
import Loading from "~/components/ui/Loading.vue";
import { SocialChat } from "vue-social-chat";
export default {
  components: {
    AppFooter,
    Loading,
    SocialChat,
  },
  data: () => ({
    attendants: [
      {
        app: "whatsapp",
        label: "customer support",
        name: "Awayddings",
        number: "919370157830" ,
        avatar: {
          src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
          alt: "awayddings avatar",
        },
      },
      // ...
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.nuxt-link-exact-active {
  text-decoration: none;
  color: #fc3333 !important;
}

.theme-bg-color {
  background-color: #fc3333;
}

.theme-color {
  color: #fc3333;
}

.form-control:focus {
  border-color: #fc3333;
  box-shadow: 0 0 0 0.2rem rgba(252, 51, 51, 0.3);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #303443;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
}

.vsc-popup-button--default {
  background-color: #46c056 !important;
}

.vsc-popup-button:focus,
.vsc-popup-button:hover {
  box-shadow: 0 0 0 3px #fff, 0 0 0 6px #46c056 !important;
}
</style>
