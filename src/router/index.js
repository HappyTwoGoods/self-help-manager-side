import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Cook from '@/components/Cook'
import NewOrder from '@/page/Cook/NewOrder'
import My from '@/page/Cook/My'
import Producting from '@/page/Cook/Producting'
import Manager from '@/components/Manager'
import SmallCook from '@/page/Manager/Cook'
import Desk from '@/page/Manager/Desk'
import Goods from '@/page/Manager/Goods'
import Order from '@/page/Manager/Order'
import Login from '@/page/Login'
import AccountInfo from '@/page/AccountInfo'
import AllOrder from '@/page/AllOrder'
import AllMenu from '@/page/AllMenu'
import InsertGoods from '@/page/InsertGoods'
import UpdateGoods from '@/page/UpdateGoods'
import AddCook from '@/page/AddCook'
import AddDesk from '@/page/AddDesk'

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
      redirect: 'NewOrder',
      children: [
        {
          path: '/newOrder',
          name: 'NewOrder',
          component: NewOrder
        },
        {
          path: "/producting",
          name: 'Producting',
          component: Producting
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
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/addCook",
      name: "AddCook",
      component: AddCook
    },
    {
      path: "/accountInfo",
      name: "AccountInfo",
      component: AccountInfo
    },
    {
      path: "/allOrder",
      name: "AllOrder",
      component: AllOrder
    },
    {
      path: "/allMenu",
      name: "AllMenu",
      component: AllMenu
    },
    {
      path: "/insertGoods",
      name: "InsertGoods",
      component: InsertGoods
    },
    {
      path: "/updateGoods",
      name: "UpdateGoods",
      component: UpdateGoods
    },
    {
      path: "/addDesk",
      name: "AddDesk",
      component: AddDesk
    }
  ]
})
