<template>
  <div class="sex">
    <header>
      <van-icon name="arrow-left" class="left" />
    </header>
    <h1>性别选择</h1>
    <section>
      <div>
        <div class="detail">
          <p :key="item.id" v-for="item of src111">
            <img @click="change(item)" :src="item.src" ref="changesrc" />
            <span>{{item.sex}}</span>
          </p>
          <!-- <p>
            <img @click="change(event)" :src="src111[1].srcm" alt ref="changesrc"/>
            <span>男士</span>
          </p>-->
        </div>
        <p>
          <button class="btn">登录</button>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src111: [
        { id: 111, src: "./img/women.png", sex: "女" },
        { id: 222, src: "./img/man.png", sex: "男" }
      ]
    };
  },
  methods: {
    change(item) {
      let that = this;
      console.log(item.id);
      // console.log(that.$refs.changesrc.src);
      if (item.id === 111) {
        that.src111 = [
          { id:111,src: "./img/nwomen.png", sex: "女" },
          { id:222,src: "./img/man.png", sex: "男" }
        ]
      }else if(item.id === 222){
        that.src111 = [
          { id:111,src: "./img/women.png", sex: "女" },
          { id:222,src: "./img/nman.png", sex: "男" }
        ]
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
  height: 42px;
  line-height: 42px;
  font-size: 23px;
  padding-left: 15px;
  text-align: left;
  margin-bottom: 18px;
}
section {
  margin-top: 10px;
}
section img {
  width: 91px;
  height: 91px;
  margin-bottom: 5px;
  margin-left: 50px;
}
.detail {
  display: flex;
  margin-bottom: 86px;
}
section p {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}
.detail p span {
  height: 55px;
  font-size: 15px;
  line-height: 55px;
}
.btn {
  border: 0;
  border-radius: 4px;
  background: #fe5c66;
  margin: 0px 27px 0 27px;
  height: 45px;
}
</style>