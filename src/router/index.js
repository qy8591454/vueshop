import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import User from '@/components/User'
import Shop from '@/components/Shop'
import Car from '@/components/Car'
import Address from '@/components/Address'
import Order from '@/components/Order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    }
  ]
})
