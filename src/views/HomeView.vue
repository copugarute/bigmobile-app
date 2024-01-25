<template>
  <v-container 
    fluid
    class=""
  >
<!-- VITRINA -->  
    <v-row 
      justify="center"
      class="mb-6"
    >
      <v-col
        cols="12"
        class="pa-0"
      >
        <vitrina/>
      </v-col>
    </v-row>

<!-- PLANES -->
    <v-row 
      justify="center"
      class="my-8 my-lg-10"
      >

    <!-- TITULO PLANES -->
      <v-col
        cols="12"
        class="my-5 my-lg-10"
      >
        <h1 
          class="text-h4 text-lg-h3 text-center font-weight-regular my-5 amber--text darken-3"
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
    <v-row  
      justify="center"
      class="my-8 my-lg-10"
      >
  
      <!-- TITULO EQUIPOS -->
      <v-col
        cols="12"
        class="my-5 my-lg-10"
      >
        <h1 
          class="text-h4 text-lg-h3 text-center amber--text darken-3 font-weight-regular my-5"
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
        sm="6"
        md="4"
        lg="3"
        class="d-none d-sm-flex"
        v-for="(equipo,index) in equipos"
        :key="index"
      >
          <card-equipos :equipo="equipo"/>
      </v-col>
      <!-- EQUIPOS BOTON-->
      <v-col
        cols="12"
      >
        <v-btn
          class="float-right mt-5 me-5 text-lg-h5"
          x-large
          color="amber darken-3"
          text
          @click="redirectTo()"
        >
          Ver Más
        </v-btn>
      </v-col>
    
    </v-row>


<!-- RESEÑAS -->
    <v-row 
      justify="center"
      class="my-8 my-lg-10"
    >
  
    <!-- TITULO RESEÑAS -->
      <v-col
        cols="12"
        class="my-5 my-lg-10"
      >
        <h1 
          class="text-h4 text-lg-h3 text-center  amber--text darken-3 font-weight-regular mt-10 mb-5"
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
    <v-row 
      justify="center"
      class="my-8 my-lg-10 "
      >
      <v-col
        cols="12"
        class="my-5 my-lg-10"
      >
        <h2
              class="text-h4 text-lg-h3 text-center amber--text darken-3 font-weight-regular mt-10 mb-5"
          >
              Contactanos
      </h2>
      </v-col>
      
      <v-col
        cols="10"
        sm="6"
        class="amber darken-3 rounded-lg"
      >
        <formulario-home />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// IMPORTACIÓN DE COMPONENTES
import FormularioHome from '../components/home/FormularioHome.vue'
import SliderOpiniones from '../components/home/SliderOpiniones.vue'
import SliderPlanes from '../components/home/SliderPlanes.vue'
import Vitrina from '../components/home/Vitrina.vue'
import SliderEquipos from '../components/home/SliderEquipos.vue'
import CardEquipos from '../components/home/CardEquipos.vue'
import CardPlanes from '../components/home/CardPlanes.vue'

// MAPS
import {mapActions, mapGetters} from 'vuex'
import CardOpiniones from '../components/home/CardOpiniones.vue'

  

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
          const res = await fetch('https://copugarute.github.io/bigmobile-app/home.json')
          if(!res.ok) {
            throw new Error(`Error en la respuesta de la API: ${res.status} - ${res.statusText}`)
          }
          this.dataHome = await res.json()
          console.log(this.dataHome)
        } catch (error) {
          console.error('Error al obtener información de inicio:', error);
        }
      },
      redirectTo(){
        this.$router.push('/equipos')
      },
      
      
    },
    created(){
      this.fetchHomeInfo()
      this.fetchEquipos()
    }
  }
</script>
