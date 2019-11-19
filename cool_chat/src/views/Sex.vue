<template>
  <div class="sex">
    <header>
      <van-icon name="arrow-left" class="left" @click="yzm"/>
    </header>
    <h1>性别选择</h1>
    <section>
      <div>
        <div class="detail">
          <p :key="item.id" v-for="item of src111">
            <img @click="change(item)" :src="item.src" ref="changesrc" />
            <span>{{item.sex}}</span>
          </p>
        </div>
          <p>
            <button class="btn" style="color:#fff" @click="wanshan">下一步</button>
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
        { id: 0, src: "./img/women.png", sex: "女" },
        { id: 1, src: "./img/man.png", sex: "男" }
      ],
      sureSex:undefined
    };
  },
  methods: {
    change(item) {
      let that = this;
      console.log(item.id);
      // console.log(that.$refs.changesrc.src);
      if (item.id === 0) {
        that.src111 = [
          { id: 0, src: "./img/nwomen.png", sex: "女" },
          { id: 1, src: "./img/man.png", sex: "男" }
        ];
        that.sureSex=0;
      } else if (item.id === 1) {
        that.src111 = [
          { id: 0, src: "./img/women.png", sex: "女" },
          { id: 1, src: "./img/nman.png", sex: "男" }
        ];
        that.sureSex=1;
      }
    },
    yzm(){
      this.$router.push('/login')
    },
    wanshan() {
      this.$router.push({path:'/complete/',query:this.sureSex})
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