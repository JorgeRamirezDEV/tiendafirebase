<template lang="html">

  <section id="loginbody" class="login mt-3 d-flex justify-content-center">
    <div class="shadow p-3 py-4 m-5 bg-white rounded border-primary border-bottom" style="max-width: 1000px">
      <h3 class="text-center mb-5 pb-2 ml-3 ml-md-5 font-weight-bold"> Iniciar Sesión </h3>
      <div class="form-row pb-5 m-md-5 m-2 border-bottom">
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Email</label>
          <input type="email" v-model="emaillog" class="form-control">
        </div>
        <div class="form-group col-md-6 ">
          <label class="font-weight-bold ml-md-4">Password</label>
          <input type="password" v-model="contraseñalog" class="form-control  ml-md-4">
        </div>
        <a class="btn btn-primary mt-4 mr-4" @click="login"> Iniciar Sesión </a>
        <div>
          <a class="btn btn-danger  mt-4 ml-5 mx-2" @click="logingoogle"> <font-awesome-icon size="lg" :icon="['fab', 'google']" /> </a>
          <a class="btn btn-primary mt-4 mx-2" @click="loginfacebook"> <font-awesome-icon size="lg" :icon="['fab', 'facebook-square']" /> </a>
          <a class="btn btn-info float-right mt-4 mx-2" @click="logintwitter"> <font-awesome-icon size="lg" :icon="['fab', 'twitter']" /> </a>
        </div>
      </div>
      <h3 class="text-center my-5 pb-2 ml-3 ml-md-5 font-weight-bold"> Registro </h3>
      <div class="form-row m-md-5 m-2">
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Nombre</label>
          <input type="name" v-model="nombre" class="form-control">
        </div>
        <div class="form-group col-md-6 ">
          <label class="font-weight-bold mx-md-4">Apellidos</label>
          <input type="surname" v-model="apellidos" class="form-control ml-md-4">
        </div>
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Email</label>
          <input type="email" v-model="email" class="form-control" style="max-width: 500px">
        </div>
        <div class="form-group col-md-6">
        </div>
        <div class="form-group col-md-6">
          <label class="font-weight-bold">Contraseña</label>
          <input type="password" v-model="contraseña" class="form-control">
        </div>
        <div class="form-group col-md-6 ">
          <label class="font-weight-bold mx-md-4">Repite la contraseña</label>
          <input type="password" v-model="contraseñacheck" class="form-control mx-md-4">
        </div>
        <a class="btn btn-success mt-4" v-if="comprobarContraseña()" @click="registro"> Registrarse </a>
        <small class="ml-2" v-else>Las contraseñas deben coincidir.</small>
      </div> 
    </div>
  </section>

</template>

<script lang="js">

  import firebase from 'firebase/app'
  import Firebase from '../db.js'

  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {
        user:{
          data:{}
        },
        nombre:"",
        apellidos:"",
        email:"",
        contraseña:"",
        contraseñacheck:"",
        emaillog:"",
        contraseñalog:""
      }
    },
    methods: {
      comprobarContraseña() {
        if (this.contraseña==this.contraseñacheck&&this.contraseña!=""){
        return true
        }
        else {return false}
      },

      login() {
        Firebase.login(this.emaillog,this.contraseñalog)
        this.$router.replace({ name: "Middle" });
      },

      loginfacebook(){
        Firebase.loginfacebook();
        this.$router.replace({ name: "Middle" });
      },

      logingoogle(){
        Firebase.logingoogle();
        this.$router.replace({ name: "Middle" });
      },

      logintwitter(){
        Firebase.logintwitter();
        this.$router.replace({ name: "Middle" });
      },

      registro(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.contraseña)
      .then(data=>{
        this.$router.replace({ name: "Middle" });
        this.$notify({
          group: 'logout',
          type: 'success',
          title: 'Te has resgistrado!',
          text: 'Has sido deslogueado de manera exitosa, ¡esperamos verte pronto!'
        })
        data.user
        .updateProfile({
          displayName: this.nombre
        })
        .then(() => {});
      })
        
    }

    },
    computed: {

      sesioniniciada(){
        return this.user.loggedIn
      }

    }
}


</script>

<style scoped lang="scss">

#loginbody {
  text-align: left;
}
 
</style>
