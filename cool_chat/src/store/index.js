import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeNavSign: true
  },
  mutations: {
    changeHomeNavSign(state){
      state.homeNavSign = false;
    },
    updateHomeNavSign(state){
      state.homeNavSign = true;
    }
  },
  actions: {
    changeHomeNavSign({commit}){
      commit("changeHomeNavSign");
    },
    updateHomeNavSign({commit}){
      commit("updateHomeNavSign");
    }
  },
  modules: {
  }
})
