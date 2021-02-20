<template>
  <div id="app">
    <cabecera/>
    <carrito/>
    <login/>
    <novedades/>
    <productos/>
    <pie/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import cabecera from './components/cabecera.vue'
import pie from './components/pie.vue'
import novedades from './components/novedades.vue'
import productos from './components/productos.vue'
import carrito from './components/carrito.vue'
import login from './components/login.vue'

export default {
  name: 'App',
  components: {
    cabecera,
    pie,
    novedades,
    productos,
    carrito,
    login
  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
