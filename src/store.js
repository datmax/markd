import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storage: null,
  },
  mutations: {
    getStorage(state){
    },
    pushFile(state, file){
      
    }
  },
  actions: {
    getStorage({commit}){
      commit('getStorage');
    }
  },
    pushFile({commit}, file ){
      commit("pushFile", file)
    }
})
