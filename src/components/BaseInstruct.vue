<template>
  <div>
    <div v-cloak>{{cloak}}</div>
    <h2 v-text="msg" ></h2>
    <div v-html="html"></div>
    <div v-bind:title="title">v-bind:title后边的内容会被当做js表达式来解析; v-bind:title简写为 :title”</div>
    <h2 @click="alert">click me</h2>
    <input type="button" v-model="model" @click="openInterval">
    <input type="button" value="关闭定时器" @click="closeInterval">
  </div>
</template>
<script>
export default {
  data() {
    return {
      cloak: "我是v-cloak渲染的，为了解决插值表达式闪烁的问题",
      msg: "这是v-text渲染的",
      html: "<h2>我是v-html渲染的</h2>",
      title: "我是v-bind-title绑定的动态属性",
      model: "使用定时器",
      interval: null
    };
  },
  methods: {
    alert() {
      alert("v-on:click绑定可以简写为“@click”");
      console.log(this);
    },
    openInterval: function() {
      // 注意定时器中使用（）=｛｝不然指向window
      if (this.interval != null) return;
      this.interval = setInterval(() => {
        let start = this.msg.substring(0, 1);
        let end = this.msg.substring(1);
        this.msg = end + start;
      }, 500);
    },
    closeInterval() {
      console.log(this);
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>
<style scoped>
</style>


