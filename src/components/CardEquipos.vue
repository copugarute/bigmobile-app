<template>
  <v-card
    class="mx-auto rounded-lg"
    max-width="344"
    max-height="600"
    elevation="2"
    outlined
  >  
<!-- TITULO CARD -->
    <v-card-title
      dark
      class="text-h5 font-weight-medium amber--text text--darken-3"
    >
      {{equipo.nombre}}
    </v-card-title>

    <v-divider></v-divider>

<!-- IMAGEN CARD -->
    <v-img
      class=""
      max-height="400"
      :src="equipo.imagen"
    ></v-img>

    <v-divider></v-divider>

<!-- PRECIO CARD -->
    <v-card-subtitle
      class="text-subtitle-1 font-weight-light ms-5"
    >
      Antes: ${{Number(equipo.precio_normal).toLocaleString('es-cl')}}
      <span  
      class="text-subtitle-1 font-weight-light orange--text text--darken-3 ms-5"
      > Ahora: ${{Number(equipo.precio_promo).toLocaleString('es-cl')}} </span>
    </v-card-subtitle>

<!-- BOTON CARD -->
    <v-card-actions>
      <v-btn
        color="orange darken-3"
        dark
        block
        @click="redirectTo()"
      >
        Más
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name:'CardEquipos',
  props:['equipo'],
  methods:{
    redirectTo(){
        this.$router.push('/productos')
      },
  },
}
</script>

<style>

</style>