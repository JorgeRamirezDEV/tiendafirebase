<template lang="html">

  <section class="novedades my-5">
    <h1>Ofertas</h1>
    <div class="row d-flex my-5 mx-0 justify-content-center">
      <div v-for="novedad in datos" v-bind:key="novedad.id" class="bg-light card m-1 mx-md-5" style="min-width: 200px;max-width: 20vw">
        <div class="card-header ">
          <h5 class="font-weight-bold m-0">{{novedad.nombre}}</h5>
        </div>
        <img class="card-img-top bg-white border-bottom" style="height: 200px; object-fit: cover"  v-bind:src='novedad.imagen'>
        <div class="card-body d-flex row justify-content-center">
          <h4 class="card-title text-primary font-weight-bold">{{novedad.precio}} €</h4>
          <p class="card-text">{{novedad.descripcion}}</p>
          <a href="" class="btn btn-danger mt-auto">Oferta </a>
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

<style>
</style>
