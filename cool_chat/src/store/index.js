import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: "",
    homeNavSign: true
  },
  mutations: {
    // 完善信息时存储userId
    sendUserId: (state, value) => {
      state.userId = value
    },

    changeHomeNavSign(state) {
      state.homeNavSign = false;
    },
    updateHomeNavSign(state) {
      state.homeNavSign = true;
    }
  },
  actions: {
    changeHomeNavSign({ commit }) {
      commit("changeHomeNavSign");
    },
    updateHomeNavSign({ commit }) {
      commit("updateHomeNavSign");
    }
  },
  modules: {
  }
})
