<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Message">Message</router-link>|
      <router-link to="/vedio">Vedio</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
      <router-link to="/code"></router-link> 
      <!-- <router-link to="/code"></router-link> 
      <router-link to="/phone_binding"></router-link>
      <router-link to="/set_up"></router-link>
      <router-link to="/visited"></router-link>
    <router-link to="/myincome"></router-link>
    <router-link to="/my/myaccount"></router-link> -->
    <router-view />
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
html,body {
        height: 100%;
        width: 100%;
    }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
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
</style>
