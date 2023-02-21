<template>
    <v-container fluid class="">
        <v-row>
            <v-col
                cols="12"
            >
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
                        v-model="searchInput"
                    ></v-text-field>
                    <v-btn
                        text
                        class="ms-5"
                        
                    >
                        <v-icon> mdi-magnify </v-icon>
                    </v-btn>
                    </v-toolbar>
        
                </v-app-bar>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="(equipo,index) in filteredItems"
                :key="index"
            >
            <card-equipos :equipo="equipo"/>
            </v-col>
        </v-row>    
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
        }
    },
    props:['equipos'],
    
    computed:{
        filteredItems(){
            if(this.equipos){
              return this.equipos.filter(equipo => equipo.nombre.toLowerCase().includes(this.searchInput.toLowerCase()))  
            }else{
                return this.equipos
            }
            
        }
        
    },
    
}
</script>

<style>

</style>