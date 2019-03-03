<template>
  <div class="page">
    <button @click="flag1=!flag1;flag2=!flag2">按钮</button>
    <transition>
      <h1 v-if="flag1" class="v-animate">这是默认的动画</h1>
    </transition>

    <!-- 给transition添加了name="my"之后就必须使用my-enter\my-leave ... -->
    <transition name="my">
      <h1 v-if="flag2" class="my-animate">这是修改v-前缀后的动画</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag1: false,
      flag2: false
    };
  }
};
</script>
<style scoped lang="less">
.page {
  width: 100%;
  height: 100%;

  .v-animate {
    color: purple;
  }
  .my-animate {
    color: red;
    width:100;
    height:200px;
    background: green;
  }
}

// 用默认的v-指令定义动画注意要加.类
// .v-enter&v-leave-to分别代表进入之前的起始位置和离开后的结束位置
.v-enter,
.v-leave-to {
  transform: translateX(300px);
  opacity: 0;
}

.v-enter-to,
.v-leave {
  // transform: translateX(-100px);
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s linear;
}

//修改v-动画前缀
.my-enter,
.my-leave-to{
  transform: translateY(300px);
  opacity:0;
}

.my-enter-to,
.my-leave{
  opacity: 1;
}

.my-enter-active,
.my-leave-active{
  transition:all 3s ease-in-out;
}

</style>


