<template>
  <div class="Video">
    <header>
      <van-icon name="arrow-left" class="left"/>
      <span>形象视频</span>
    </header>
    <section>
        <div class="content">
          <div class="content-top">
            <b>形象视频</b>          
            <span><a href="">点击更换</a></span>
            <span><van-icon name="arrow"/></span>
          </div>
        </div>
    </section>
  </div>
</template>
<style scoped>
header {
  /* width: 100%; */
  height: 42px;
  padding-left: 15px;
}
.left{
    float: left;
}
.left,span{
    display: inline-block;
    line-height: 42px;
    font-size: 16px;
}
section {
  /* width: 100%; */
  padding: 15px;
}
section .content{
  /* width: 100%; */
  background: #cccccc;
  height: 80px;
  padding: 15px;
}
.content .content-top{
  width: 345px;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
}
.content .content-top b{
 float: left;
}
.content .content-top span{
  /* display: inline-block; */
  float: right;
  vertical-align: middle;
}
</style>