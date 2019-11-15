<template>
  <div class="advice">
    <header>
      <van-icon name="arrow-left" class="left" />
      <span>意见反馈</span>
      <span class="right">提交</span>
    </header>
    <div class="content">
      <textarea name id cols="30" rows="10" v-model="value"></textarea>
    </div>
    <div class="updata">
      <van-uploader v-model="fileList" multiple />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:
        "有什么意见或者建议，或者有什么疑问要和我们交流的，都可以反馈给我们哟",
        fileList: [
        
      ]
    };
  },
};
</script>

<style scoped>
header {
  height: 44px;
  /* width: 100%; */
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 9px;
  border-bottom: 1px solid #e6e6e6;
}
header .left,
span {
  font-weight: bolder;
  font-size: 17px;
  line-height: 44px;
}
header .left {
  float: left;
}
header .right {
  float: right;
  font-weight: normal;
}
.content {
  padding: 15px;
  border-bottom: 1px solid #e6e6e6;
}
textarea {
  border: 0;
  font-size: 14px;
  color: #b8b8b8;
  display: block;
  width: 100%;
}
.updata{
  text-align: left;
  margin-top: 10px;
  padding-left: 15px;
}
</style>