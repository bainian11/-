<template>
  <div class="account">
      <header>
          <van-icon name="arrow-left" class="left" />
          <span>账号信息</span>
      </header>
      <p class="info">
        真实信息：
      </p>
      <p class="uname">
        <input type="text" placeholder="请输入真实姓名">
      </p>
      <p class="info">
        注册手机号：
      </p>
      <p class="uname">
        <input type="text" placeholder="请输入手机号">
      </p>
      <button class="btn">注册</button>
      <div class="focus">
        <p>
          注意事项：
        </p>
        <h6>1.请认真核对您的个人信息以及绑定的手机号，请务必确认所填信息真实有效</h6>
        <h6>2.如因您填写的账号出现的问题，均由您本人承担</h6>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  height: 44px;
  /* width: 100%; */
  padding-left: 15px;
  margin-bottom: 9px;
  border-bottom: 1px solid #e6e6e6;
}
header .left,span{
  font-weight: bolder;
  font-size: 17px;
  line-height: 44px;
}
header .left{
  float: left;
}
.info{
  height: 45px;
  font-size: 16px;
  line-height: 45px;
   padding-left: 15px;
   text-align: left;
}
.uname{
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  border-radius: 4px;
  background: #eeeeee;
  margin: 0px 15px 0px 15px;
}
.uname input{
  width: 100%;
  height: 44px;
  font-size: 16px;
  border: 0;
  background: #eeeeee;
}
.btn{
  margin-top: 40px;
  color: white;
  background: #cccccc;
  width: 345px;
  border: 0;
  height: 45px;
  font-size: 17px;
  border-radius: 4px;
}
.focus{
  margin-top: 16px;
}
.focus p{
  color: #999999;
  font-size: 14px;
  height: 21px;
  padding-left: 15px;
  text-align: left;
}
h6{
  text-align: left;
  padding-left: 15px;
  margin: 0;
  font-size: 13px;
  font-weight: normal;
  color: #bfbfbf;
}
</style>

