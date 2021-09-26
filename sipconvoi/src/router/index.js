import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import CompHeader from '@/components/header'
import compHome from '../components/home.vue'
import compSipnam from '../components/sipnam.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: compHome
    },
    {
      path: '/sip-nam',
      name: 'Sipnam',
      component: compSipnam
    }
  ]
})
