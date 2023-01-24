<template>
  <div>
    <!-- DRAWER -->
    <v-navigation-drawer
        v-model="drawer"
        app
        fixed
        temporary
        overlay-opacity="0"
        :style="`margin-top: ${$vuetify.application.top}px`"
        color="amber darken-3"
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
                    :disabled="currentRoute == route.name"
                    active-class="amber darken-4"
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
    <!-- APP BAR         -->
    <v-app-bar
        app
        color="orange darken-3"
        dark
    >
        <v-toolbar-title
            class="font-weight-black text-title"
        >
        BIGMOBILE
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-toolbar-items
            v-for="route in routes"
            :key="route.name"
            class="d-none d-lg-flex"
        >
            <v-btn
                text
                :disabled="currentRoute == route.name"
                :to="route.path"
                class="p-2"
            >
                {{route.title}}
            </v-btn>
        </v-toolbar-items>

        <v-app-bar-nav-icon
            @click.stop="drawer =!drawer"
            class="d-lg-none d-xl-flex"
        ></v-app-bar-nav-icon>

    </v-app-bar>
     
    
        
  </div>
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            drawer: true,
            group: null,
            routes:[
                { name:'Home', path: '/',title:'Home'},
                { name:'Productos', path: '/productos',title:'Equipos y accesorios'},
                { name:'Planes', path: '/planes', title:'Planes'},
                { name:'Prepago', path: '/prepago', title:'Prepagos'},
                { name:'Oficina', path: '/oficina', title:'Oficina Virtual'},

            ]
        }
    },
    watch:{
        group () {
        this.drawer = false
      },
    },
    computed:{
        currentRoute(){
            return this.$route.name
        }
    }
}
</script>

<style>

</style>