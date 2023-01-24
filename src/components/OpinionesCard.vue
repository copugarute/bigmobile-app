<template>
  <v-carousel
    height="300"
    hide-delimiter-background
    :show-arrows="false"
    cycle
    interval="4000"
    dark
  >
    <h1 
      class="text-center text-h4 white--text font-weight-regular mt-10 mb-5"
    >
      Que dicen de Nosotros
    </h1>
    <v-carousel-transition
      group
    >
    <v-carousel-item
      class="carousel-item"
      v-for="(opinion,index) in opiniones" 
      :key="index"
      transition="true"
    >
      <v-card
        class="mx-auto my-2 pa-2 text-center"
        max-width="400"
        max-height="150"
        color=""
        light
        shaped
        
      >
        <v-row class="mx-5">
          <v-col
            cols="3"
            align-self="center"
          >
            <v-avatar
              color="yellow darken-3"
              size="60"
            >
              <span class="white--text text-h5">{{opinion.iniciales}}</span>
            </v-avatar>
          </v-col>
          <v-col
            cols="9"
            class="text-center"
          >
            <p class="ma-0 pt-2 text-h6 yellow--text text--darken-3"> {{opinion.nombre}} </p>
            <p class="text-subtitle-1 pa-2"> "{{opinion.texto}}" </p>
          </v-col>
        </v-row>
        
      </v-card>
    </v-carousel-item>
    </v-carousel-transition>
  </v-carousel>
</template>

<script>
export default {
  name:'OpinionesCard',
  props:{
    opiniones:{
      type:Array,
      required:true
    }
  }

}
</script>

<style>
</style>