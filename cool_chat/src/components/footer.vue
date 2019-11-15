<template>
  <van-tabbar v-model="active" active-color="#fe5367">
    <van-tabbar-item class="my-icon" route to="/Jiaoyou">
      <van-icon name="like" class="my-icon" />
    </van-tabbar-item>
    <van-tabbar-item route to="Xiaoxi">
      <van-icon name="chat" class="my-icon" />
    </van-tabbar-item>
    <van-tabbar-item route to="Geren">
      <van-icon name="manager" class="my-icon" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  }
};
</script>


<style scoped>
.my-icon {
  font-size: 23px;
  /* color: #fe5367; */
}
</style>