<template lang="html">

  <section class="novedades py-4 border-top">
    <h1 class="titulo">Novedades</h1>
    <div class="row d-flex my-5 mx-0 justify-content-center">
      <div v-for="novedad in datos" v-bind:key="novedad.id" class="bg-light card m-1 mx-md-5" style="min-width: 200px;max-width: 20vw">
        <div class="card-header">
          <h5 class="font-weight-bold m-0">{{novedad.nombre}}</h5>
        </div>
        <img class="card-img-top bg-white border-bottom" v-bind:src='novedad.imagen'>
        <img class="card-img-bot bg-white border-bottom" v-bind:src='novedad.imagen2'>   
        <div class="card-body d-flex row justify-content-center">
          <h4 class="card-title font-weight-bold">{{novedad.precio}} €</h4>
          <p class="card-text">{{novedad.descripcion}}</p>
          <a class="btn btn-danger mt-auto" v-if="user.loggedIn">Saber más</a>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  import Firebase from 'firebase'
  import {db} from '../db.js'
  export default  {
    name: 'novedades',
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

    },
    computed: {

    },

    firestore: {
      datos:db.collection('ofertas')
    }
}


</script>

<style scoped lang="scss">

.card-header {
  @include header-card (color(primario))
}

.card-img-top {
  @include imagen-top
}

.card-img-bot {
  @include imagen-bot
}

.card:hover .card-img-top {
  opacity:0;
  transition:1s;
        
}

.card-body {
  @include body-card(color(apoyo))
}

.card-title {
  @include title-card(color(primario))
}

section {
  background-image: $fondofeo;
}

</style>
