import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countTotal: 0
  },
  mutations: {
    "SET_COUNT": (state, newTotal) => {
      state.countTotal = newTotal;
    }
  },
  actions: {
    incrementCount({ commit }, total) {
      commit("SET_COUNT", total);
    }
  },
  getters: {
    count(state) {
      return state.countTotal;
    }
  }
});
