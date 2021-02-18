<template lang="html">

  <section class="cabecera">
      <nav class="navbar navbar-dark bg-light border-bottom">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" style="width: 300px" class="mr-2 d-inline-block align-top" alt="">
        </a>
        <div class="d-flex">
          <div class="mr-auto">
            <a class="btn btn-info text-white px-2">
              <font-awesome-icon class="text-white fa-lg" icon="shopping-cart" />   
              <span class="ml-2"> Carrito     </span>
            </a>
          </div>
          <div class="ml-4">
            <a class="btn btn-primary"> Log in </a>
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
