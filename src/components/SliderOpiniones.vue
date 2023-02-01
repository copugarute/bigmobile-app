<template>
  <v-carousel
    height="300"
    hide-delimiter-background
    :show-arrows="false"
    cycle
    interval="4000"
    dark
  >
    <v-carousel-transition
      group
    >
    <v-carousel-item
      class="carousel-item"
      v-for="(opinion,index) in opiniones" 
      :key="index"
      transition="true"
    >
     <card-opiniones :opinion="opinion" />
     
    </v-carousel-item>
    </v-carousel-transition>
  </v-carousel>
</template>

<script>
import CardOpiniones from './CardOpiniones.vue'
export default {
  components: { CardOpiniones },
  name:'OpinionesCard',
  props:['opiniones']

}
</script>

<style>
</style>