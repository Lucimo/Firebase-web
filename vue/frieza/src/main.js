// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import props from './mixins/props'
import firestore from 'firebase/firestore'
// Lucas esta dentro, con dev funcionando
Vue.config.productionTip = false

var config = {
   apiKey: 'AIzaSyDq4ct8lV-gj2g0JnUvbHeDxFwqZ8gzUfo',
   authDomain: 'frieza-squad.firebaseapp.com',
   databaseURL: 'https://frieza-squad.firebaseio.com',
   projectId: 'frieza-squad',
   storageBucket: 'frieza-squad.appspot.com',
   messagingSenderId: '572763641798'
 };

 firebase.initializeApp(config);

 Vue.use(firebase);
 Vue.use(firestore);
 Vue.mixin(props);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
