import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Docs from './views/Docs.vue'
import NewFile from './views/NewFile.vue'
import Files from './views/Files.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/docs',
      name: 'Docs',
      component: () => import(/* webpackChunkName: "about" */ './views/Docs.vue')
    },
    {
      path: '/new',
      name: 'Edit File',
      component: () => import(/* webpackChunkName: "about" */ './views/NewFile.vue')
    },
    {
      path: '/files',
      name: 'Files',
      component: () => import(/* webpackChunkName: "about" */ './views/Files.vue')
    }
  ]
})
