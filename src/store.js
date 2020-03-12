import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentColor: 0,
  },
  getters: {
    currentColor(state) {
      return state.currentColor;
    },
  },
  mutations: {
    setCurrentColor(state, aa) {
      state.currentColor = aa;
    },
  },
});

export default store;
