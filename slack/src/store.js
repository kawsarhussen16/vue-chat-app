import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentUser: null,
};

const mutations = {
  SET_USER(state, user) {
    state.currentUser = user;
  },
};

const actions = {
  setUser({ commit }, user) {
    if (user) {
      commit("SET_USER", user);
    } else {
      commit("SET_USER", null);
    }
  },
};

const getters = {
  currentUser: (state) => state.currentUser,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
