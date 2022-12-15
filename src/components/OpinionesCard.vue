<template>
  <v-card
    class="mx-auto my-2 pa-2 text-center"
    max-width="400"
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
</template>

<script>
export default {
  name:'OpinionesCard',
  props:{
    opinion:{
      type:Object,
      required:true
    }
  }

}
</script>

<style>

</style>