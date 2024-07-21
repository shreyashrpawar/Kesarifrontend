const state = () => ({
  isLoggedIn: false,
  username: "",
  token: "",
  email: "",
  phone: "",
});

const getters = {
  isAuthenticated: (state) => state.isLoggedIn,
  getName: (state) => state.username,
  getToken: (state) => state.token,
  getEmail: (state) => state.email,
  getPhone: (state) => state.phone,
};

const actions = {
  async LogOut({ commit, dispatch }) {
    dispatch("loading/toggleLoading", true);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    let user = null;
    commit("logout", user);
    dispatch("loading/toggleLoading", false);
  },

  LogIn({ commit, dispatch }, user) {
    dispatch("toggleLoading", true, { root: true });
    console.log(user);

    return new Promise((resolve, reject) => {
      this.$axios
        .post("api/v1/login", user)
        .then(async (resp) => {
          console.log(resp.data);
          if (resp) {
            await commit("setUser", resp.data);
            console.log(resp);
            resolve(resp);
          } else {
            console.log("resp");
            console.log(resp);
            reject(resp);
          }
          console.log("isLoading is toggled to false by Login action");
          dispatch("toggleLoading", false, { root: true });
        })
        .catch((err) => {
          reject(err);
          console.log("isLoading is toggled to false by Login action");

          dispatch("toggleLoading", false, { root: true });
        });
    });
  },
  ForgotPassword({ commit }, email) {
    console.log("🚀 ~ file: auth.js ~ line 50 ~ ForgotPassword ~ email", email);
    return new Promise((resolve, reject) => {
      this.$axios
        .post("sendForgetpasswordLink", email)
        .then(async (resp) => {
          console.log(resp.data);
          if (resp) {
            console.log(resp);
            resolve(resp);
          } else {
            console.log("resp");
            console.log(resp);
            reject(resp);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  ResetPassword({ commit }, data) {
    console.log("🚀 ~ file: auth.js ~ line 71 ~ ForgotPassword ~ data", data);
    return new Promise((resolve, reject) => {
      this.$axios
        .post("submitResetPassword", data)
        .then(async (resp) => {
          console.log(resp.data);
          if (resp) {
            console.log(resp);
            resolve(resp);
          } else {
            console.log("resp");
            console.log(resp);
            reject(resp);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const mutations = {
  setUser(state, userinfo) {
    state.username = userinfo.data.name;
    state.email = userinfo.data.email;
    state.phone = userinfo.data.phone;
    state.token = userinfo.token;
    state.isLoggedIn = true;
  },

  logout(state) {
    state.username = null;
    state.token = null;
    state.email = null;
    state.phone = null;
    state.isLoggedIn = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
