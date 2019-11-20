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
import Data from '../views/Geren/Personal data'

Vue.use(VueRouter)

const routes = [

  {

    path: '/',
    redirect: '/Jiaoyou'

  },
  {
    path: '/phone_binding',
    component: () => import('../views/cjq/Phone_binding.vue')
  },
  {
    path: '/code',
    component: () => import('../views/cjq/Code.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Jiaoyou/search.vue')
  },
  {
    path: '/set_up',
    component: () => import('../views/cjq/Set_up.vue')
  },

  {
    path: '/vedio',
    name: 'vedio',
    component: () => import('../views/Vedio.vue')
  },

  {
    path: '/complete',
    name: 'complete',
    component: () => import('../views/Complete.vue')
  },

  {
    path: '/fans',
    name: 'fans',
    component: () => import('../views/Geren/Fans.vue')
  },
  {
    path: '/gifts',
    name: 'gifts',
    component: () => import('../views/Geren/Gift.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Jiaoyou',
    name: 'Jiaoyou',
    component: Jiaoyou
  }, {
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
    path: '/visited',
    component: () => import('../views/cjq/Visited.vue')
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
    component: photo
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
  },
  {
    path: '/Data',
    name: 'Data',
    component: Data
  },


  {
    path: '/Personal data',
    name: 'Personal data',
    component: () =>
      import('../views/Personal data.vue')
  },

  {
    path: '/phone_binding',
    component: () =>
      import('../views/cjq/Phone_binding.vue')
  },
  {
    path: '/code',
    component: () =>
      import('../views/cjq/Code.vue')
  },
  {
    path: '/personInfo',
    name: 'personInfo',
    component: () =>
      import('../views/Personaldetails/Personinfo.vue')
  },
  {
    path: '/extractdetails',
    name: 'extractdetails',
    component: () =>
      import('../views/Personaldetails/Extractdetails.vue')
  },
  {
    path: '/conversation',
    name: 'conversation',
    component: () =>
      import('../views/Personaldetails/Conversation.vue')
  },
  {
    path: '/album',
    name: 'album',
    component: () =>
      import('../views/Personaldetails/Album.vue')
  },
  {
    path: '/set_up',
    component: () =>
      import('../views/cjq/Set_up.vue')
  },
  {
    path: '/visited',
    component: () =>
      import('../views/cjq/Visited.vue')
  },
  {
    path: '/Xiaoxi',
    name: 'Xiaoxi',
    component: Xiaoxi
  },
  {
    path: '/sex',
    name: 'sex',
    component: () =>
      import('../views/Sex.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router