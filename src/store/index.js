import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hobby:[]
  },
  mutations: {
    addhobby(state,obj){
      state.hobby.push(obj);
    },
    addhobby2(state,obj){
      state.hobby.push(obj);
    },
  },
  actions: {
  },
  modules: {
  }
})
