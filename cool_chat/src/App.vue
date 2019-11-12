<template>
  <div id="app">
    
    <router-view/>

  <Footer></Footer>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>
