<template>
  <v-carousel
    class=""
    hide-delimiter-background
    :show-arrows="false"
    cycle
    interval="4000"
    dark
    height="730"
  >
    <h1 
      class="text-center text-h4 white--text font-weight-regular mt-10 mb-10"
    >
      Equipos
    </h1>
    
    <v-carousel-transition
      group
    >
      <v-carousel-item
        class="carousel-item"
        transition="true"
        v-for="(equipo,index) in equipos" 
        :key="index"
        
      >
        <v-card
          class="mx-auto rounded-lg"
          max-width="344"
          max-height="600"
          elevation="2"
          outlined
        >  
          <v-card-title
            dark
            class="text-h5 font-weight-medium amber--text text--darken-3"
          >
            {{equipo.nombre}}
          </v-card-title>  
          <v-divider></v-divider>
          <v-img
            class=""
            max-height="400"
            :src="equipo.imagen"
          ></v-img>
          <v-divider></v-divider>
          <v-card-subtitle
            class="text-subtitle-1 font-weight-light ms-5"
          >
            Antes: ${{Number(equipo.precio_normal).toLocaleString('es-cl')}}
            <span  
           class="text-subtitle-1 font-weight-light orange--text text--darken-3 ms-5"
           > Ahora: ${{Number(equipo.precio_promo).toLocaleString('es-cl')}} </span>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange darken-3"
              dark
              block
            >
              Más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel-transition>
  </v-carousel>
</template>

<script>

export default {
    name:'Vitrina-equipos',
    data(){
        return{

        }
    },
    props:['equipos'],

    methods:{
        
    },
    created(){
        
    }
}
</script>

<style>

</style>