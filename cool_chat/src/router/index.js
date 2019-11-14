import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Home.vue'
import Xiaoxi from '../views/Xiaoxi/Xiaoxi.vue'


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
  {
    path:'/set_up',
    component:()=>import('../views/cjq/Set_up.vue')
  },
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
    path:'/visited',
    component:()=>import('../views/cjq/Visited.vue')
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
