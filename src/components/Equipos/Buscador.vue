<template>
<v-container>
    <v-app-bar
        elevation="2"
        color="yellow darken-3"
    >
        <v-toolbar
            floating
            max-width="300"
            dense
            rounded
            short
        >
        <v-text-field
            hide-details
            single-line
            placeholder="Buscar..."
            v-model="filtro"
        ></v-text-field>
        <v-btn
            text
            class="ms-5"
            
        >
            <v-icon> mdi-magnify </v-icon>
        </v-btn>

        </v-toolbar>
        
    </v-app-bar>
    <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(equipo,index) in arrayFiltrado"
        :key="index"
    >
       <card-equipos :equipo="equipo"/>
    </v-col>
    
</v-container>
    
</template>

<script>
import CardEquipos from '../home/CardEquipos.vue'
export default {
    name:'Buscador',
    components:{CardEquipos},
    data()
        {
        return{
            searchInput:'',
            arrayFiltrado:'',
        }
    },
    props:['equipos'],
    computed:{
        filtro:{
            get(){
                return this.searchInput
            },
            set(value){
                value = value.toLowerCase()

                this.arrayFiltrado = this.equipos.filter(
                    equipo => equipo.nombre.toLowerCase().indexOf(value) !== -1
                )
                this.texto = value
            }
        },
    },
    created(){
        this.arrayFiltrado = this.equipos
    }
}
</script>

<style>

</style>