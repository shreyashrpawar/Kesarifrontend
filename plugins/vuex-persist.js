import VuexPersistence from "vuex-persist";
// access nuxt instance from here
export default ({ store, app, route }) => {
  window.onNuxtReady(() => {
    // recover saved data when refreshing
    new VuexPersistence({
      key: "vuex",
      storage: window.localStorage,
    }).plugin(store);
    store.dispatch("toggleLoading", true);

    // acts like middleware when refreshing
    const path = route.path.toLowerCase();
    console.log("🚀 ~ file: vuex-persist.js ~ line 14 ~ window.onNuxtReady ~ path", path.indexOf("/blog") !== -1)
    if (path.indexOf("/blog") !== -1) {
      app.router.push(path);
      store.dispatch("toggleLoading", false);
      return;
    }

    if (store.state.auth.isLoggedIn) {
      if (
        [
          "/",
          "/sign-in",
          "/sign-in/",
          "/forgot-password",
          "/forgot-password/",
          "/register",
          "/register/",
          "/reset-password",
          "/reset-password/",
          "/thanks/",
          "/preview/",
        ].includes(path)
      )
        app.router.push("/");
    } else {
      if (
        ![
          "/",
          "/sign-in",
          "/sign-in/",
          "/forgot-password",
          "/forgot-password/",
          "/register",
          "/register/",
          "/reset-password",
          "/reset-password/",
          "/booking-goa/",
          "/booking-goa/thank-you",
          "/booking-goa",
          "/booking-jaipur/",
          "/booking-jaipur/thank-you",
          "/booking-jaipur",
          "/thanks/",
          "/preview/",
          "/event",
          "/terms-and-conditions",
          "/refund-policy"

        ].includes(path)
      )
        app.router.push("/sign-in");
      //  store.dispatch("loading/toggleLoading", false);
    }
    store.dispatch("toggleLoading", false);
  });
};
