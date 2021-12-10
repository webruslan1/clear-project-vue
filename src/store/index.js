import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: []
  },
  mutations: {
    setBasket(state, payload){
      state.basket.push(payload)
    },
    deleteBasketItem(state, payload){
      state.basket = state.basket.filter((item, idx) => {
        console.log(idx)
        return payload != idx
      })
    }
  },
  getters: {},
  actions: {
    addNewItem({ commit }, item) {
      commit('setBasket', item);
    },
    deleteItem({commit}, item){
      commit('deleteBasketItem', item)
    }
  },
  plugins: [createPersistedState()],
});
