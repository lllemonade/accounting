import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/Money.vue'
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
  
    redirect: '/money'
  },
  {
    path: '/money',
    name:'money',
    component: Money
  },
  {
    path: '/labels',
    name:'labels',
    component: Labels
  },
  {
    path: '/statistics',
    name:'statistics',
    component: Statistics
  }
]

const router = new VueRouter({
  routes
})

export default router
