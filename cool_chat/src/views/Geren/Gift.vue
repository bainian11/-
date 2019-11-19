<template>
  <div class="wrap">
    <div class="title">
      <van-icon name="arrow-left" class="icon" />我的礼物
    </div>
    <van-tabs v-model="active">
      <!-- 分页1 -->
      <van-tab title="收到">
        <ul class="giftsItem">
          <li v-for="(getGiftAmount,index) of getGiftAmountList" :key="index">
            <img src="../../../public/imgs/huojian.jpg" alt="gift" class="giftimg" />
            <div class="giftname">{{getGiftAmount.giftAmountName}}</div>
            <div class="giftprice">{{getGiftAmount.giftAmountNum}}</div>
          </li>
        </ul>
        <section>
          <p class="p1">如何获得礼物:</p>
          <p class="p2">视频、文字聊天、别人访问你的主页时、都有机会获得</p>
        </section>
        <ul>
          <li v-for="(getGift,index) of getGiftList" :key="index" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <div class="xingxi">
              <p class="nickname">{{getGift.nickName}}</p>
              <p class="giftid">赠送 {{getGift.giftNum}}个{{getGift.giftName}}</p>
            </div>
            <div class="shijian">{{getGift.giftTime}}</div>
          </li>
        </ul>
      </van-tab>
      <!-- 分页2 -->
      <van-tab title="送出">
        <ul>
          <li v-for="(sendGift,index) of sendGiftList" :key="index" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <div class="xingxi">
              <p class="nickname">{{sendGift.nickName}}</p>
              <p class="giftid">赠送 {{sendGift.giftName}}</p>
            </div>
            <div class="shijian">{{sendGift.giftTime}}</div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>;

<script>
export default {
  name: "gift",
  mounted() {
    // 收到
    this.axios
      .get("/gift", {
        params: {
          userId: 31231414
        }
      })
      .then(res => {
        this.sendGiftList = res.data.data;
        // console.log(res.data.data);
        // console.log(this.sendGiftList);
      });

    // 送出
    this.axios
      .get("/getGift", {
        params: {
          userId: 31231414
        }
      })
      .then(res => {
        // this.sendGiftList = res.data.data;
        console.log(res.data.data[0]);
        console.log(res.data.data[1]);
        this.getGiftList = res.data.data[0];
        this.getGiftAmountList = res.data.data[1];

        // console.log(this.sendGiftList);
      });
  },
  data() {
    // 礼物类型
    const getGiftAmountList = [
      {
        giftAmountName: "111",
        giftAmountNum: 111,
        giftAmountImage: "111"
      }
    ];
    const getGiftList = [
      {
        nickName: "1111",
        headImage: "111",
        giftName: "111",
        giftTime: "111",
        giftNum: 1
      }
    ];
    const sendGiftList = [
      {
        nickName: "1111",
        headImage: "111",
        giftName: "111",
        giftTime: "111",
        giftNum: 1
      }
    ];

    return {
      active: 0,
      getGiftAmountList,
      sendGiftList,
      getGiftList
    };
  },
  components: {}
};
</script>


<style scoped>
.title {
  height: 39px;
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

.giftsItem {
  height: 211px;
  border-bottom: 0.5px #e6e6e6 solid;
}
.giftsItem li {
  width: 25%;
  height: 50%;
  float: left;
}
.giftimg {
  width: 60%;
}
.giftname {
  font-size: 13px;
}
.giftprice {
  font-size: 13px;
  color: red;
}

section {
  height: 65px;
  border-bottom: 0.5px #e6e6e6 solid;
}
.p1,
.p2 {
  margin: 0;
  font-size: 13px;
  text-align: left;
  padding-left: 15px;
}
.p1 {
  padding-top: 15px;
  font-weight: 600;
}

.p2 {
  padding-top: 5px;
  color: #999999;
}

.aaa {
  height: 80px;
  margin: 0 15px;
  border-bottom: 0.5px #e6e6e6 solid;
}

.touxiang {
  float: left;
  width: 50px;
}
.touxiang img {
  width: 50px;
  margin-top: 15px;
  border-radius: 50%;
}

.xingxi {
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}

.nickname {
  text-align: left;
  margin: 0;
  font-size: 15px;
}

.giftid {
  text-align: left;
  margin: 0;
  font-size: 15px;
  color: #999999;
}
.shijian {
  margin-top: 15px;
  float: right;
  font-size: 13px;
}
</style>