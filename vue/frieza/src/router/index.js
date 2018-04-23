import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Principal from '@/components/Principal'
import LoginRegistro from '@/components/LoginRegistro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    }
  ]
})
