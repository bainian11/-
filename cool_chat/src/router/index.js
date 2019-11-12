import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xiaoxi from '../views/Xiaoxi/Xiaoxi.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/myincome',
    name: 'myincome',
    component: () => import('../views/shy/Myincome')
  },
  {
    path: '/my/:id',
    name: 'my',
    component: () => import('../views/shy/My')
  },
  {
    path: '/myaccount/:money',
    name: 'myaccount',
    component: () => import('../views/shy/Myaccount')
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {
    path: '/Xiaoxi',
    name: 'Xiaoxi',
    component: Xiaoxi
  },
  {
    path: '/Inform',
    name: 'Inform',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inform.vue')
  },
  {
    path: '/upphoto',
    name: 'upphoto',
    component: () => import('../views/shy/Upphoto'),
    // children:[]
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../views/shy/Photo'),

  }


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/Message',
  //   name: 'Message',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
