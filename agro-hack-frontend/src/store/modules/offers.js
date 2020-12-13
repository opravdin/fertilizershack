import API from "../../api/sellers";
// import _ from "lodash";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  selectedId: null,
});

// getters
const getters = {
  //   vacancy: (state) => {
  //     return (id) => {
  //       return _.find(state.items, { id: id });
  //     };
  //   },
  //   hasUnprocessed: (state) => {
  //     return state.items.filter((item) => item.unprocessed_count > 0);
  //   },
  //   services: (state) => {
  //     return _.uniq(state.items.map((item) => item.department));
  //   },
};

// actions
const actions = {
  async get(state) {
    let resp = await API.get();
    console.log(resp);
    state.commit("updateSellers", resp.data.sellers);
  },
  async select(state, params) {
    state.commit("updateSelection", params.id);
  },
};

// mutations
const mutations = {
  updateSellers(state, data) {
    state.items = data;
  },
  updateSelection(state, data) {
    state.selectedId = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
