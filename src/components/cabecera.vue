<template lang="html">

  <section class="cabecera">
      <nav class="navbar navbar-dark bg-light border-bottom">
        <router-link class="navbar-brand" href="#" to="/">
          <img src="../assets/logo.png" style="width: 300px" class="mr-2 d-inline-block align-top" alt="">
        </router-link>
        <div class="d-flex">
          <div class="mr-auto">
            <router-link class="btn btn-info" to="/addproductos" v-if="user.loggedIn">
              <font-awesome-icon class="text-white fa-lg" icon="user-cog" />   
              <span class="ml-2"> Administrar</span>
            </router-link>
          </div>
          <div class="mx-2">
          </div>
          <div class="mr-auto">
            <router-link class="btn btn-info" to="/carrito">
              <font-awesome-icon class="text-white fa-lg" icon="shopping-cart" />   
              <span class="ml-2"> Carrito     </span>
            </router-link>
          </div>
          <div>
            <div class="ml-4" v-if="!user.loggedIn">
              <b-button variant="primary-color" to="/Login">
              <font-awesome-icon class="text-white fa-lg" icon="user" />
              <span class="ml-2"> Usuario
              </span>
              </b-button>
            </div>
            <div class="ml-4" v-else>
              <a class="btn btn-danger"  @click="logout"> Log out </a>
            </div>
          </div>
        </div>
      </nav>
  </section>

</template>

<script lang="js">

  import firebase from '../db.js'
  import Firebase from 'firebase'

  export default  {
    name: 'cabecera',
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

      logout(){
        firebase.logout()
      }

    },
    computed: {
    }
}


</script>

<style scoped lang="scss">

</style>
