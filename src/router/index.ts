import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/blogs',
    name: 'BlogsPage',
    component: () => import('../components/pages/BlogsPage.vue')
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../components/pages/HomePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
