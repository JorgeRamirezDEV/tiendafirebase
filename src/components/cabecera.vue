<template lang="html">

  <section class="cabecera">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="../assets/wave.png" width="30" height="30" class="mr-2 d-inline-block align-top" alt="">
          Medio´l Mar
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
  .cabecera {
    
  }

</style>
