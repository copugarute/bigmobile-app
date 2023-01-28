import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    equipos: '',
  },
  getters: {
    getEquipos(state){
      return state.equipos
    }
  },
  mutations: {
    SET_EQUIPOS(state, equipos){
      state.equipos = equipos
    }
  },
  actions: {
    async fetchEquipos({commit}){
      try {
        let res = await fetch('/equipos.json')
        if(!res.ok) throw('Error Api')
        let equipos = await res.json()
        console.log(equipos)
        commit('SET_EQUIPOS', equipos)
        
      } catch (error) {
        console.log(error)
      } 
    }
  },
  modules: {
  }
})
