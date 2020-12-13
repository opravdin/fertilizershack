import API from "../../api/products";
import _ from "lodash";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  selectedId: null,
});

// getters
const getters = {
  bySeller: (state) => {
    return (id) => {
      return _.filter(state.items, { seller_id: id });
    };
  },
};

// actions
const actions = {
  async get(state) {
    let resp = await API.get();
    console.log(resp);
    state.commit("updateSellers", resp.data.products);
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
