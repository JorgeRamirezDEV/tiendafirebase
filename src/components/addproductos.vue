<template lang="html">

  <section class="anadirproducto">
    <div class="shadow p-3 m-5 bg-white rounded mx-auto border-primary border-bottom" style="max-width: 1000px">
        <h1> Subir producto </h1>
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
  </section>

</template>

<script lang="js">

  export default  {
    name: 'anadirproducto',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style>
</style>
