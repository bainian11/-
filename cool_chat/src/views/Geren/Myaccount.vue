<template>
  <div id="app">
    <header>
      <van-icon name="arrow-left" class="header-left" @click="back"/>
      <span class="header-collect">我的账户</span>
      <span class="header-detail"></span>
    </header>
    <!-- 余额 -->
    <div class="balance">
      <p class="title">余额</p>
      <h5>{{$route.params.money}}金币</h5>
    </div>
    <!-- 套餐 -->
    <p class="title">套餐</p>
    <ul class="select">
      <li>
        <div class="setname">套餐一</div>
        <div class="discount">100积分</div>
        <div class="setmoney">¥9.99</div>
      </li>
      <li>
        <div class="setname">
          套餐二
          <div class="more more-red">新享</div>
        </div>
        <div class="discount">买200金币获××积分</div>
        <div class="setmoney">¥29.99</div>
      </li>
      <li>
        <div class="setname">
          套餐三
          <div class="more more-blue">超值</div>
        </div>
        <div class="discount">买600金币获××积分</div>
        <div class="setmoney">¥59.99</div>
      </li>
      <li>
        <div class="setname">套餐四</div>
        <div class="discount">买900金币获××积分</div>
        <div class="setmoney">¥99.99</div>
      </li>
    </ul>
    <footer>
        <span>充值遇到问题？点击<a href="">联系客服</a></span>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Account",
  data() {
    return {};
  },
  methods:{
    back(){
      this.$router.push({path:'/Geren'})
    }
  },
  mounted() {}
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,html{
height: 100%;
}
#app{
    margin: 0 15px;
    position: relative;
    text-align: left;
}
header {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
  border-bottom: solid 0.5px #e6e6e6;
  align-items: center;
}
header .header-left {
  font-size: 20px;
  margin-left: 15px;
  flex-grow: 1;
}
header .header-collect {
  flex-grow: 4;
  font-size: 16px;
  text-align: center;
}
header .header-detail {
  font-size: 16px;
  color: #999999;
  flex-grow: 1;
  text-align: right;
  margin-right: 15px;
}
/* 余额 */
.balance{
    height: 70px;
    padding-bottom: 25px;
      border-bottom: solid 1px #e6e6e6;
}
.title{
    margin-top: 25px;
    margin-bottom: 3px;
    font-size: 15px;
    color: #999999;
}
.balance h5{
    font-size: 23px;
    color: #1a1a1a;
}
/*  */
.select li{
    height: 66px;
    background: #e5e5e5;
    border-radius: 2px;
    margin-top: 15px;
    font-size: 15px;
    position: relative;
    padding: 15px;;
}
.select li .discount{
    font-size: 13px;
    color: #999;
    margin-top: 3px;
}
.select li .setmoney{
    width: 80px;
    height: 35px;
    position: absolute;
    right: 15px;
    top: 15px;
    color: #fff;
    border-radius: 15px;
    line-height: 35px;
    text-align: center;
    background: linear-gradient(to right, #fe4c68, #ff8a5f);
}
.setname{
    width: 90px;
    position: relative;
}
.more{
    width: 36px;
    height: 18px;
    color: #fff;
    border-radius: 3px 7px 3px 7px;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0
}
.more-blue{
  background: linear-gradient(to right, #591ed2, #704bfb);
}
.more-red{
    background: linear-gradient(to right, #fe4c68, #ff8a5f);
}
/* footer */
footer{
    margin-top: 15px;
    font-size: 13px;
    color: #999;
    text-align: center;
}


</style>