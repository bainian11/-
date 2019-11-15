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


</style>
