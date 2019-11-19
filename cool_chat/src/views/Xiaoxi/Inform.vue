<template>
  <div class="wrap">
    <div class="title">
      <van-icon name="arrow-left" class="icon" @click="back" />通知
    </div>
    <ul>
      <li v-for="(message,index) of messages" :key="index">
        <div class="time">{{message.mTime}}</div>
        <p class="txt">{{message.message}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Inform",
  data() {
    const messages = [];
    messages.reverse();
    return {
      messages,
      uid: {
        userId: 31231414
      }
    };
  },
  components: {},
  methods: {
    back() {
      this.$router.push({ path: "/Xiaoxi" });
    }
  },
  created() {
    this.axios({
      url: "/inform",
      params: {
        userId: 31231414
      },
      methods: "get"
    }).then(res => {
      console.log(res.data);
      this.messages = res.data.data;
    });
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

.time {
  height: 40px;
  font-size: 13px;
  color: #a9a9a9;
  line-height: 40px;
}

.txt {
  /* height: 66px; */
  background: #e5e5e5;
  margin: 0 15px;
  border-radius: 5px;
  font-size: 13px;
  text-align: left;
  padding: 15px;
}
</style>