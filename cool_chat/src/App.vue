<template>
  <div id="app">

    
    <router-view/>

  <Footer v-if="$store.state.homeNavSign"></Footer>


  </div>
  
</template>
<script>
// import Xiaoxi from './views/Xiaoxi/Xiaoxi.vue'
import Footer from './components/footer.vue'
export default {
  
  components:{
    // Xiaoxi,
    Footer
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
/* #nav {
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
} */

/* #app .my-icon {
  font-size: 23px;
} */

</style>
