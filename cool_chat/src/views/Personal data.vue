<template>
  <div class="personal">
    <ul>
      <li>
        <b class="p1">
          <van-icon name="arrow-left" class="p6" style="vertical-align: middle" />
        </b>
        <span style="font-size:24px">编辑资料</span>
      </li>
      <hr />
      <li style="height:100px;line-height:100px;">
        <span class="p1">上传头像</span>
        <span class="p2">
          <van-icon name="plus" class="p3" />
        </span>
      </li>
      <hr />
      <li>
        <span class="p1">ID</span>
        <span style="position:absolute;right:0px;">{{id}}</span>
      </li>
      <hr />
      <li>
        <span class="p1">昵称</span>
        <input type="text" />
        <van-icon name="arrow" class="p4" />
      </li>
      <hr />
      <li>
        <span class="p1">性别</span>
        <input type="text" />
        <van-icon name="arrow" class="p4" />
      </li>
      <hr />
      <li>
        <span class="p1">出生日期</span>
        <input type="text" />
        <van-icon name="arrow" class="p5" />
      </li>
      <hr />
      <li>
        <span class="p1">所在地</span>
        <input type="text" />
        <van-icon name="arrow" class="p4" />
      </li>
      <hr />
      <li style="height:80px">
        <div>
          <textarea maxlength="20" class="p7" @input="change" ref="font"></textarea>
        </div>
        <span style="float:right">{{num}}/20</span>
      </li>
      <hr />
    </ul>
    <button @click="userdata">提交</button>
  </div>
</template>
   <script>
//  import axios from 'axios';
export default {
  data() {
    return {
      id: 55555,
      num: 0
    };
  },
  //  mounted() {
  //     // 发起 ajax 请求 获取 后台数据
  //     axios.get('/goods').then((result) => {
  //         this.id = result.data;
  //     })
  // },
  methods: {
    change() {
      this.num = this.$refs.font.value.length;
    },
    userdata() {}
  }
};
</script>

   <style >
* {
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 18px;
}
input {
  outline: none;
  border: none;
  position: absolute;
  right: 0;
  text-align: right;
  padding-right: 20px;
}
.p7 {
  padding-top: 15px;
  height: 50px;
  width: 80%;
  font-size: 16px;
  line-height: 22px;
  position: absolute;
  left: 0;
  outline: none;
  border: none;
}
li {
  height: 50px;
  line-height: 50px;
}
.personal {
  margin-left: 10px;
  margin-right: 10px;
}
.p1 {
  float: left;
}
.p2 {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 25px;
}
.p3 {
  position: absolute;
  left: 0;

  right: 0;
  bottom: 18px;
}
.p4 {
  position: absolute;
  top: 18px;
  right: 0px;
}
.p5 {
  position: absolute;
  top: 15px;
  right: 0px;
}
.p6 {
  font-size: 30px;
}
button {
  width: 80px;
  height: 40px;
  background-color: pink;
  margin-top: 20px;
}
</style>

  

