import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentUser: null,
  currentChannel: null,
};

const mutations = {
  SET_USER(state, user) {
    state.currentUser = user;
  },
  SET_CURRENT_CHANNEL(state, channel) {
    state.currentChannel = channel;
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
  setCurrentChannel({ commit }, channel) {
    commit("SET_CURRENT_CHANNEL", channel);
  },
};

const getters = {
  currentUser: (state) => state.currentUser,
  currentChannel: (state) => state.currentChannel,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
