<template>
  <div class="container">
    <button @click="flag=!flag">button</button>
    <!-- <transition name="box">
      <div v-if="flag">我是内容</div>
    </transition>-->



    <!-- 、
    第一步：安装：
    在命令行中执行：npm install animate.css --save
    第二步：引入及使用：
    main.js中：
    import animated from 'animate.css' // npm install animate.css --save安装，在引入
    Vue.use(animated)
    使用：
    vue模板中：
   直接使用animated中的动画class名，注意：必须使用animated这个class名，否则动画会无效
    <div class="ty">      
      <div class="box animated bounceInDown"></div>
    </div>
    -->



    <!-- 使用animate.css的第一种写法 class="animated"也可以写到div中 -->
    <transition enter-active-class="bounceIn" leave-active-class="bounceOut" class="animated" :duraction="{enter:1000,leave:400}">
      <div v-if="flag" >我是内容</div>
    </transition>

  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background: yellow;
  div {
    width: 100%;
    height: 100px;
    background: red;
  }
  .box-enter,
  .box-leave-to {
    transform: translate(0, 1000px);
    opacity: 0;
  }

  .box-enter-to,
  .box-leave {
    opacity: 1;
  }

  .box-enter-active,
  .box-leave-active {
    transition: all 2s ease;
  }
}
</style>

