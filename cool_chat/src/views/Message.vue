<template>
<<<<<<< HEAD
  <div>333</div>
=======
  <div class="wrap">
    <h3>消息</h3>
    <div class="info">
      <van-icon name="volume" size="30px" class="icon" />&nbsp;&nbsp;
      <span>通知</span>
    </div>
    <div class="call">
      <van-icon name="phone" size="30px" class="icon" />&nbsp;&nbsp;
      <span>通话</span>
    </div>
    <div class="visit">
      <van-icon name="friends" size="30px" class="icon" />&nbsp;&nbsp;
      <span>来访</span>
    </div>
    <h2>聊天消息</h2>
    <p>聊天消息手动查看途径:打开app→首页→最近联系过的人(聊天消息列表) ，即可查看</p>
    <div class="looknow" >立即查看</div>
  </div>
>>>>>>> bfbf97beffb51a757da40a514c610f17ac5edda1
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Message",
  components: {},
  methods: {
   
  }
};
</script>

<style scoped>
.wrap {
  margin-left: 15px;
  margin-right: 15px;
}

h3 {
  margin: 0;
  height: 59px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 50px;
}

.info {
  width: 165px;
  height: 50px;
  float: left;
  background: linear-gradient(to right, #fe4b68, #ff8c5f);
  border-radius: 3px;
  color: white;

  font-size: 14px;
}
.call {
  width: 165px;
  height: 50px;
  float: right;
  background: linear-gradient(to right, #2b68d9, #33a9ff);
  border-radius: 3px;
  color: white;
  font-size: 14px;
}
.visit {
  width: 100%;
  height: 50px;
  float: right;
  background: linear-gradient(to right, #673db6, #ae57ff);
  border-radius: 3px;
  margin-top: 15px;
  color: white;
  font-size: 14px;
}
.icon {
  display: inline-block;
  line-height: 50px;
}

span {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  vertical-align: top;
}

h2 {
  float: left;
  margin-top: 30px;
  font-size: 20px;
  text-align: left;
}
p {
  margin: 0;
  width: 100%;
  float: left;
  font-size: 13px;
  color: #cccccc;
  text-align: left;
}
.looknow {
  width: 240px;
  height: 55px;
  position: absolute;
  background: linear-gradient(to right, #fe4b68, #ff8c5f);
  bottom: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 50px;
  color: white;
  line-height: 55px;
  font-size: 16px;
}
</style>