<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="orange darken-3 text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
          dark
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>BigMobile</strong>
      </v-card-text>
    </v-card>
    </v-footer>

    
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            icons: [
                'mdi-home',
                'mdi-email',
                'mdi-facebook',
                'mdi-twitter',
            ],
            
        }
    },

}
</script>

<style>

</style>