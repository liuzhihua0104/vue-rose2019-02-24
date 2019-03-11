import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import BaseInstruct from "@/components/BaseInstruct";
import Animate from "@/components/Animate";
import FilterAndFocus from "@/components/FilterAndFocus";
import Animate01 from "@/components/Animate01";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/animate01"
    }, {
      path: "/baseInstruct",
      component: BaseInstruct
    }, {
      path: "/animate",
      component: Animate
    }, {
      path: "/filterandfocus",
      component: FilterAndFocus
    },
    {
      path: "/animate01",
      component: Animate01
    }

  ]
})
