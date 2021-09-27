import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import CompHeader from '@/components/header'
import compHome from '../pages/home.vue'
import compSipnam from '../pages/sipnam.vue'
import sanpham from '@/pages/sanpham.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
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
    },
    {
      path: '/san-pham/:id',
      name: 'san pham',
      component: sanpham
    }
  ]
})
