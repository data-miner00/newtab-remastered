import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    avatarUrl: null,
    mailUrl: null,
    newsUrl: null,
    mapUrl: null,
    bgUrl: null,
    clockMode: false,
    colonMode: false,
    place: null,
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
    setAvatarUrl(state, payload) {
      state.avatarUrl = payload;
    },
    setMailUrl(state, payload) {
      state.mailUrl = payload;
    },
    setNewsUrl(state, payload) {
      state.newsUrl = payload;
    },
    setMapUrl(state, payload) {
      state.mapUrl = payload;
    },
    setBgUrl(state, payload) {
      state.bgUrl = payload;
    },
    setClockMode(state, payload) {
      state.clockMode = payload;
    },
    setColonMode(state, payload) {
      state.colonMode = payload;
    },
    setPlace(state, payload) {
      state.place = payload;
    },
  },
  // TODO: Add actions to remove and reset
  actions: {
    clearState({ commit, state }) {
      commit("setUsername", null);
      commit("setAvatarUrl", null);
      commit("setMailUrl", null);
      commit("setNewsUrl", null);
      commit("setMapUrl", null);
      commit("setBgUrl", null);
      commit("setClockMode", false);
      commit("setColonMode", false);
      commit("setPlace", null);
    },
  },
  modules: {},
});
