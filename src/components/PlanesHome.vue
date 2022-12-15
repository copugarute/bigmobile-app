<template>
    
        <v-card
            class="mx-auto my-2 pa-2 text-center rounded-xl"
            max-width="300"
            color="yellow darken-4"
            dark
            elevation="0"
        >
            <v-icon
                x-large
                class="mt-2"
            >{{plan.icono}}
            </v-icon>
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
name:'PlanesHome',
props:{
    plan:{
        type:Object,
        required: true
    }
},

    
}
</script>

<style>


</style>