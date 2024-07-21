import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import search from "./modules/search";
import loading from "./modules/loading";
import Vuelidate from "vuelidate";
import VueSocialChat from "vue-social-chat";
import VueSmoothScroll from "vue2-smooth-scroll";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Vuelidate);

Vue.use(Vuex);
Vue.use(VueSocialChat);
Vue.use(VueSmoothScroll);

export default () =>
  new Vuex.Store({
    modules: {
      auth,
      search,
      loading,
    },
  });
