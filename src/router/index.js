import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import BaseInstruct from "@/components/BaseInstruct";
import Animate from "@/components/Animate";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:"/baseInstruct",
      name:"BaseInstruct",
      component:BaseInstruct
    },{
      path:"/animate",
      name:"Animate",
      component:Animate
    }
  ]
})
