import Vue from 'vue'
import VueRouter from 'vue-router'
import Middle from '../views/Middle.vue'
import Firebase from '../db.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/carrito',
    name: 'Carrito',
    meta: {requiresAuth:true},
    component: () => import('../views/Carrito.vue')
  },
  {
    path: '/addproductos',
    name: 'add',
    meta: {requiresAuth:true},
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if(!Firebase.auth.currentUser){
      next('/')
    } else{
      next()
    }
  } else{
    next()
  }
})

export default router
