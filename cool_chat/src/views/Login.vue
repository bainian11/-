<template>
  <div class="about">
    <header>
      <van-icon name="arrow-left" class="left" />
    </header>
    <h1>验证码登录</h1>
    <p>
      <van-field
        readonly
        clickable
        :value="value"
        @touchstart.native.stop="show = true"
        class="Tel"
        placeholder="请输入手机号"
      />
    </p>
    <div class="yzm">
      <input type="text" placeholder="请输入验证码" />
    </div>
    <p class="n-yzm">
      <span @click="createCode()">换一张</span>
      <b>{{code}}</b>
    </p>
    <p>
      <button class="btn" @click="jiaoyou">登录/注册</button>
    </p>
    <van-number-keyboard v-model="value" :show="show" :maxlength="11" @blur="show = false" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value: "",
      code: "Z7GB"
    };
  },
  methods: {
    createCode() {
      let code = "";
      let codeLength = 4;
      let random = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      for (let i = 0; i < codeLength; i++) {
        let index = Math.floor(Math.random() * 36);
        code += random[index];
        this.code = code;
      }
    },
    jiaoyou() {
      this.axios
        .get("/register", {
          params: {
            phone: this.value
          }
        })
        .then(result => {
          if (result.data) {
            // 存在
            let storage = window.localStorage;
            // setitem()参数1：key，参数2：value
            storage.setItem("phone", this.value);
            this.$router.push({ path: "/Jiaoyou", query: result.data.userId });
            console.log(result.data);
          } else {
            //不存在
            this.$router.push({ path: "/sex", query: result.data.phone });
            console.log(result.data);
          }
        });
    }
  }
};
</script>
<style scoped>
header {
  height: 42px;
  /* width: 100%; */
  padding-left: 15px;
}
header .left {
  font-weight: bolder;
  font-size: 22px;
  float: left;
  line-height: 42px;
}
h1 {
  height: 45px;
  line-height: 45px;
  font-size: 23px;
  float: left;
  padding-left: 15px;
}
p {
  height: 49px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  top: 60px;
  padding: 8px 15px 0px 15px;
}
.Tel {
  height: 49px;
  padding-top: 12px;
  background: #eeeeee;
  top: -52px;
  border-radius: 4px;
}
.yzm {
  height: 49px;
  position: relative;
  top: 80px;
  padding: 8px 15px 13px 15px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  margin: 0px 15px 0px 15px;
  background: #cccccc;
  border-radius: 4px;
}
input {
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  border: 0;
  background: #cccccc;
  font-size: 14px;
}
.n-yzm {
  display: flex;
  margin-top: 60px;
}
.n-yzm span,
b {
  font-size: 18px;
  flex: 1;
  line-height: 49px;
  border-radius: 4px;
}
.n-yzm b {
  background: yellow;
  margin-left: 15px;
}
.btn {
  width: 100%;
  color: #fff;
  background: linear-gradient(to right, #fe4c68, #ff8a5f);
  border: 0;
  height: 49px;
  border-radius: 5px;
}
</style>