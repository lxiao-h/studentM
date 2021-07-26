import Vue from 'vue';
import Vuex from 'vuex';
import cookie from '@/utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: cookie.getUserName(),
  },
  mutations: {
    setUserName(state, username) {
      state.username = username;
      cookie.setCookie(username);
    },
    logout() {
      this.state.username = '';
      cookie.remove();
    },
  },
  actions: {
    setUserName({ commit }, user) {
      commit('setUserName', user);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  modules: {},
});
