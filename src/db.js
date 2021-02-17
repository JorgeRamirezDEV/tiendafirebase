import firebase from 'firebase/app'
import 'firebase/firestore'



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