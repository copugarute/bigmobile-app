<template>
  <v-container 
    fluid
    class="amber darken-3"
  >
<!-- VITRINA -->  
    <v-row justify="center">
      <v-col
        cols="12"
        class="pa-0"
      >
        <vitrina/>
      </v-col>
    </v-row>

<!-- PLANES -->
    <v-row justify="center">

    <!-- TITULO PLANES -->
      <v-col
        cols="12"
      >
        <h1 
          class="text-h4 text-center white--text font-weight-regular my-5"
        >
          Planes Flexibles
        </h1>
      </v-col>

<!-- PLANES xs -->
      <v-col
        cols="12"
        class="d-sm-none"
      >
        <SliderPlanes :planes="planes"/>
      </v-col>

<!-- PLANES sm - md - lg - xl -->
      <v-col
        cols="12"
        sm="4"
        class="d-none d-sm-flex"
        v-for="(plan,index) in planes"
        :key="index" 
      >
        <card-planes :plan="plan" />
      </v-col>
    </v-row>

<!-- EQUIPOS -->
    <v-row justify="center">
  
      <!-- TITULO EQUIPOS -->
      <v-col
        cols="12"
      >
        <h1 
          class="text-h4 text-center white--text font-weight-regular my-5"
        >
          Renueva tu equipo
        </h1>
      </v-col>

<!-- EQUIPOS xs-->
      <v-col
        cols="12"
        class="pa-0 d-sm-none"
      >
        <SliderEquipos :equipos="equipos" />
      </v-col>

<!-- EQUIPOS sm - md - lg - xl-->
      <v-col
        cols="12"
        sm="4"
        class="d-none d-sm-flex"
        v-for="(equipo,index) in equipos"
        :key="index"
      >
        <card-equipos :equipo="equipo"/>
      </v-col>
      <!-- EQUIPOS BOTON-->
      <v-col>
        <v-btn
          class="float-right mt-5 me-5"
          dark
          text
          @click="redirectTo()"
        >
          Ver Más
        </v-btn>
      </v-col>
    
    </v-row>


<!-- RESEÑAS -->
    <v-row justify="center">
  
    <!-- TITULO RESEÑAS -->
      <v-col
        cols="12"
      >
        <h1 
          class="text-center text-h4 white--text font-weight-regular mt-10 mb-5"
        >
          Que dicen de Nosotros
        </h1>
      </v-col>
<!-- RESEÑA xs-->      
      <v-col
        cols="12"
        class="d-sm-none"
      >
        <SliderOpiniones :opiniones="opiniones"/>
      </v-col>

<!-- RESEÑAS sm - md - lg - xl-->
      <v-col
        cols="12"
        sm="4"
        class="d-none d-sm-flex"
        v-for="(opinion,index) in opiniones"
        :key="index"
      >
        <card-opiniones :opinion="opinion" />
      </v-col>
    </v-row>

<!-- CONTACTO -->
    <v-row justify="center">
      <h2
              class="text-h4 text-center white--text font-weight-regular mt-10 mb-5"
          >
              Contactanos
      </h2>
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
import SliderOpiniones from '../components/SliderOpiniones.vue'
import SliderPlanes from '../components/SliderPlanes.vue'
import Vitrina from '../components/Vitrina.vue'
import SliderEquipos from '../components/SliderEquipos.vue'
import CardEquipos from '../components/CardEquipos.vue'
import CardPlanes from '../components/CardPlanes.vue'

// MAPS
import {mapActions, mapGetters} from 'vuex'
import CardOpiniones from '../components/CardOpiniones.vue'

  

  export default {
    name: 'Home',
    components: {
        Vitrina,
        SliderOpiniones,
        SliderPlanes,
        FormularioHome,
        SliderEquipos,
        CardEquipos,
        CardPlanes,
        CardOpiniones
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
      
      
    },
    created(){
      this.fetchHomeInfo()
      this.fetchEquipos()
    }
  }
</script>
