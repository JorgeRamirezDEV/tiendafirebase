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
          <a class="btn btn-primary mt-auto" @click=" añadirCarrito(consola.nombre, consola.imagen, consola.precio, consola.id, consola.stock)" v-if="consola.stock>0&&user.loggedIn">Añadir a la cesta </a>
        </div>
      </div>
    </div>
    

  </section>

</template>

<script lang="js">

  import Firebase from 'firebase'
  import {db} from '../db.js'
  export default  {
    name: 'productos',
    props: [],
    mounted () {

      Firebase.auth().onAuthStateChanged(user => {
        if (user){
          this.user.loggedIn = true;
          this.user.data = user;
          
        }
        else{
          this.user.loggedIn = false;
          this.user.data = {};
          
        }
      })

    },
    data () {
      return {
        datos:[],
        user:{
          loggedIn: false,
          data:{}
        }
      }
    },
    methods: {
        añadirCarrito(nombre,foto,precio,id,stock){
        this.div=false;
        db.collection("carrito").doc(nombre+" - "+this.user.data.email).set({
          nombre: nombre,
          precio: precio,
          imagen: foto,
          cantidadProd: 1,
          productID: id,
          stock: stock,
          usuarioID: this.user.data.email
        })
        .then(() => {
          this.$notify({
          group: 'logout',
          type: 'success',
          title: 'Se ha añadido al carrito'
        })
        })
        .catch((error) => {
          console.error("no funca", error);
        });
      }
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
