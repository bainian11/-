<template>
  <div class="wrap">
    <div class="title">
      <van-icon name="arrow-left" class="icon" />我的礼物
    </div>
    <van-tabs v-model="active">
      <!-- 分页1 -->
      <van-tab title="收到">
        <ul class="giftsItem">
          <li v-for="gift of gifts" :key="gift.id">
            <img src="../../../public/imgs/huojian.jpg" alt="gift" class="giftimg" />
            <div class="giftname">{{gift.name}}</div>
            <div class="giftprice">{{gift.price}}</div>
          </li>
        </ul>
        <section>
          <p class="p1">如何获得礼物:</p>
          <p class="p2">视频、文字聊天、别人访问你的主页时、都有机会获得</p>
        </section>
        <ul>
          <li v-for="reap of reaps" :key="reap.id" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <div class="xingxi">
              <p class="nickname">{{reap.userid}}</p>
              <p class="giftid">赠送 {{reap.giftname}}</p>
            </div>
            <div class="shijian">{{reap.sendtime}}</div>
          </li>
        </ul>
      </van-tab>
      <!-- 分页2 -->
      <van-tab title="送出">
        <ul>
          <li v-for="reap of reaps" :key="reap.id" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <div class="xingxi">
              <p class="nickname">{{reap.userid}}</p>
              <p class="giftid">赠送 {{reap.giftname}}</p>
            </div>
            <div class="shijian">{{reap.sendtime}}</div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>;

<script>
export default {
  name: "gift",
  data() {
    const gifts = [
      {
        id: 1,
        url: "../assets/huojian.jpg",
        name: "火箭",
        price: 500
      },
      {
        id: 2,
        url: "../assets/huojian.jpg",
        name: "飞机",
        price: 100
      },
      {
        id: 3,
        url: "../assets/huojian.jpg",
        name: "办卡",
        price: 6
      },
      {
        id: 4,
        url: "../assets/huojian.jpg",

        name: "荧光棒",
        price: 1
      },
      {
        id: 5,
        url: 111111,
        name: "火箭",
        price: 500
      },
      {
        id: 6,
        url: 111111,
        name: "飞机",
        price: 100
      },
      {
        id: 7,
        url: 111111,
        name: "办卡",
        price: 6
      },
      {
        id: 8,
        url: 111111,
        name: "荧光棒",
        price: 1
      }
    ];
    const reaps = [
      {
        id: 1,
        url: 111111,
        userid: "MOMOMO",
        giftname: "火箭",
        sendtime: "2019/8/12"
      },
      {
        id: 2,
        url: 111111,
        userid: "momomo",
        giftname: "火箭",
        sendtime: "2019/8/12"
      },
      {
        id: 3,
        url: 111111,
        userid: "momomo",
        giftname: "火箭",
        sendtime: "2019/8/12"
      }
    ];

    return {
      active: 0,
      gifts,
      reaps
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