import Vue from 'vue'
import Vuex from 'vuex'
import themes from "../src/assets/themes"
import 'codemirror/theme/mbo.css'
import "codemirror/theme/base16-dark.css"
import "codemirror/theme/solarized.css"
import "codemirror/theme/material.css"
import "codemirror/theme/monokai.css"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storage: [],
    recentFiles: [],
    preferences:{
      tabSize: 4,
      styleActiveLine: true,
      lineNumbers: true,
      lineWrapping: false,
      line: true,
      mode: 'text/x-markdown',
      theme: themes.solarized,
      viewportMargin: Infinity
    }
  },

  // -----------MUTATIONS--------------
  mutations: {
    // sets state.storage to an instance of localstorage's "files" property.
    updateStorage (state) {
      state.storage = JSON.parse(localStorage.getItem('files'))
    },

    // payload = {file, index}
    // changes the file at index with the new version.
    // is this a good way?idk
    editFile (state, payload) {
      state.storage.splice(payload.index, 1)
      state.storage.unshift(payload.file)
      localStorage.setItem('files', JSON.stringify(state.storage))
    },
    
    //adds new file to storage 
    addFile (state, file) {
      state.storage.push(file)
      localStorage.setItem('files', JSON.stringify(state.storage))
    },

    deleteFile (state, id) {
      var index = state.storage.findIndex(function (el) {
        return el.id === id
      })
      state.storage.splice(index, 1)
      localStorage.setItem('files', JSON.stringify(state.storage))
    }

  },
  // -----------ACTIONS--------------
  actions: {
    //if there is no "files" object,
    //set LocalStorage = state.storage
    updateStorage ({ commit }) {
      if (localStorage.getItem('files') === null) {
        localStorage.setItem('files', JSON.stringify([]))
        commit('updateStorage')
      } else {
        commit('updateStorage')
      }
    },

    save ({ commit }, file) {
      if (this.state.storage.length < 1) {
        commit('addFile', file)
      }
      var index = this.state.storage.findIndex(function (el) {
        return el.id === file.id
      })
      if (index > -1) {
        commit('editFile', { file: file, index: index })
      } else {
        commit('addFile', file)
      }
    }
  },

  getters: {
    getFile: state => id => state.storage.find(function (el) {
      return el.id === id
    })
  }

})
