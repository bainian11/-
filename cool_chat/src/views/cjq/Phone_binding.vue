<template>
  <div>
    <div class="head">
      <van-icon name="arrow-left" />
      <div class="title">手机号绑定</div>
    </div>
    <input type="text" class="number" placeholder="请输入手机号" />
    <div class="check">
      <input type="text" class="code" placeholder="请输入验证码" />
      <span class="get">立即获取</span>
    </div>
    <div class="finish">完成</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.head {
  width: 100%;
  height: 45px;
  border-bottom: 0.5px solid #e6e6e6;
}
.van-icon {
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
}
.number {
  width: 345px;
  height: 50px;
  position: absolute;
  top: 60px;
  left: 15px;
  font-size: 15px;
  line-height: 50px;
  background: #f2f2f2;
  border: none;
  text-indent: 2em;
  border-radius: 5px 5px;
}
.check {
  width: 345px;
  height: 50px;
  position: absolute;
  top: 125px;
  left: 15px;
  font-size: 15px;
  line-height: 50px;
}
.code {
    width: 250px;
    height: 100%;
    float: left;
    border: none;
    background: #f2f2f2;
    text-indent: 2em;
  border-radius: 5px 5px;
}
.get {
    display: inline-block;
    width: 90px;
    height: 100%;
    color: #fff;
    border-radius: 5px 5px;
    background:linear-gradient(to right,#fe4c68,#ff8a5f);
  
}
.finish {
    width: 345px;
    height: 50px;
    position: absolute;
    top: 215px;
    left: 15px;
    background: #b2b2b2;
    border-radius: 5px 5px;
    font-size: 16px;
    color: #fff;
    line-height: 50px;
}
</style>