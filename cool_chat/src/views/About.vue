<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toSearch">search</button>
    <button @click="toPersonInfo">personInfo</button>
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