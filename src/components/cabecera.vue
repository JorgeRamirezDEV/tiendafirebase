<template lang="html">

  <section class="cabecera">
      <nav class="navbar navbar-dark border-bottom">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" style="width: 300px" class="mr-2 d-inline-block align-top" alt="">
        </router-link>
        <div class="d-flex">
          <div class="mr-auto">
            <router-link class="btn btn-info" to="/addproductos" v-if="this.panelcontrol">
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
          <div class="row ml-3 ml-sm-5">
            <div >
              <b-button class="mr-2" variant="primary" to="/Login">
              <font-awesome-icon class="text-white fa-lg" icon="user" />
              <span class="ml-2 d-none d-sm-inline" v-if="user.loggedIn"> {{user.data.displayName}} </span>
              <span class="ml-2 d-none d-sm-inline" v-else> Usuario </span>
              </b-button>
            </div>
            <div class="ml-2" v-if="user.loggedIn">
              <a class="btn btn-danger" @click="logout">
                <font-awesome-icon class="text-white fa-lg mr-2" icon="sign-out-alt" /> 
                Salir 
              </a>
            </div>
          </div>
        </div>
      </nav>
  </section>

</template>

<script lang="js">


  import Firebase from 'firebase'

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

      Firebase.auth().onAuthStateChanged(user => {
        if (user){
          this.user.loggedIn = true;
          this.user.data = user;
          if (user.email=="administrador@gmail.com")
            this.panelcontrol=true
        }
        else{
          this.user.loggedIn = false;
          this.user.data = {};
          this.panelcontrol=false
          
        }
      })

    },
    data () {
      return {
        datos:[],
        panelcontrol: false,
        user:{
          loggedIn: false,
          data:{}
        }

      }
    },
    methods: {

      logout(){
        Firebase.auth().signOut().then(() =>{
          this.$router.push({name: 'Middle'})
          this.$notify({
            group: 'logout',
            type: 'success',
            title: '¡Adios!',
            text: 'Has sido deslogueado de manera exitosa, ¡esperamos verte pronto!'
          })
        })
      }
    },
    computed: {
      

    }
}


</script>

<style scoped lang="scss">


nav {
  background-color: color(apoyo2);
}
 
</style>
