import Vue from 'vue'
import VueRouter from 'vue-router'
import Middle from '../views/Middle.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/Carrito.vue')
  },
  {
    path: '/addproductos',
    name: 'add',
    component: () => import('../views/add.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Middle',
    component: Middle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
