<template>
  <div id="app">
    <cabecera/>
    <router-view/>
    <novedades/>
    <pie/>
    <notifications group="logout" position="top center"/>
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


<style lang="scss">

@import "./scss/custom-bootstrap";
@import "./scss/_mixins";
@import "./scss/_variables";
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=DotGothic16&family=Open+Sans&family=Permanent+Marker&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-family: $fuenteretro;
  color: color(secundario)
}

</style>
