<template>
  <div>
    <div>
      <label for="id">Id</label>
      <input id="id" type="text" v-model="id">
      <label for="name">name</label>
      <input id="name" type="text" v-model="name">
      <button @click="add">添加</button>
      <input id="keycode" v-model="keycode" type="text">
    </div>
    <table border="1" cellspacing="0">
      <tr>
        <th>index</th>
        <th>ID</th>
        <th>Name</th>
        <th>CreateTime</th>
        <th>Action</th>
      </tr>
      <tr v-for="(item,index) in search(keycode)" :key="index">
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

