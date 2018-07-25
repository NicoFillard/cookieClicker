import Vue from "vue";
import Vuex from "vuex";
import products from "@/assets/objects/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countTotal: 0,
    products: products
  },
  mutations: {
    "SET_COUNT": (state, newTotal) => {
      state.countTotal = newTotal;
    },

    // Récupère l'id du product puis modifie son prix et son purchase
    "BUY_PRODUCT": (state, { productId }) => {
        state.products.products = state.products.products.map(product => {
            if (product.id === productId) {
                product.purchased = product.purchased + 1
                state.countTotal -= product.price
                product.price = 1.22 * product.price
            }

            return product;
        })
      },
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
