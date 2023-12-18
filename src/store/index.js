import Vue from 'vue';
import Vuex from 'vuex';
import AxiosService from '../utils/api';

Vue.config.devtools = true;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessions: [],
  },
  getters: {
    sessions: (state) => state.sessions,
  },
  mutations: {
    getAllSessions(state, sessions) {
      state.sessions = sessions;
    },
  },
  actions: {
    getAllSessions({ commit }) {
      AxiosService.getSessions('').then((res) => {
        commit('getAllSessions', res.data);
      });
    },
  },
});
