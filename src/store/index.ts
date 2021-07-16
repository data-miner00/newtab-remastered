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
  },
  actions: {},
  modules: {},
});
