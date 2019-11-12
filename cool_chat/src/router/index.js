import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
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
