<template lang="html">

  <section class="anadirproducto">
    <div class="shadow p-3 m-5 bg-white rounded mx-auto border-primary border-bottom" style="max-width: 1000px">
        <h1 class="mb-5"> Subir producto </h1>
        <form>
          <div class="form-group mb-5">
            <label>Nombre del producto</label>
            <input type="text" class="form-control mx-auto" style="max-width: 500px">
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked>
            <label class="form-check-label">
              Precio normal
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" value="option2">
            <label class="form-check-label">
              Oferta
            </label>
          </div>
          <div class="form-inline mb-5">
            <input type="text" class="form-control mx-auto text-right" style="max-width: 80px" placeholder="€">
          </div>
          <div class="form-group border-top pt-4 mb-5 ">
            <label>Stock</label>
            <input type="number" class="form-control mx-auto" style="max-width: 200px">
          </div>
          <div class="form-group border-top pt-4 mb-5 ">
            <label>Foto</label>
            <input type="file" class="form-control-file mx-auto" style="max-width: 400px">
          </div>
          <div class="form-group border-top  py-5">
            <label>Descripción</label>
            <textarea class="form-control mx-auto" rows="3" style="max-width: 700px"></textarea>
          </div>
        </form>
    </div>
    <div class="shadow p-3 m-5 bg-white rounded mx-auto border-primary border-bottom" style="max-width: 1000px">
      <h1 class="my-3"> Editar productos </h1>
      <h2> Sección de Ofertas </h2>
    <div class="row my-5 pb-5 mx-0 justify-content-center border-bottom">
      <div class="shadow-sm p-3 m-2 bg-white rounded border" v-for="novedad in datos" v-bind:key="novedad.id">
          <div>   
            <h2 class="mt-0">{{novedad.nombre}}</h2>
          <div class="my-3">
            <h5> Precio </h5> 
            <input type="text" v-bind:value='novedad.precio'>
            <a class="btn btn-success mx-2 p-1">Actualizar</a>
          </div>
          <div class="my-3">
            <h5> Stock </h5> 
            <input type="text" v-bind:value='novedad.stock'>
            <a class="btn btn-success mx-2 p-1">Actualizar</a>
          </div>
          <div class="my-3">
            <a class="btn btn-danger mx-2 p-1">Eliminar</a>
          </div>
        </div>
      </div>
    </div>
    <h2> Sección de Productos </h2>
    <div class="row my-5 mx-0 justify-content-center">
      <div class="shadow-sm p-3 m-2 bg-white rounded border" v-for="consola in datos2" v-bind:key="consola.id">
          <div>   
            <h2 class="mt-0">{{consola.nombre}}</h2>
          <div class="my-3">
            <h5> Precio </h5> 
            <input type="text" v-bind:value='consola.precio'>
            <a class="btn btn-success mx-2 p-1">Actualizar</a>
          </div>
          <div class="my-3">
            <h5> Stock </h5> 
            <input type="text" v-bind:value='consola.stock'>
            <a class="btn btn-success mx-2 p-1">Actualizar</a>
          </div>
          <div class="my-3">
            <a class="btn btn-danger mx-2 p-1">Eliminar</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

</template>

<script lang="js">

  import {db} from '../db.js'
  export default  {
    name: 'anadirproducto',
    props: [],
    mounted () {

    },
    data () {
      return {
        datos:[],
        datos2:[]

      }
    },
    methods: {

    },
    computed: {

    },

    firestore: {
      datos:db.collection('ofertas'),
      datos2:db.collection('consolas')
    }
}


</script>

<style>
</style>
