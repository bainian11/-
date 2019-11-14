import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue')
  },
  {
    path: '/personInfo',
    name: 'personInfo',
    component: () => import('../views/personInfo/personInfo.vue')
  },
  {
    path: '/extractdetails',
    name: 'extractdetails',
    component: () => import('../views/extractDetails/Extractdetails.vue')
  },
  {
    path: '/conversation',
    name: 'conversation',
    component: () => import('../views/Conversation/Conversation.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
