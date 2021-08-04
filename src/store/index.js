import Vue from 'vue';
import Vuex from 'vuex';
import cookie from '@/utils/cookie';
import studentApi from '@/api/student';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: cookie.getUserName(),
    size: 3,
    page: 1,
    total: 1, // Math.ceil(getTotalPage() / this.size)
    student: [],
  },
  mutations: {
    async setStu(state) {
      const s = await studentApi.getByPage(`page=${state.page}&size=${state.size}`);
      state.student = s.data.findByPage;
      // console.log(s.data.cont);
      // state.total = Math.ceil(s.data.cont / state.size);
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotal(state, total) {
      state.total = total;
    },
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
    setStu({ commit }, student) {
      commit('setStu', student);
    },
    setPage({ commit }, page) {
      commit('setPage', page);
      commit('setStu');
    },
    setTotal({ commit }, total) {
      commit('setTotal', total);
    },
    setUserName({ commit }, user) {
      commit('setUserName', user);
    },
    logout({ commit }) {
      commit('logout');
    },

  },
  modules: {},
});
