import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Cook from '@/components/Cook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/cook',
      name: 'Cook',
      component: Cook
    }
  ]
})
