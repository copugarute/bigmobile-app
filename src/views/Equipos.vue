<template>
  <v-container fluid>

      <!-- TITULO -->
    <v-row
      justify="center"
      class=""
    >
      <v-col
        cols="12"
        class="yellow darken-3"
        color=""
      >
        <h1 
          class="text-h4 text-lg-h3 text-center white--text font-weight-regular my-5 "
        >
          Equipos
        </h1>
      </v-col>

        <!-- BANNER BUSQUEDA - FILTRO - ORDEN -->
      <v-col
        cols="12"
        class="pa-0"
      >
        <buscador :equipos="equipos"/>
      </v-col>
    </v-row>

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
