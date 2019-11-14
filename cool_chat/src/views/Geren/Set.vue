<template>
  <div>
    <div class="head">
      <van-icon name="arrow-left" @click="backto"/>
      <div class="title">设置</div>
    </div>
    <div class="content">
      <div class="list">
        <span class="text">绑定推荐人</span>
        <van-icon name="arrow" />
      </div>
      <div class="list">
        <span class="text">美颜效果</span>
        <van-icon name="arrow" />
      </div>
      <div class="list">
        <span class="text">关于我们</span>
        <van-icon name="arrow" />
      </div>
      <div class="list">
        <span class="text">清除缓存</span>
        <span class="cache">25M&nbsp;立即清理</span>
      </div>
      <div class="list">
        <span class="text">退出账号</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backto(){
        this.$router.push({path:'/Geren'})

    }
  }
};
</script>

<style scoped>
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
}
/* .content {
    position: relative;
} */
.list {
  width: 360px;
  height: 65px;
  border-bottom: 0.5px solid #e6e6e6;
  margin-left: 15px;
  line-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  display: inline-block;
  height: 100%;
  font-size: 14px;
  color: #000;
}
.list .van-icon {
   margin-right: 15px;
   font-size: 9px;
   color: #b3b3b3;
}
.cache {
     display: inline-block;
  height: 100%;
  font-size: 14px;
  color: #000;
  margin-right: 15px;
}
</style>