<template lang="html">

  <section class="novedades my-5">
    <h1 class="titulo">Novedades</h1>
    <div class="row d-flex my-5 mx-0 justify-content-center">
      <div v-for="novedad in datos" v-bind:key="novedad.id" class="bg-light card m-1 mx-md-5" style="min-width: 200px;max-width: 20vw">
        <div class="card-header ">
          <h5 class="font-weight-bold m-0">{{novedad.nombre}}</h5>
        </div>
        <img class="card-img-top bg-white border-bottom" style="height: 200px; object-fit: cover;" v-bind:src='novedad.imagen'>
        <img class="card-img-bot bg-white border-bottom" v-bind:src='novedad.imagen2'>   
        <div class="card-body d-flex row justify-content-center">
          <h4 class="card-title text-primary font-weight-bold">{{novedad.precio}} €</h4>
          <p class="card-text">{{novedad.descripcion}}</p>
          <a href="" class="btn btn-danger mt-auto">Comprar ahora</a>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">


  import {db} from '../db.js'
  export default  {
    name: 'novedades',
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
      datos:db.collection('ofertas')
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
