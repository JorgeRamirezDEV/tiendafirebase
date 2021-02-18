<template>
  <div id="app">
    <cabecera/>
    <novedades/>
    <productos/>
    <pie/>
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
  },
  create() {
        window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
    onWindowLoad() {
            console.log("window load event");
    }

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
