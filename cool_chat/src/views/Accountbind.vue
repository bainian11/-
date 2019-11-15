<template>
  <div class="accountbind">
      <header>
          <van-icon name="arrow-left" class="left" />
          <span>账号信息</span>
      </header>
        <p>
             <van-cell class="inputCss" title="手机号" is-link v-model="info" size="large" center/>
        </p>
        <div class="footer">
            绑定遇到问题？<a href="#">联系客服</a>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            info:'未绑定',
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
header {
  height: 44px;
  /* width: 100%; */
  padding-left: 15px;
  margin-bottom: 9px;
  border-bottom: 1px solid #e6e6e6;
}
header .left,header span{
  font-weight: bolder;
  font-size: 17px;
  line-height: 44px;
}
header .left{
  float: left;
}
p{
    height: 64px;
    font-size: 14px;
    line-height: 64px;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e6e6e6;
}
.inputCss .van-cell__title {
    display: flex;
    justify-content: flex-start;
    justify-items: center;
}
.footer{
    font-size: 12px;
    margin-top: 16px;
    text-align: left;
    padding-left: 15px;
}
a{
    color:blue;
    cursor: pointer;
}
</style>