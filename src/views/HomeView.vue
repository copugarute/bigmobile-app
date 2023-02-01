<template>
  <v-container 
    fluid
    class=" amber darken-3"
  >
  <v-row justify="center">
<!-- VITRINA -->
    <v-col
      cols="12"
      class="pa-0">
      <vitrina/>
    </v-col>

<!-- PLANES -->
  <v-col
    cols="12"
  >
    <h1 
      class="text-h4 text-center white--text font-weight-regular my-5"
    >
      Planes Flexibles
    </h1>
  </v-col>
    
    <v-col
      cols="12"
      class="d-sm-none"
    >
      <planes-home :planes="planes" />
    </v-col>

<!-- PLANES md - lg - xl -->
    <v-col
      cols="12"
      sm="4"
      class="d-none d-sm-flex"
      v-for="(plan,index) in planes"
      :key="index" 
    >
      <card-planes :plan="plan" />
    </v-col>
<!-- VITRINA EQUIPOS -->
    <v-col
      cols="12"
      class="pa-0">
      <vitrina-equipos :equipos="equipos"/>
      <v-btn
        class="float-right mt-5 me-5"
        dark
        text
        @click="redirectTo()"
      >
        Ver Más
      </v-btn>
    </v-col>
    <!-- <card-equipos /> -->
<!-- RESEÑA -->
    <v-col
      cols="12"
    >
      <opiniones-card :opiniones="opiniones"/>
    </v-col>
<!-- CONTACTO -->
    <v-col
      cols="12"
    >
      <formulario-home />
    </v-col>
  </v-row>
   
   
   
  </v-container>
</template>

<script>

// IMPORTACIÓN DE COMPONENTES
import FormularioHome from '../components/FormularioHome.vue'
import OpinionesCard from '../components/OpinionesCard.vue'
import PlanesHome from '../components/PlanesHome.vue'
import Vitrina from '../components/Vitrina.vue'
import VitrinaEquipos from '../components/VitrinaEquipos.vue'
// import CardEquipos from '../components/CardEquipos.vue'
import CardPlanes from '../components/CardPlanes.vue'

// MAPS
import {mapActions, mapGetters} from 'vuex'

  

  export default {
    name: 'Home',
    components: {
        Vitrina,
        OpinionesCard,
        PlanesHome,
        FormularioHome,
        VitrinaEquipos,
        // CardEquipos,
        CardPlanes
    },
    data(){
      return{
        dataHome: [],
      }
    },
    computed:{
      ...mapGetters(['getEquipos']),
      opiniones(){
        return this.dataHome.opiniones
      },
      planes(){
        return this.dataHome.planes
      },
      equipos(){
        return this.getEquipos.productos
      }
      
    },
    methods:{
      ...mapActions(['fetchEquipos']),

      async fetchHomeInfo(){
        try {
          const res = await fetch('/home.json')
          if(!res.ok) throw('Error en Api')
          this.dataHome = await res.json()
          console.log(this.dataHome)
        } catch (error) {
          console.log(error)
        }
      },
      redirectTo(){
        this.$router.push('/productos')
      },
      
    },
    created(){
      this.fetchHomeInfo()
      this.fetchEquipos()
    }
  }
</script>
