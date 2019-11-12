<template>
  <div id="app">
<<<<<<< HEAD
    <router-link to="/myincome"></router-link>
    <router-link to="/my/myaccount"></router-link>
    <!-- <router-link :to="'/my/1'"></router-link> -->
    <router-view />
=======
    <!-- <div class="header">
      <p>交友</p>
      <div class="look">只看异性</div>
    </div>
    <div id="nav">
<<<<<<< HEAD
      <router-link class="nav-left" to="/">红人</router-link>
      <router-link to="/about">活跃</router-link>
      <router-link class="nav-right" to="/Message">新面孔</router-link>
=======
>>>>>>> bfbf97beffb51a757da40a514c610f17ac5edda1
    </div>

    <div class="main-content">
    <router-view/>

    </div>

    <van-tabbar v-model="active" active-color="#fe5367">
      <van-tabbar-item class="my-icon">
        <router-link to="/Jiaoyou">
          <van-icon name="like" class="my-icon" />
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link to="/Xiaoxi">
          <van-icon name="chat" class="my-icon" />
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link to="/Geren">
          <van-icon name="manager" class="my-icon" />
        </router-link>
      </van-tabbar-item>
    </van-tabbar> -->


>>>>>>> db53e4572d4eec68b0cbcfd17431015dc3a7fe66
  </div>
</template>
<script>
import Xiaoxi from './views/Xiaoxi/Xiaoxi.vue'
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  component:{
    Xiaoxi
  }
};
</script>
<style>
<<<<<<< HEAD
=======
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

<<<<<<< HEAD
#nav {
  padding: 15px;
  font-size: 15px;
}

#nav .nav-left {
  float: left;
  margin-left: 47px;
}

#nav .nav-right {
  float: right;
  margin-right: 47px;
}
=======
>>>>>>> bfbf97beffb51a757da40a514c610f17ac5edda1

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  width: 100%;
  height: 40px;
  background: white;
}

.header p {
  font-size: 17px;
  width: 34px;
  height: 17px;
  display: inline-block;
  text-align: center;
  line-height: 17px;
  margin-left: 70px;
}

.look {
  width: 65px;
  height: 25px;
  background: #fe5367;
  float: right;
  margin-top: 10px;
  font-size: 12px;
  line-height: 27px;
  color: white;
  border-radius: 20px;
  margin-right: 15px;
}

.main-content {
  width: 100%;
  height: 524px;
  /* background: #fe5367; */
  background: url(../src/assets/bg-1.jpg) no-repeat 0 0;
  background-size: auto 100px;
}

#app .my-icon {
  font-size: 23px;
  /* color: #fe5367; */
}
>>>>>>> db53e4572d4eec68b0cbcfd17431015dc3a7fe66
</style>
