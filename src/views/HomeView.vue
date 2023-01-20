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
    <h1 
      class="text-h4 white--text font-weight-regular my-5"
    >
      Planes Flexibles
    </h1>
<!-- PLANES -->
    <!-- <v-col
      v-for="(plan,index) in planes" 
      :key="index"
      cols="12"
    >
      
      <planes-home :plan="plan" />
    </v-col> -->
    <v-col
      cols="12"
    >
      <planes-home :planes="planes" />
    </v-col>
  <!-- RESEÑA -->
    <h1 
      class="text-h4 white--text font-weight-regular mt-10 mb-5"
    >
      Que dicen de Nosotros
    </h1>

    <v-col
      v-for="(opinion,index) in opiniones"
      :key="index"
      cols="12"
    >
      <opiniones-card :opinion="opinion"/>
    </v-col>
  </v-row>
   
   
   
  </v-container>
</template>

<script>
import OpinionesCard from '../components/OpinionesCard.vue'
import PlanesHome from '../components/PlanesHome.vue'
import Vitrina from '../components/Vitrina.vue'
  

  export default {
    name: 'Home',
    components: {
        Vitrina,
        OpinionesCard,
        PlanesHome
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
