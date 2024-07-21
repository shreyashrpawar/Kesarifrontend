export default function ({ store, redirect }) {
  console.log(
    "🚀 ~ file: auth.js ~ line 2 ~ store",
    store.getters["isAuthenticated"]
  );
  // if (process.client && !store.getters["isAuthenticated"])
  // if (!store.getters["isAuthenticated"]) return redirect("/sign-in");
  console.log("store", store.state.loading.isLoading);
  console.log("store", store.state);
  if (!store.state.loading.isLoading && !store.state.auth.isLoggedIn) {
    console.log("auth middleware", store.state.auth.isLoggedIn);

    return redirect("/sign-in");
  }
}
