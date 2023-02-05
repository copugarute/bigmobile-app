<template>
  <v-container fluid>
      <!-- TITULO -->
    <v-row
      justify="center"
      class=""
    >
      <!-- <v-col
        cols="12"
        class="my-5 my-lg-10"
      >
        <h1 
          class="text-h4 text-lg-h3 text-center font-weight-regular my-5 amber--text darken-3"
        >
          Equipos
        </h1>
      </v-col> -->
        <!-- BANNER BUSQUEDA - FILTRO - ORDEN -->
      <v-col
        cols="12"
        class="pa-0"
      >
        <buscador :equipos="equipos"/>
      </v-col>
    </v-row>
    
    
    <!-- CARDS PRODUCTOS -->

  </v-container>
</template>

<script>
import Buscador from '../components/Equipos/Buscador.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
  name:'Equipos',
  components: { Buscador },
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['getEquipos']),
    equipos(){
        return this.getEquipos.productos
      }
  },
  methods:{
    ...mapActions(['fetchEquipos']),
  },
  created(){
    this.fetchEquipos()
  }

}
</script>

<style>

</style>
