import Vue from "vue";
import Vuex from "vuex";
import products from "@/assets/objects/products";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    countTotal: 0,
    products: products
  },
  mutations: {
    //Renvoie le résultat du countTotal après calcul
    SET_COUNT: (state, newTotal) => {
      state.countTotal = newTotal;
    },

    // Récupère l'id du product puis modifie son prix et son purchase
    BUY_PRODUCT: (state, { productId }) => {
      state.products.products = state.products.products.map(product => {
        if (product.id === productId) {
          product.purchased = product.purchased + 1;
          state.countTotal -= product.price;
          product.price = 1.22 * product.price;
        }

        return product;
      });
    },
    //Incrémente un nombre de cookie au countTotal
    ADD_COOKIES: (state, { cookies }) => {
      state.countTotal = state.countTotal + cookies;
    },
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
        store.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		}
  },
  actions: {
    incrementCount({ commit }, total) {
      commit("SET_COUNT", total);
    },
    farmProducts({ commit, state }, productId) {
      this.intervalid1 = setInterval(function() {
        var cookieCount = 0;
        for (let product of state.products.products) {
          if (product.name === productId) {
            cookieCount = product.cookiePerSeconds * product.purchased;
          }
        }
        commit("ADD_COOKIES", { cookies: cookieCount });
      }, 10000);
    }
  },
  getters: {
    count(state) {
      return state.countTotal;
    }
  }
});
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
export default store
