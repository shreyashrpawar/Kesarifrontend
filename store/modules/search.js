const state = () => ({
  searchData: {
    guests: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
  },
});

const getters = {
  getDestination: (state) => state.searchData.destination,
  getStartDate: (state) => state.searchData.startDate,
  getEndDate: (state) => state.searchData.endDate,
  getGuests: (state) => state.searchData.guests,
  getBudget: (state) => state.searchData.budget,
};

const mutations = {
  setSearchData(state, searchData) {
    state.searchData.destination = searchData.locationId;
    state.searchData.startDate = searchData.startDate;
    state.searchData.endDate = searchData.endDate;
    state.searchData.guests = searchData.guests;
    state.searchData.budget = searchData.budget;
  },
};

const actions = {
  SET_SEARCH_DATA({ commit, dispatch }, data) {
    dispatch("toggleLoading", true, { root: true });
    commit("setSearchData", data);
    dispatch("toggleLoading", false, { root: true });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
