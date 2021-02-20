import Vue from 'vue'
import VueRouter from 'vue-router'
import Carrito from '../views/Carrito.vue'
import Middle from '../views/Middle.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/Middle',
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
