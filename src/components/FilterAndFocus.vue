<template>
  <div>
    <div>
      <label for="id">Id</label>
      <input id="id" type="text" v-model="id">
      <label for="name">name</label>
      <input id="name" type="text" v-model="name">
      <button @click="add">添加</button>
      <!-- 自定义指令传值时注意如果是一个字符串注意打引号 -->
      <input id="keycode" v-fontWeight="900" v-model="keycode" type="text" v-focus v-color v-size v-bgcolor="'yellow'">
    </div>
    <table border="1" cellspacing="0" >
      <tr >
        <th>index</th>
        <th>ID</th>
        <th>Name</th>
        <th>CreateTime</th>
        <th>Action</th>
      </tr>
      <tr v-for="(item,index) in search(keycode)" :key="index" v-fontWeight="200">
        <td>{{index}}</td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{$moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}}</td>
        <td>
          <a href="javascript:;" @click.prevent="del(index)">删除</a>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      keycode: "",
      list: [
        { id: 1, name: "rose", createTime: 1 },
        { id: 2, name: "jack", createTime: 2 }
      ]
    };
  },
  // 私有的自定义指令,私有的带s,是一个对象，使用时必须带v- 写法和filters一样
  directives: {
    // 自定义指令定义颜色
    color: {
      //color是指令名字
      bind(el) {
        el.style.color = "red"; //样式不需要在inserted时使用,el是一个原生dom对象，生成的是内联样式
      },
      inserted() {},
      updated() {}
    },
    // 定义文字大小
    size: {
      bind(el) {
        el.style.fontSize = "30px";
      }
    },
    // 定义背景颜色
    bgcolor: {
      bind(el, bindValue) {
        console.log(bindValue);
        // 输出如下信息
        // def: {bind: ƒ}
        // expression: "'yellow'"
        // modifiers: {}
        // name: "bgcolor"
        // rawName: "v-bgcolor"
        // value: "yellow"

        el.style.background = bindValue.value;
      }
    },
    // 自定义指令的简写形式,函数形式的写法，相当于同时注册了bind & updated方法 ,更新时能看到效果
    fontWeight: function(el, binding) {
      // console.log(binding)
      el.style.fontWeight=parseInt(binding.value);
    }
  },

  methods: {
    add: function() {
      if (this.name == "" || this.id == "") {
        return;
      }
      console.log("add");
      this.list.unshift({
        id: this.id,
        name: this.name,
        createTime: new Date().getTime()
      });
      this.name = "";
      this.id = "";
    },
    del: function(index) {
      this.list.splice(index, 1);
    },
    search(keycode) {
      return this.list.filter(item => {
        return item.name.indexOf(this.keycode) != -1;
      });
    }
  },
  created() {
    // console.log(this.$refs.focusInput) //内存中的模板尚未插入到页面中，无法拿到dom
  },
  mounted() {
    // console.log(this.$refs.focusInput); //内存中的模板已经插入到页面中，可以拿到原生的dom对象
  }
};
</script>

<style scoped lang="less">
input {
  padding: 30px;
}
button {
  padding: 10px 20px;
}
table {
  margin: 100px auto;
  background: #fff;
  tr {
    th,
    td {
      padding: 30px;
    }
  }
}
</style>

