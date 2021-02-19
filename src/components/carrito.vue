<template lang="html">

  <section class="carrito" >
      <div class="shadow p-3 m-5 bg-white rounded"> 
        <h3 class="text-center mb-5 pb-2 ml-3 ml-md-5 font-weight-bold" >Carrito</h3>
        <div class="my-3">
          <div class="container row">
            <div class="col-md-2 col-8">
              <img src="../assets/test.png" class="mr-3 p-2 border rounded" style="width: 100px">
            </div>
            <div class="col-md-3 col-4">
              <h5 class="font-weight-bold">
                Nombre
              </h5>
              <label> Test </label>
            </div>
            <div class="col-8 d-block d-md-none">
            </div>
            <div class="col-md-3 col-4 ml-auto">
              <h5 class="font-weight-bold">
                Precio
              </h5>
              <label> Test </label>
            </div>
            <div class="col-8 d-block d-md-none">
            </div>
            <div class="col-md-3 col-8 ml-auto">
              <h5 class="font-weight-bold">
                Cantidad
              </h5>
              <input type="number" style="max-width:50px">
            </div>
            <div class="col-md-1 col-4 ml-auto">
              <p>
                Eliminar
              </p>
              <a class="btn btn-danger px-3">
                <font-awesome-icon icon="times" class="fa-xs p-0" /> </a>
            </div>
          </div>
        </div>
        <div class="col-8 m-5 d-block d-md-none">
        </div>
        <div class="d-flex justify-content-end m-3">
          <a class="btn btn-info mr-3"> Vaciar carrito </a>
          <a class="btn btn-primary"> Realizar Compra </a>     
        </div>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'carrito',
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
 .carrito {
   text-align: left;
 }
</style>
