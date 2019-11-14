<template>
  <div id="app">
    <div id="nav" v-if="$store.state.homeNavSign">
      <div :key="item.id" v-for="item of homeNav" @click="selRoute(item)">{{item.name}}</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      homeNav: [
        {id: 1, name: "home", route: "/home"},
        {id: 2, name: "about", route: "/about"}
      ]
    }
  },
  methods: {
    selRoute(item) {
      this.$router.push({path: item.route});
    },
  },
}
</script>

<style>
html,body {
        height: 100%;
        width: 100%;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   height: 100%;
}


</style>
