<template>
  <div class="app">
    <header>
      <van-icon name="arrow-left" class="header-left" @click="back"/>
      <span class="header-collect">我的相册</span>
      <span class="header-detail">选择</span>
    </header>
    <van-uploader v-model="fileList" multiple style="float:left;margin-left:20px"/>
  </div>
</template>
<script>
export default {
  name: "photo",
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }

      return true;
    },

    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== "image/jpeg") {
          Toast("请上传 jpg 格式图片");
          reject();
        } else {
          resolve();
        }
      });
    },

    back(){
      this.$router.push({path:'/upphoto'})
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
  margin-bottom: 15px;
}
.van-uploader {
  margin-top: 8px;
}
</style>