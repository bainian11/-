<template>
  <div id="app">
      <router-link to="/code"></router-link> 
      <router-link to="/phone_binding"></router-link>
      <router-link to="/set_up"></router-link>
      <router-link to="/visited"></router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
