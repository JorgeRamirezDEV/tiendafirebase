<template lang="html">

  <section id="loginbody" class="login mt-3 d-flex justify-content-center">
    <div class="shadow p-3 py-4 mx-5 bg-white rounded border-primary border-bottom" style="max-width: 1000px">
      <h3 class="text-center mb-5 pb-2 ml-3 ml-md-5 font-weight-bold"> Iniciar Sesión </h3>
      <div class="form-row pb-5 m-md-5 m-2 border-bottom">
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Email</label>
          <input type="email" class="form-control">
        </div>
        <div class="form-group col-md-6 ">
          <label class="font-weight-bold ml-md-4">Password</label>
          <input type="password" class="form-control  ml-md-4">
        </div>
        <a class="btn btn-primary  mt-4 mr-4"> Iniciar Sesión </a>
        <div>
          <a class="btn btn-info  mt-4 ml-5 mx-2"> Google </a>
          <a class="btn btn-primary mt-4 mx-2"> Facebook </a>
          <a class="btn btn-danger float-right mt-4 mx-2"> Twitter </a>
        </div>
      </div>
      <h3 class="text-center my-5 pb-2 ml-3 ml-md-5 font-weight-bold"> Registro </h3>
      <div class="form-row m-md-5 m-2">
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Nombre</label>
          <input type="name" class="form-control">
        </div>
        <div class="form-group col-md-6 ">
          <label class="font-weight-bold mx-md-4">Apellidos</label>
          <input type="surname" class="form-control ml-md-4">
        </div>
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Email</label>
          <input type="email" class="form-control" style="max-width: 500px">
        </div>
        <div class="form-group col-md-6">
        </div>
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Contraseña</label>
          <input type="password" class="form-control">
        </div>
        <div class="form-group col-md-6 ">
          <label class="font-weight-bold mx-md-4">Repite la contraseña</label>
          <input type="password" class="form-control mx-md-4">
        </div>
        <a class="btn btn-success mt-4"> Registrarse </a>
      </div> 
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'login',
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

#loginbody {
  text-align: left;
}
 
</style>
