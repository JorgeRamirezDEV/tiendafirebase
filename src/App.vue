<template>
  <div id="app">
    <cabecera/>
    <addproductos/>
    <router-view/>
    <novedades/>
    <pie/>
  </div>
</template>

<script>

import cabecera from './components/cabecera.vue'
import novedades from './components/novedades.vue'
import pie from './components/pie.vue'
import addproductos from './components/addproductos.vue'

export default {
  name: 'App',
  components: {
    cabecera,
    pie,
    novedades,
    addproductos
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
