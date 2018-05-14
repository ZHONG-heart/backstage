import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexH from '@/view/group/index'
import ZG from '@/view/group/zg'
import MapB from '@/view/group/map'
import Web from '@/view/group/web'
import Login_register from '@/view/login_register/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      component:resolve=>require(['@/view/group/index'],resolve),
      children:[
        {
          path:'zg',
          name:'zg',
          component:ZG
        },
        {
          path:'map',
          name:'map',
          component:MapB
        },
        {
          path:'web',
          name:'web',
          component:Web
        },
        {
          path:'Login_Register',
          name:'Login_Register',
          component:Login_register
        },
        {
          redirect:'zg',
          path:'/'
        }
      ]
    }
  ]
})
