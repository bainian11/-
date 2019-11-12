<template>
  <div>
    <div class="header">
      <p>交友</p>
      <div class="look">只看异性</div>
    </div>
    <div id="nav">
      <van-tabs v-model="activeName" class="tab" swipeable sticky animated :offset-top=40>
        <van-tab title="红人" name="a">
          <div class="main-content">
            <!-- <div class="pic"></div> -->
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </van-tab>

        <van-tab title="活跃" name="b">
          <div class="main-content"></div>
        </van-tab>

        <van-tab title="新面孔" name="c">
          <div class="main-content"></div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a",
    };
  }
};
</script>

<style scoped>
#nav {
  /* padding: 15px; */
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.header p {
  font-size: 17px;
  width: 34px;
  height: 17px;
  display: inline-block;
  text-align: center;
  line-height: 17px;
  margin-left: 79px;
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
  padding-top: 100px;
  width: 100%;
  /* height: 1200px; */
  background: #fe5367;
  background: url(../../assets/bg-1.jpg) no-repeat 0 0;
  background-size: auto 100px;
  overflow: auto;
}

.main-content li {
    width: 50%;
    height: 240px;
    list-style: none;
    float: left;
}

.tab {
  width: 100%;
  margin-top: 40px;

}

.pic {
  width: 100%;
  height: 800px;
  background: #42b983;
  margin-top: 100px;
}
</style>