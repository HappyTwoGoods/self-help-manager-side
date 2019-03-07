import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Cook from '@/components/Cook'
import NotCompleteOrder from '@/page/Cook/NotCompleteOrder'
import My from '@/page/Cook/My'
import AllOrder from '@/page/Cook/AllOrder'
import Manager from '@/components/Manager'
import SmallCook from '@/page/Manager/Cook'
import Desk from '@/page/Manager/Desk'
import Goods from '@/page/Manager/Goods'
import Order from '@/page/Manager/Order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/cook',
      name: 'Cook',
      component: Cook,
      redirect: 'NotCompleteOrder',
      children: [
        {
          path: '/notCompleteOrder',
          name: 'NotCompleteOrder',
          component: NotCompleteOrder
        },
        {
          path: "/allOrder",
          name: 'AllOrder',
          component: AllOrder
        },
        {
          path: "/my",
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager,
      redirect: 'Goods',
      children: [
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: "/order",
          name: 'Order',
          component: Order
        },
        {
          path: "/desk",
          name: 'Desk',
          component: Desk
        },
        {
          path: "/smallCook",
          name: 'SmallCook',
          component: SmallCook
        }
      ]
    }
  ]
})
