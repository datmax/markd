import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storage: null
  },
  mutations: {
    getStorage(state){
      state.storage = window.localStorage;
    }
  },
  actions: {
    getStorage({commit}){
      commit('getStorage');
    }
  }
})
