import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    equipos: '',
    query:''
  },
  getters: {
    getEquipos (state) {
      return state.equipos
    },
    equiposFiltrados (state) {
      let equiposFiltrados = state.equipos.filter( equipo => equipo.nombre.toLowerCase().includes(state.filter.query) )
      return equiposFiltrados
    },   
  },
  mutations: {
    SET_EQUIPOS (state, equipos) {
      state.equipos = equipos
    },
    SET_QUERY (state, query) {
      state.query = query 
    }
  },
  actions: {
    async fetchEquipos({commit}){
      try {
        let res = await fetch('https://copugarute.github.io/bigmobile-app/equipos.json')
        if(!res.ok) {
          throw new Error(`Error en la respuesta de la API: ${res.status} - ${res.statusText}`)
        }
        
        let equipos = await res.json()
        console.log(equipos)
        commit('SET_EQUIPOS', equipos)
        
      } catch (error) {
        console.log('Error al obtener equipos:', error)
      } 
    }
  },
  modules: {
  }
})
