<template>
  <div id="app">
    <cabecera/>
    <productos/>
    <novedades/>
    <pie/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>

import cabecera from './components/cabecera.vue'
import pie from './components/pie.vue'
import novedades from './components/novedades.vue'
import productos from './components/productos.vue'

export default {
  name: 'App',
  components: {
    cabecera,
    pie,
    novedades,
    productos
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

</style>
