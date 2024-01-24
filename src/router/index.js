import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
// import Checkout from '../views/Checkout.vue'
import Confirm from '../views/Confirm.vue'
import Login from '../views/Login.vue'
import Notfound from '../views/Notfound.vue'
import Mantencion from '../views/Mantencion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Notfound',
    component: Notfound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Mantencion
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipos.vue')
  },
  {
    path: '/planes',
    name: 'Planes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mantencion.vue'),
    redirect: '/'
  },
  {
    path: '/prepago',
    name: 'Prepago',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mantencion.vue'),
    redirect: '/'
  },
  {
    path: '/oficina',
    name: 'Oficina',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mantencion.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
