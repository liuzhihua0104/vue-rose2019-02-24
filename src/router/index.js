import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import BaseInstruct from "@/components/BaseInstruct";

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
    }
  ]
})
