import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from './config/firebase.cfg.js'
import firebase from 'firebase';

Vue.config.productionTip = false
Vue.use(Vuetify)
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

