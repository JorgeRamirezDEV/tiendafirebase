<template>

  <section class="productos my-5">
    <h1>Productos</h1>
    <div class="row my-5 mx-0 justify-content-center">
      <div v-for="consola in datos" v-bind:key="consola.id" class="bg-light card mx-1 my-1 mx-md-5" style="min-width: 200px;max-width: 20vw">
        <div class="card-header ">
          <h5 class="font-weight-bold m-0">{{consola.nombre}}</h5>
        </div>
        <img class="card-img-top bg-white border-bottom" style="height: 200px; object-fit: cover;" v-bind:src='consola.imagen'>
        <img class="card-img-bot bg-white border-bottom" v-bind:src='consola.imagen2'>
        <div class="card-body d-flex row justify-content-center">
          <h4 class="card-title text-primary font-weight-bold">{{consola.precio}} €</h4>
          <p class="card-text">{{consola.descripcion}}</p>
          <a href="" class="btn btn-primary mt-auto">Añadir a la cesta </a>
        </div>
      </div>
    </div>
    

  </section>

</template>

<script lang="js">


  import {db} from '../db.js'
  export default  {
    name: 'productos',
    props: [],
    mounted () {

    },
    data () {
      return {
        datos:[]

      }
    },
    methods: {

    },
    computed: {

    },

    firestore: {
      datos:db.collection('consolas')
    }
}


</script>

<style scoped lang="scss">

.card-img-top {
  top: 49px; 
  position: absolute;
  z-index: 2;
}

.card-img-bot {
  height: 200px;
  object-fit: cover;
  opacity: 1;
  top: 49px; 
  z-index: 1;
  
}

.card:hover .card-img-top {
        opacity:0;
        transition:1s;
        
}


</style>
