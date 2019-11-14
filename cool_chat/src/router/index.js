import Vue from 'vue'
import VueRouter from 'vue-router'
import Jiaoyou from '../views/Jiaoyou/Jiaoyou.vue'
import Xiaoxi from '../views/Xiaoxi/Xiaoxi.vue'
import Geren from '../views/Geren/Geren.vue'
import Inform from '../views/Xiaoxi/Inform.vue'
import Black from '../views/Geren/Black.vue'
import Upphoto from '../views/Geren/Upphoto.vue'
import Setup from '../views/Geren/Set.vue'
import Visited from '../views/Xiaoxi/Visited.vue'
import photo from '../views/Geren/Photo.vue'
import Account from '../views/Geren/Myaccount.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
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
  {
    path:'/phone_binding',
    component:()=>import('../views/cjq/Phone_binding.vue')
  },
  {
    path:'/code',
    component:()=>import('../views/cjq/Code.vue')
  },
  {
    path:'/set_up',
    component:()=>import('../views/cjq/Set_up.vue')
  },
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
    path: '/Set',
    name: 'Set',
    component: Setup
  },
  {
    path: '/Visited',
    name: 'Visited',
    component: Visited
  },
  {
    path:'/visited',
    component:()=>import('../views/cjq/Visited.vue')
  },
  
  {
    path: '/Upphoto',
    name: 'Upphoto',
    component: Upphoto
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
    path: '/photo',
    name: 'photo',
    // component: () => import('../views/Geren/Photo'),
    component: photo
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
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
