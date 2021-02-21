<template>
  <div id="app">
    <cabecera/>
    <router-view/>
    <novedades/>
    <pie/>
  </div>
</template>

<script>

import cabecera from './components/cabecera.vue'
import novedades from './components/novedades.vue'
import pie from './components/pie.vue'

export default {
  name: 'App',
  components: {
    cabecera,
    pie,
    novedades
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
