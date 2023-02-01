<template>
    
    <v-card
        class="mx-auto my-2 pa-2 text-center rounded-xl"
        max-width="300"
        color="yellow darken-4"
        dark
        elevation="0"
    >
<!-- ICONO -->
        <v-icon
            x-large
            class="mt-2"
        >{{plan.icono}}
        </v-icon>
<!-- TEXTO         -->
        <h2 
            class="text-h5 pa-2"
        >
            {{plan.titulo}}
        </h2>
        <v-card-subtitle
            class="pa-2"
        >
            {{plan.texto}}
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    name:'Card-planes',
    data(){
        return{

        }
    },
    props:['plan']
}
</script>

<style>

</style>