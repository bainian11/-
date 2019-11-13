import Vue from 'vue'
import VueRouter from 'vue-router'
import Jiaoyou from '../views/Jiaoyou/Jiaoyou.vue'
import Xiaoxi from '../views/Xiaoxi/Xiaoxi.vue'
import Geren from '../views/Geren/Geren.vue'
import Inform from '../views/Xiaoxi/Inform.vue'
import Black from '../views/Geren/Black.vue'
import Photo from '../views/Geren/Upphoto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Jiaoyou',
    component: Jiaoyou
  },{
    path: '/Xiaoxi',
    name: 'Xiaoxi',
    component: Xiaoxi
  },
  {
    path: '/Geren',
    name: 'Geren',
    component: Geren
  },
  {
    path: '/Inform',
    name: 'Inform',
    component: Inform
  },
  {
    path: '/Black',
    name: 'Black',
    component: Black
  },
  {
    path: '/Photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/myincome',
    name: 'myincome',
    component: () => import('../views/Geren/Myincome')
  },
  {
    path: '/my/:id',
    name: 'my',
    component: () => import('../views/Geren/Geren')
  },
  {
    path: '/myaccount/:money',
    name: 'myaccount',
    component: () => import('../views/Geren/Myaccount')
  },
  
  {
    path: '/upphoto',
    name: 'upphoto',
    component: () => import('../views/Geren/Upphoto'),
    // children:[]
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../views/Geren/Photo'),

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
