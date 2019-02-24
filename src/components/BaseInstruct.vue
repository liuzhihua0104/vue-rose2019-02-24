<template>
  <div>
    <div v-cloak>{{cloak}}</div>
    <div v-text="msg"></div>
    <div v-html="html"></div>
    <div v-bind:title="title">v-bind:title后边的内容会被当做js表达式来解析; v-bind:title简写为 :title”</div>
    <h2 @click="alert">click me</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cloak: "我是v-cloak渲染的，为了解决插值表达式闪烁的问题",
      msg: "这是v-text渲染的",
      html: "<h2>我是v-html渲染的</h2>",
      title: "我是v-bind-title绑定的动态属性"
    };
  },
  methods: {
    alert() {
      alert("v-on:click绑定可以简写为“@click”");
      console.log(this)
    }
  }
};
</script>
<style scoped>
</style>


