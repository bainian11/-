<template>
  <div>
    <div class="title-b">
      <van-icon name="arrow-left" class="icon-b" @click="back" />
      <p class="head-b">黑名单</p>
    </div>
    <div class="main">
      <li>
        <div class="head-x"></div>
        <p class="name">萧山吴彦祖</p><div class="sex-b">26</div><br>
        <p class="date">2019/11/11</p>
        <div class="delete">移除</div>
      </li>
      <li>
        <div class="head-x"></div>
        <p class="name">萧山吴彦祖</p><div class="sex-b">26</div><br>
        <p class="date">2019/11/11</p>
        <div class="delete">移除</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Black",
  methods: {
    back() {
      this.$router.push({ path: "/Geren" });
    }
  }
};
</script>

<style scoped>
.title-b {
  height: 39px;
  border-bottom: 0.5px #e6e6e6 solid;
  font-size: 17px;
  line-height: 39px;
  font-weight: 500;
}
.icon-b {
  display: inline-block;
  line-height: 40px;
  float: left;
  margin-top: 2px;
  margin-left: 10px;
}
.title-b .head-b {
  display: inline-block;
  /* height: 39px; */
  line-height: 39px;
  margin: 0;
  text-indent: -10px;
}
.main {
  width: 100%;
  margin-top: 10px;
  padding: 0 0 0 20px;
  box-sizing: border-box;
}
.main li {
  height: 80px;
  padding: 0 10px;
  border-bottom: 0.5px #e6e6e6 solid;
  list-style: none;
  overflow: hidden;
  position: relative;
}
.head-x {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: gray;
  margin-top: 12px;
  float: left;
}
.name {
  display: inline-block;
  float: left;
  font-size: 15px;
  margin-left: 15px;
}
.sex-b {
  width: 32px;
  height: 15px;
  background: #2b6cdb; 
  float: left;
  margin-left: 6px;
  border-radius: 3px;
  color: white;
  font-size: 10px; 
  line-height: 15px;
  margin-top: 16px;
}
.date {
  float: left;
  font-size: 11px;
  color: #999;
  position: absolute;
  left: 72px;
}
.delete {
  color: white;
  /* background: #fe5267; */
  background: linear-gradient(to right, #fe4c68, #ff8a5f);
  height: 28px;
  width: 60px;
  border-radius: 14px;
  position: absolute;
  right: 15px;
  font-size: 13px;
  line-height: 30px;
  top: 18px;
}
</style>