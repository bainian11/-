<template>
  <div class="about">
<<<<<<< HEAD
  
     <router-link to="/Personal data">个人资料</router-link>
=======
    <h1>This is an about page</h1>
    <button @click="toSearch">search</button>
    <button @click="toPersonInfo">personInfo</button>
>>>>>>> c834caeee566ec96bda61af0a2203758e1ad048f
  </div>
</template>

<script>
export default {
  methods: {
    toSearch() {
      this.$router.push({path: "/search"});
    },
    toPersonInfo(){
      this.$router.push({path: "/personInfo"});
    }
  },
}
</script>