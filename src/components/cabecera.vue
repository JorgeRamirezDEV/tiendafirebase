<template lang="html">

  <section class="cabecera">
      <nav class="navbar navbar-dark bg-light border-bottom">
        <router-link class="navbar-brand" href="#" to="/">
          <img src="../assets/logo.png" style="width: 300px" class="mr-2 d-inline-block align-top" alt="">
        </router-link>
        <div class="d-flex">
          <div class="mr-auto">
            <router-link class="btn btn-info" to="/addproductos">
              <font-awesome-icon class="text-white fa-lg" icon="user" />   
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
          <div class="ml-4">
            <router-link class="btn btn-primary" to="/Login">Log in</router-link>
          </div>
          <div class="ml-2">
            <a class="btn btn-danger"> Log out </a>
          </div>
        </div>
      </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cabecera',
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


    }
}


</script>

<style>

</style>
