import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storage: []
  },

  //-----------MUTATIONS--------------
  mutations: {
    //sets state.storage to an instance of localstorage's "files" property.
    getStorage(state){
      state.storage = JSON.parse(localStorage.getItem("files"));
    },

    //payload = {file, index}
    //changes the file at index with the new version.
    //is this a good way?idk
    editFile(state, payload){
      state.storage.splice(payload.index, 1, payload.file );
      localStorage.setItem("files", JSON.stringify(state.storage));
    },

    addFile(state, file){
      state.storage.push(file);
      localStorage.setItem("files", JSON.stringify(state.storage));
    },


    deleteFile(state, id){
      var index = state.storage.findIndex(function(el){
        return el.id === id
      });
      state.storage.splice(index, 1);
      localStorage.setItem("files", JSON.stringify(state.storage));
    }

  },
  //-----------ACTIONS--------------
  actions: {
    getStorage({commit}){
      if(localStorage.getItem("files") === null){
        localStorage.setItem("files", JSON.stringify([]));
        commit('getStorage');
      }
      else{
        commit("getStorage");
      }
    },

    save({commit}, file){
      if(this.state.storage.length < 1){
        commit("addFile", file);
      }
      var index = this.state.storage.findIndex(function(el){
        return el.id === file.id
        });
      if(index > -1){
        commit("editFile", {file: file, id: index});
        }
      else{
          commit("addFile", file);
        }
      },
      }


})
