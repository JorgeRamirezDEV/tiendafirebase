import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let sesionIniciada = false
let usuarioActivo = []


var firebaseConfig = {
    apiKey: "AIzaSyDGvA1CiRpBd8s0XKC4QOkiweiE8O9LH6A",
    authDomain: "tiendafirebase-4a911.firebaseapp.com",
    projectId: "tiendafirebase-4a911",
    storageBucket: "tiendafirebase-4a911.appspot.com",
    messagingSenderId: "829015489989",
    appId: "1:829015489989:web:7b189d5abfb2e3c12c1fac"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()


export default {
    auth: firebase.auth(),
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result){
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode,errorMessage, email,credential);
      })
    },

    logout(){
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error){
        console.log(error)
      })
    },

    estadoUsuario (){
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        sesionIniciada = true;
        usuarioActivo = user;
        console.log(sesionIniciada);
        console.log(usuarioActivo);
      }
      else {
        sesionIniciada = false;
        usuarioActivo = {};
      }
    })
    },

    usuarioConectado (){
      if (sesionIniciada){
        return true;
      }
      else { false }
    }
     
}