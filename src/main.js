import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(firestorePlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
