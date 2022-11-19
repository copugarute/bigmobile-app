<template>
  <div>
    <v-navigation-drawer
                v-model="drawer"
                app
                absolute
                :style="`margin-top: ${$vuetify.application.top}px`"
                color="orange lighten-2"
                height="50%"
                width="100%"
            >
                <v-list nav dark>
                    <v-list-item-group
                        v-model="group"
                    >
                        <v-list-item
                            v-for="route in routes"
                            :key="route.name"
                            :to="route.path"
                        >
                            <v-list-item-title
                                class="font-weight-light  text-center text-h6 text-uppercase"
                            >
                                {{route.title}}
                            </v-list-item-title>
                            
                        </v-list-item>
                        
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
    <v-app-bar
        app
        color="amber darken-4"
        dark
    >
        <v-toolbar-title
            class="font-weight-black text-title"
        >
        BIGMOBILE
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon
            @click="drawer =!drawer"
        ></v-app-bar-nav-icon>

        <!-- navigation drawer -->

    </v-app-bar>
     
    
        
  </div>
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            drawer: true,
            routes:[
                { name:'Home', path: '/',title:'Home'},
                { name:'Productos', path: '/productos',title:'Equipos y accesorios'},
                { name:'Planes', path: '/planes', title:'Planes'},
                { name:'Prepago', path: '/prepago', title:'Prepagos'},
                { name:'Oficina', path: '/oficina', title:'Oficina Virtual'},

            ]
        }
    }
}
</script>

<style>

</style>