import Vue from 'vue'
import Notifications from 'vue-notification'
import './plugins/fontawesome'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.use(firestorePlugin)

Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
