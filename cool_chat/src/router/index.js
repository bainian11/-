import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vedio',
    name: 'vedio',
    component: () => import(/* webpackChunkName: "vedio" */ '../views/Vedio.vue')
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "Message" */ '../views/Message.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },{
    path: '/accountbind',
    name: 'accountbind',
    component: () => import(/* webpackChunkName: "accountbind" */ '../views/Accountbind.vue')
  },{
    path: '/advice',
    name: 'advice',
    component: () => import(/* webpackChunkName: "advice" */ '../views/Advice.vue')
  },{
    path: '/sex',
    name: 'sex',
    component: () => import(/* webpackChunkName: "sex" */ '../views/Sex.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
