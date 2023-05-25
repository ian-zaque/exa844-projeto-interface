import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../components/Search'
import Library from '../components/Library'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Search
  },
  {
    path: '/about',
    name: 'sobre',
    component: About
  },
  {
    path: '/library',
    name: 'library',
    component: Library,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
