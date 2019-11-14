<template>
  <div class="wrap">
    <div class="title">
      <van-icon name="arrow-left" class="icon" @click="back"/>通知
    </div>
    <ul>
      <li v-for="info of infos" :key="info.id">
        <div class="time">{{info.time}}</div>
        <p class="txt">{{info.txt}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Inform",
  data() {
    const infos = [
      { id: 1, time: "12:34", txt: "阿斯利康打瞌睡傻大姐沙龙的撒的就撒了家收到了按实际卡视角的" },
      { id: 2, time: "15:34", txt: 333 },
      { id: 3, time: "17:34", txt: 333 }
    ];
    infos.reverse();
    return { infos };
  },
  components: {},
  methods: {
    back(){
        this.$router.push({path:'/Xiaoxi'})
    }
  },
  mounted(){
    console.log(this.$route.query.shopid)
  }

};
</script>

<style scoped>
.title {
  height: 39px;
  border-bottom: 0.5px #e6e6e6 solid;
  font-size: 17px;
  line-height: 39px;
  font-weight: 500;
}

.icon {
  position: absolute;
  left: 10px;
  display: inline-block;
  line-height: 40px;
}

.time{
    height:40px;
    font-size: 13px;
    color:#a9a9a9;
    line-height: 40px;
}

.txt{
    /* height: 66px; */
    background: #e5e5e5;
    margin: 0 15px;
    border-radius: 5px;
    font-size: 13px;
    text-align: left;
    padding: 15px;
}
</style>