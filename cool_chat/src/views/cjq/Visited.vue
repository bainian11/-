<template>
  <div>
    <div class="head">
      <van-icon name="arrow-left" />
      <div class="title">来访</div>
    </div>
    <van-tabs bind:click="onClick">
      <van-tab title="来访">
        <div class="list">
          <div class="left">
            <span class="photo"></span>
          </div>
          <div class="right">
            <div class="right-top">
              <div class="name">Edward</div>
              <div class="sex">♂23</div>
            </div>
            <div class="right-bottom">
              <span class="date">2019/08/12</span>
              <span class="visit">来访</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="去访">
          <div class="list">
          <div class="left">
            <span class="photo"></span>
          </div>
          <div class="right">
            <div class="right-top">
              <div class="name">Edward</div>
              <div class="sex">♂23</div>
            </div>
            <div class="right-bottom">
              <span class="date">2019/08/12</span>
              <span class="visit">去访</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {};
</script>

<style>
#app {
  text-align: left;
}
.head {
  width: 100%;
  height: 45px;
  border-bottom: 0.5px solid #e6e6e6;
}
.head .van-icon {
  position: absolute;
  left: 15px;
  line-height: 45px;
  font-size: 18px;
  font-weight: 900;
}
.title {
  font-size: 18px;
  color: #000;
  line-height: 45px;
  text-align: center;
}
.list {
  height: 80px;
  margin-left: 15px;
  border-bottom: 0.5px solid #e6e6e6;
  position: relative;
}
.left {
  height: 100%;
  width: 65px;
  float: left;
}
.right {
  height: 100%;
  float: left;
}
.photo {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: darkblue;
  margin-top: 15px;
  margin-left: 0;
}
.name {
  display: inline-block;
  font-size: 14px;
  color: #000;
  margin-top: 20px;
}
.right-top {
  height: 47px;
}
.right-bottom {
    line-height: 10px;
}
.sex {
  display: inline-block;
  background: #3979fd;
  font-size: 8px;
  width: 30px;
  height: 13px;
  line-height: 13px;
  margin-top: 18px;
  margin-left: 8px;
  text-align: center;
  border-radius: 2px 2px;
}
.date {
  font-size: 10px;
  color: #a9a9a9;
}
.visit {
  font-size: 10px;
  color: #a9a9a9;
  margin-left: 10px;
}
</style>