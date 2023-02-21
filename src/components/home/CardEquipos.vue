<template>
  <v-hover
    v-slot="{ hover }"
    open-delay="100"
  >
    <v-card
      class="mx-auto rounded-lg"
      max-width="300"
      max-height="600"
      :elevation="hover ? 16 : 2"
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
        class="text-subtitle-1 font-weight-light ms-3"
      >
        Antes: ${{Number(equipo.precio_normal).toLocaleString('es-cl')}}
        <span  
        class="text-subtitle-1 font-weight-light orange--text text--darken-3 ms-3"
        > Ahora: ${{Number(equipo.precio_promo).toLocaleString('es-cl')}} </span>
      </v-card-subtitle>

  <!-- BOTON CARD -->
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
  </v-hover>
</template>

<script>
export default {
  name:'CardEquipos',
  props:['equipo'],
}
</script>

<style>

</style>