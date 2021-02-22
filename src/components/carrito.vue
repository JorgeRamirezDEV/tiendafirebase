<template lang="html">

  <section class="carrito" >
      <div class="shadow p-3 m-5 bg-white rounded border-primary border-bottom mx-auto" style="max-width: 1000px"> 
        <h3 class="text-center mb-5 pb-2 ml-3 ml-md-5 font-weight-bold" >Carrito ({{productoCarrito.length}})</h3>
        <div v-for="productosCesta in productoCarrito" v-bind:key="productosCesta.id" class="my-3">
          <div class="container row border shadow-sm ml-1 p-3 py-5 mb-5 bg-light rounded">
            <div class="col-md-2 col-8">
              <img v-bind:src='productosCesta.imagen' class="mr-3 p-2 border rounded bg-white" style="width: 100px">
            </div>
            <div class="col-md-3 col-4">
              <h5 class="font-weight-bold">
                Nombre
              </h5>
              <label> {{productosCesta.nombre}} </label>
            </div>
            <div class="col-8 d-block d-md-none">
            </div>
            <div class="col-md-3 col-4 ml-auto">
              <h5 class="font-weight-bold">
                Precio
              </h5>
              <label> {{productosCesta.precio}} </label>
            </div>
            <div class="col-8 d-block d-md-none">
            </div>
            <div class="col-md-3 col-8 ml-auto">
              <h5 class="font-weight-bold">
                Cantidad
              </h5>
              <input type="number" style="max-width:50px" v-bind:value="productosCesta.cantidadProd">
            </div>
            <div class="col-md-1 col-4 m-auto">
              <a @click="borrarProducto(productosCesta.id)" class="btn btn-danger py-2">
                <font-awesome-icon icon="trash-alt" class="fa-lg p-0" /> </a>
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

  import firebase from '../db.js'
  import {db} from '../db.js'
  export default  {
    name: 'carrito',
    props: [],
    mounted () {

    },
    data () {
      return {
        productoCarrito:[]

      }
    },
    methods: {
      borrarProducto(idItem) {
        db.collection("carrito").doc(idItem).delete()
        
      }

    },
    computed: {

    },

    firestore: {
      productoCarrito: db.collection("carrito").where("usuarioID","==",firebase.auth.currentUser.email ?firebase.auth.currentUser.email:"")
    }
}


</script>

<style scoped lang="scss">

</style>
