import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xiaoxi from '../views/Xiaoxi/Xiaoxi.vue'


Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  routes
})

export default router
