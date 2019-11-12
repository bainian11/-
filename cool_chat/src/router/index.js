import Vue from 'vue'
import VueRouter from 'vue-router'
import Jiaoyou from '../views/Jiaoyou/Jiaoyou.vue'
import Xiaoxi from '../views/Xiaoxi/Xiaoxi.vue'
import Geren from '../views/Geren/Geren.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/Jiaoyou',
    name: 'Jiaoyou',
    component: Jiaoyou
  },
  {
    path: '/Xiaoxi',
    name: 'Xiaoxi',
    component: Xiaoxi
  },
  {
    path: '/Geren',
    name: 'Geren',
    component: Geren
  },
]

const router = new VueRouter({
  routes
})

export default router
