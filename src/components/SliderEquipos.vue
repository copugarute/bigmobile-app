<template>
  <v-carousel
    class=""
    hide-delimiter-background
    :show-arrows="false"
    cycle
    interval="4000"
    dark
    height="600"
  > 
    <v-carousel-transition
      group
    >
      <v-carousel-item
        class="carousel-item"
        transition="true"
        v-for="(equipo,index) in equipos" 
        :key="index"
        
      >
      <card-equipos :equipo="equipo" />

      </v-carousel-item>
    </v-carousel-transition>
  </v-carousel>
</template>

<script>
import CardEquipos from './CardEquipos.vue'

export default {
  components: { CardEquipos },
    name:'SliderEquipos',
    props:['equipos'],
}
</script>

<style>

</style>