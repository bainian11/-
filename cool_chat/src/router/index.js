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
    path:'/phone_binding',
    component:()=>import('../views/cjq/Phone_binding.vue')
  },
  {
    path:'/code',
    component:()=>import('../views/cjq/Code.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Jiaoyou/search.vue')
  },
  {
    path:'/set_up',
    component:()=>import('../views/cjq/Set_up.vue')
  },
  // {
  //   path: '/myincome',
  //   name: 'myincome',
  //   component: () => import('../views/shy/Myincome')
  // },
  {
    path: '/vedio',
    name: 'vedio',
    component: () => import(/* webpackChunkName: "vedio" */ '../views/Vedio.vue')
  },
  // {
  //   path: '/Message',
  //   name: 'Message',
  //   component: () => import(/* webpackChunkName: "Message" */ '../views/Message.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    
      path: '/',
      redirect: '/Jiaoyou'
    
  },
  {
    path: '/Jiaoyou',
    name: 'Jiaoyou',
    component: Jiaoyou
  },{
    path: '/Xiaoxi',
    name: 'Xiaoxi',
    component: Xiaoxi
  },
  // {
  //   path: '/account',
  //   name: 'account',
  //   component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  // },{
  //   path: '/accountbind',
  //   name: 'accountbind',
  //   component: () => import(/* webpackChunkName: "accountbind" */ '../views/Accountbind.vue')
  // },{
  //   path: '/advice',
  //   name: 'advice',
  //   component: () => import(/* webpackChunkName: "advice" */ '../views/Advice.vue')
  // },{
  //   path: '/sex',
  //   name: 'sex',
  //   component: () => import(/* webpackChunkName: "sex" */ '../views/Sex.vue')
  // },
  // {path: '/my/:id',
  //   name: 'my',
  //   component: () => import('../views/shy/My')
  // },
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
  },
  {
    path: '/Data',
    name: 'Data',
    component:Data
  },


    {
        path: '/Personal data',
        name: 'Personal data',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Personal data.vue')
    },

    {
        path: '/phone_binding',
        component: () =>
            import ('../views/cjq/Phone_binding.vue')
    },
    {
        path: '/code',
        component: () =>
            import ('../views/cjq/Code.vue')
    },

    // {
    //     path: '/Message',
    //     name: 'Message',
    //     component: () =>
    //         import ('../views/Message.vue')
    // },
    // {
    //     path: '/search',
    //     name: 'search',
    //     component: () =>
    //         import ('../views/search/search.vue')
    // },
    {
        path: '/personInfo',
        name: 'personInfo',
        component: () =>
            import ('../views/personInfo/personInfo.vue')
    },
    {
        path: '/extractdetails',
        name: 'extractdetails',
        component: () =>
            import ('../views/extractDetails/Extractdetails.vue')
    },
    {
        path: '/conversation',
        name: 'conversation',
        component: () =>
            import ('../views/Conversation/Conversation.vue')
    },
    {
        path: '/set_up',
        component: () =>
            import ('../views/cjq/Set_up.vue')
    },
    // {
    //     path: '/myincome',
    //     name: 'myincome',
    //     component: () =>
    //         import ('../views/shy/Myincome')
    // },
    // {
    //     path: '/my/:id',
    //     name: 'my',
    //     component: () =>
    //         import ('../views/shy/My')
    // },
    // {
    //     path: '/myaccount/:money',
    //     name: 'myaccount',
    //     component: () =>
    //         import ('../views/shy/Myaccount')
    // },
    {
        path: '/visited',
        component: () =>
            import ('../views/cjq/Visited.vue')
    },

    {
        path: '/Xiaoxi',
        name: 'Xiaoxi',
        component: Xiaoxi
    },
    // {
    //     path: '/Inform',
    //     name: 'Inform',
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/Inform.vue')
    // },
    // {
    //     path: '/upphoto',
    //     name: 'upphoto',
    //     component: () =>
    //         import ('../views/shy/Upphoto'),
    //     // children:[]
    // },
    // {
    //     path: '/photo',
    //     name: 'photo',
    //     component: () =>
    //         import ('../views/shy/Photo'),

    // }

]

const router = new VueRouter({
    routes
})

export default router