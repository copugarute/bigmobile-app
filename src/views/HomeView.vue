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
      <planes-home :planes="planes" />
    </v-col>
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
import FormularioHome from '../components/FormularioHome.vue'
import OpinionesCard from '../components/OpinionesCard.vue'
import PlanesHome from '../components/PlanesHome.vue'
import Vitrina from '../components/Vitrina.vue'
  

  export default {
    name: 'Home',
    components: {
        Vitrina,
        OpinionesCard,
        PlanesHome,
        FormularioHome
    },
    data(){
      return{
        dataHome: [],
      }
    },
    computed:{
      opiniones(){
        return this.dataHome.opiniones
      },
      planes(){
        return this.dataHome.planes
      }
    },
    methods:{
      async fetchHomeInfo(){
        try {
          const res = await fetch('/home.json')
          if(!res.ok) throw('Error en Api')
          this.dataHome = await res.json()
          console.log(this.dataHome)
        } catch (error) {
          console.log(error)
        }
      }
    },
    created(){
      this.fetchHomeInfo()
    }
  }
</script>
