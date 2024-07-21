const state = () => {
  return {
    isLoading: true,
  };
};

const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
};

const actions = {
  toggleLoading({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
