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
                v-for="(plan,index) in planes" 
                :key="index"
            >
            
                <card-planes :plan="plan"/>
                
            </v-carousel-item>
        </v-carousel-transition>
            
                
        </v-carousel>
            
    
</template>

<script>
import CardPlanes from './CardPlanes.vue'
export default {

name:'SliderPlanes',
components: { CardPlanes },
props:['planes'], 
}
</script>

<style>

</style>