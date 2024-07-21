export default function ({ store, redirect }) {
  console.log("guest middleware", !store.isLoading);

  if (store.state.auth.isLoggedIn) {
    return redirect("/");
  }
}
