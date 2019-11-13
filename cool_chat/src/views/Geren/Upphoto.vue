<template>
  <div id="app">
    <header>
      <van-icon name="arrow-left" class="header-left" />
      <span class="header-collect">我的相册</span>
      <span class="header-detail">选择</span>
    </header>
    <section>
      <div class="up" @click='photo'>
        <van-icon name="plus" />
        <p>上传照片</p>
      </div>
      <div class="up">
        <van-icon name="plus" />
        <p>形象视频</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Photo",
  methods:{
    photo(){
      this.$router.push('/photo');
    }
  }
};
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
  margin-left: 0px;
  flex-grow: 1;
}
header .header-collect {
  flex-grow: 4;
  font-size: 16px;
  text-align: center;
  margin-left: 20px;
}
header .header-detail {
  font-size: 16px;
  color: #999999;
  flex-grow: 1;
  text-align: right;
  margin-right: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
}
section .up {
  width: 94px;
  height: 94px;
  background: #e5e5e5;
  margin-right: 1.5px;
  float: left;
  color: #1a1a1a;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section .van-icon-plus {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 10px;
  font-weight: 700;
}
</style>