<template>
  <div id="wrap">
    <header>
      <van-icon name="arrow-left" class="header-left" />
      <span class="header-collect">我的收益</span>
      <span class="header-detail">明细</span>
    </header>
    <section>
      <div class="current">
        <!-- 收益 -->
        <div class="money-wrap">
          <div class="showmoney">
            <span class="money">￥29.99</span>
            <p class="profit">累计总提现</p>
          </div>
          <div id="shu"></div>
          <div class="showmoney">
            <span class="money">￥29.99</span>
            <p class="profit">累计总收益</p>
          </div>
        </div>
        <!-- 当前金额 -->
        <p class="b-title">当前金额</p>
        <div class="cash">¥2000</div>
        <!-- 自提 -->
        <div class="self">
          <input type="text" placeholder="请输入提现金额" />
          <span class="self-right">全提</span>
        </div>
        <!-- 提现 -->
        <div class="arrival">立即提现</div>
        <!-- 提现说明 -->
        <h6>提现说明</h6>
        <ul>
          <li>1.提现金额最低为50RMB</li>
          <li>2.提现数字需为50的整数倍</li>
          <li>3.提现到账时间为1-3个工作日</li>
          <li>4.换算比例为100金币=1RBM</li>
          <li>5.充值、平台赠送等非收益金币不可提取</li>
        </ul>
      </div>
      <!-- 账户信息 -->
      <div class="account">
        <div class="accound-header">
          <p class="b-title">账户信息</p>
          <div class="getmoney">修改</div>
        </div>
        <!-- 真实姓名 -->
        <h5 class="realname">真实姓名：</h5>
        <h5 class="realname">支付宝账号：</h5>
        <h6>注意事项</h6>
        <ul>
          <li>1.请认真核实对您的个人信息以及绑定的收款账户，请务必确认所填信息真是有效</li>
          <li>2.如因您填写的账号出现的问题，均有您本人承担</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
/* 内容 */
section {
  margin: 0 15px;
}
section .current {
  width: 100%;
  /* height: 420px; */
  margin-top: 20px;
  border-bottom: 0.5px solid #e6e6e6;
}
section .current .b-title {
  font-size: 15px;
  color: #999999;
  margin-top: 10px;
}
/* 累积总收益 */
section .current .money-wrap {
  width: 100%;
  height: 80px;
  border-radius: 2px;
  background: #e5e5e5;
  display: flex;
  align-items: center;
}
section .current .showmoney {
  float: left;
  flex-grow: 1;
  text-align: center;
}
section .current .showmoney .money {
  font-size: 14px;
  color: #1a1a1a;
}
section .current .showmoney .profit {
  font-size: 13px;
  color: #999999;
  margin-top: 2px;
}
section .current #shu {
  height: 20px;
  border: 0.5px solid #4d4d4d;
}
/* 当前金额 */
section .current .total {
  margin-top: 14px;
}
section .current .cash {
  font-size: 22px;
  color: #1a1a1a;
  margin: 10px 0;
}
/* 自提 */
section .current .self {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
section .current .self input {
  margin-left: 15px;
  outline: none;
  border: none;
  background: #f2f2f2;
}
section .current .self-right {
  margin-right: 15px;
}
section .current .arrival {
  width: 100%;
  height: 40px;
  background: #b2b2b2;
  border-radius: 2px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
}
h6 {
  margin-top: 8px;
  font-size: 12px;
  color: #999999;
}
ul {
  margin-bottom: 20px;
}
li {
  font-size: 12px;
  color: #999999;
}
/* 账户信息 */
.account {
  margin-top: 18px;
}
.accound-header {
  width: 100%;
  color: #999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.account .getmoney {
  width: 75px;
  height: 28px;
  border-radius: 11px;
  border: 1px solid #d1d1d1;
  line-height: 28px;
  text-align: center;
  font-size: 13px;
  color: #1a1a1a;
}
.account .realname{
  color: #1a1a1a;
  font-size: 17px;
}
</style>