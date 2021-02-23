<template lang="html">

  <section class="anadirproducto">
    <div class="shadow p-3 m-5 bg-white rounded mx-auto border-primary border-bottom" style="max-width: 1000px">
        <h1 class="mb-5"> Subir producto </h1>
        <form>
          <div class="form-group mb-5">
            <label>Nombre del producto</label>
            <input type="text" class="form-control mx-auto" v-model="nombreProd" style="max-width: 500px">
          </div>
          <div class="form-group mb-5 border-top">
            <label class="mt-3">Precio</label>
            <input type="number" v-model.number="precioProd" min="0" class="form-control mx-auto text-right" style="max-width: 80px" placeholder="€">
          </div>
          <div class="form-group border-top pt-4 mb-5 ">
            <label>Stock</label>
            <input type="number" v-model.number="stockProd" min="0" class="form-control mx-auto" style="max-width: 200px">
          </div>
          <div class="form-group border-top pt-4 mb-5 ">
            <label>Imagen</label>
            <input type="text" v-model="imagenProd" class="form-control-file mx-auto" style="max-width: 400px" placeholder="Copia el link de la imagen">
          </div>
          <div class="form-group border-top pt-4 mb-5 ">
            <label>Imagen 2</label>
            <input type="text" v-model="imagen2Prod" class="form-control-file mx-auto" style="max-width: 400px" placeholder="Copia el link de la imagen">
          </div>
          <div class="form-group border-top  py-5">
            <label>Descripción</label>
            <textarea class="form-control mx-auto" v-model="descripcionProd" rows="3" style="max-width: 700px"></textarea>
          </div>
          <a class="btn btn-success mb-5" @click="crearProd()">Crear Producto</a>
        </form>
    </div>
    <div class="shadow p-3 m-5 bg-white rounded mx-auto border-primary border-bottom" style="max-width: 1000px">
      <h1 class="my-3"> Editar productos </h1>
    <h2> Sección de Productos </h2>
    <div class="row my-5 mx-0 justify-content-center">
      <div class="shadow-sm p-3 m-2 bg-white rounded border" v-for="consola in datos2" v-bind:key="consola.id">
              <h2 class="mt-0">{{consola.nombre}}</h2>
        <div v-if="productID!=consola.id">
          <a class="btn btn-danger" @click="editarProd(consola.id)">Editar</a>
        </div>
          <div v-else>
            <div>   
            <div class="my-3">
              <h5> Precio ({{consola.precio}})  </h5> 
              <input type="number" v-model.number="precio" min="0">
              <a class="btn btn-success mx-2 p-1" @click="modificarPrecio(consola.id)">Actualizar</a>
            </div>
            <div class="my-3">
              <h5> Stock ({{consola.stock}}) </h5> 
              <input type="number" v-model.number="stock" min="0">
              <a class="btn btn-success mx-2 p-1" @click="modificarStock(consola.id)">Actualizar</a>
            </div>
            <div class="my-3">
              <a class="btn btn-danger mx-2 p-1" @click="eliminarProd(consola.id)">Eliminar</a>
            </div>
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
        datos2:[],
        productID: "",
        precio: 0,
        stock: 0,
        nombreProd: "",
        precioProd: 0,
        stockProd: 0,
        imagenProd:"",
        imagen2Prod:"",
        descripcionProd:""

      }
    },
    methods: {
        editarProd(id){
          if (this.productID!=id){
          this.productID=id
        } else { this.productID=""}
        
    },

        modificarPrecio(id){
          if (this.precio!=0){
            db.collection("consolas").doc(id).update({
              precio: this.precio
            })
          }
        },

        modificarStock(id){
            db.collection("consolas").doc(id).update({
              stock: this.stock
            }  
          )
          
        },

        eliminarProd(id){
            db.collection("consolas").doc(id).delete()
        },

        crearProd(){
          db.collection("consolas").add({
            nombre:this.nombreProd,
            precio:this.precioProd,
            stock:this.stockProd,
            imagen:this.imagenProd,
            imagen2:this.imagen2Prod,
            descripcion:this.descripcionProd

          })
        }

    },
    computed: {

    },

    firestore: {
      datos:db.collection('ofertas'),
      datos2:db.collection('consolas')
    }
}


</script>

<style scoped lang="scss">


</style>
