<template>

  <section class="productos my-5">
    <h1>Productos</h1>
    <div class="row my-5">
      <div v-for="consola in datos" v-bind:key="consola.id" class="card mx-5" style="width: 200px">
        <img class="card-img-top" v-bind:src='consola.imagen'>
        <div class="card-body">
          <h4 class="card-title">{{consola.nombre}}</h4>
          <p>{{consola.descripcion}}</p>
        </div>
      </div>
    </div>

  </section>

</template>

<script lang="js">


  import {db} from '../db'
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

<style>
  .productos {

  }
</style>
