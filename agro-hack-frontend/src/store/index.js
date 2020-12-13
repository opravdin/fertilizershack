import Vue from 'vue'
import Vuex from 'vuex'
import sellers from './modules/sellers'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sellers,
    products
  }
})
