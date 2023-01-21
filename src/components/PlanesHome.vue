<template>
        <v-carousel
            height="300"
            hide-delimiter-background
            dark
        >
        <h1 
            class="text-h4 text-center white--text font-weight-regular my-5"
        >
            Planes Flexibles
        </h1>
            <v-carousel-item
                v-for="(plan,index) in planes" 
                :key="index"
            >
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
            </v-carousel-item>
                
        </v-carousel>
            
    
</template>

<script>
export default {
name:'PlanesHome',
props:{
    planes:{
        type:Array,
        required: true
    }
},

    
}
</script>

<style>


</style>