<template>
  <!-- 密码输入框 -->

  <!-- 数字键盘 -->
  <div class="content">
    <van-icon name="arrow-left" />
    <h2 class="title">输入验证码</h2>
    <p>12345678900</p>
    <!-- <van-password-input
      :value="value"
      info="密码为 6 位数字"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />-->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
    <van-password-input
      :value="value"
      :mask="false"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <span class="send">重新发送 &nbsp;60</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "123456",
      showKeyboard: true
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>
<style scoped>
.content {
  position: relative;
}
.van-icon {
  position: absolute;
  top: 50px;
  left: 20px;
  font-size: 30px;
  color: #000;
}
h2 {
  font-size: 23px;
  color: #000;
  position: absolute;
  top: 90px;
  left: 20px;
}
p {
  font-size: 12px;
  color: #999999;
  position: absolute;
  top: 140px;
  left: 20px;
}
.van-password-input {
  position: relative;
  top: 180px;
  -webkit-user-select: none;
  user-select: none;
}
.van-password-input__security li {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 50px;
  width: 47px;
  background: #f2f2f2;
  font-size: 30px;
  line-height: 1.33333rem;
  text-align: center;
  margin: 0px 3px;
  border-radius: 3px 3px;
  color: #000;
}
.van-hairline--surround::after {
  border-width: 0;
}
.send {
  display: inline-block;
  width: 330px;
  height: 50px;
  background: #b2b2b2;
  color: #fff;
  position: relative;
  top: 210px;
  line-height: 50px;
  border-radius: 5px 5px;
  font-size: 15px;
}
</style>