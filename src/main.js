// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from "moment";

Vue.prototype.$moment = moment;

Vue.config.productionTip = false;


// 定义全局的自定义指令,使用全局自定义指令时,focus需要在标签上加上v-使用，即为v-focus
Vue.directive("focus", {
  bind() { },//指令绑定到元素上时执行一次
  inserted(el) { //指令插入到dom中时执行一次
    el.focus(); //el是一个原生的dom对象，想要获取焦点必须放到inserted中才行
  },
  updated() { },//vnode更新时会执行，可能会触发多次
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


