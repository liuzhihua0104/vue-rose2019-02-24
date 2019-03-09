import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import BaseInstruct from "@/components/BaseInstruct";
import Animate from "@/components/Animate";
import FilterAndFocus from "@/components/FilterAndFocus";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/filterandfocus"
    },{
      path:"/baseInstruct",
      component:BaseInstruct
    },{
      path:"/animate",
      component:Animate  
    },{
      path:"/filterandfocus",
      component:FilterAndFocus
    }
  ]
})
