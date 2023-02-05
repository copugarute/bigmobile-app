import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Checkout from '../views/Checkout.vue'
import Confirm from '../views/Confirm.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
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
    component: Checkout
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipos.vue')
  },
  {
    path: '/planes',
    name: 'Planes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Planes.vue')
  },
  {
    path: '/prepago',
    name: 'Prepago',
    component: () => import(/* webpackChunkName: "about" */ '../views/Prepago.vue')
  },
  {
    path: '/oficina',
    name: 'Oficina',
    component: () => import(/* webpackChunkName: "about" */ '../views/OficinaVirtual.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
