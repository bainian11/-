import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: "1574165630337",
    homeNavSign: true
  },
  mutations: {
    // 完善信息时存储userId
    sendUserId: (state, value) => {
      state.userId = value
    },

    // getUserId(){
    //   return state.userId;
    // },
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
  },
  getters: {
    // 这里可以监听state的值 直接返回出去 只读取值 如果需要修改值 找mutations  需要return出去
    readMsg(state) {
      return state.userId
    }
  }
})
