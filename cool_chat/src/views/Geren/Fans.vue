<template>
  <div class="wrap">
    <div class="title">
      <van-icon click="back" name="arrow-left" class="icon" @click="back"/>
      我的关注
    </div>
    <van-tabs v-model="active">
      <!-- 分页1 -->
      <van-tab title="已关注">
        <ul>
          <li v-for="(user,index) of userListt" :key="index" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <!-- 男女区分 -->
            <div class="nickname" v-if="user.sex=='1'">
              {{user.nickName}}
              <span class="man">♂ {{user.age}}</span>
              <div class="ygz">
                <div class="gou" >√</div>
                <span class="txt" @click="iffocus">已关注</span>
              </div>
            </div>
            <div class="nickname" v-else>
              {{user.nickName}}
              <span class="woman" >♀ {{user.age}}</span>
              <div class="ygz">
                <div class="gou">√</div>
                <span class="txt" @click="iffocus" >已关注</span>
              </div>
            </div>
            <!--  -->
            <div class="shijian">
              {{user.birthday}}
              关注
            </div>
          </li>
        </ul>
      </van-tab>
      <!-- 分页2 -->
      <van-tab title="粉丝">
        <ul>
          <li v-for="(user,index) of userList" :key="index" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <!-- 男女区分 -->
            <div class="nickname" v-if="user.sex=='1'">
              {{user.nickName}}
              <span class="man">♂ {{user.age}}</span>
              <!-- <div class="fans">
                <div class="gou">√</div>
                <span class="txt">已关注</span>
              </div>-->
            </div>
            <div class="nickname" v-else>
              {{user.nickName}}
              <span class="woman">♀ {{user.age}}</span>
              <!-- 是否关注 -->
              <!-- <div class="fans" v-if="focus.guanzhu">
                <div class="gou">√</div>
                <span class="txt">已关注</span>
              </div>
              <div class="fans" v-else>
                <div class="gou wgz">+</div>
                <span class="txt bbb">关注</span>
              </div>-->
            </div>
            <!--  -->
            <div class="shijian">
              <!-- {{focus.time}} -->
              关注
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "fans",
  data() {
    const userListt = [
      {
        userId: 11111,
        nickName: "1111",
        headImage: "111",
        age: 11,
        sex: 1
      }
    ];
    const userList = [
      {
        userId: 11111,
        nickName: "1111",
        headImage: "111",
        age: 11,
        sex: 1
      }
    ];
    return {
      active: 2,
      userListt,
      userList
    };
  },
  mounted() {
    // 粉丝页
    this.axios
      .get("/fans", {
        params: {
          userId: this.$store.state.userId
        }
      })
      .then(res => {
        this.userList = res.data.data;
      });
    //关注页
    this.axios
      .get("/focus", {
        params: {
          userId: this.$store.state.userId
        }
      })
      .then(res => {
        console.log(res.data.data);
        this.userListt = res.data.data;
      });
  },
  methods: {
    iffocus() {
      this.axios
        .post("/iffocus", {
          fansId: this.$store.state.userId,
          // 需要更改↓↓↓↓↓↓
          // 需要更改↓↓↓↓↓↓
          caredId: 12345656
          // 需要更改↑↑↑↑↑↑
          // 需要更改↑↑↑↑↑↑
        })
        .then(res => {
          // this.sendGiftList = res.data.data;
          console.log(res.data);
          // this.userList = res.data.data;
          // console.log(this.sendGiftList);
          this.axios
            .get("/focus", {
              params: {
                userId: 12345678
              }
            })
            .then(res => {
              // this.sendGiftList = res.data.data;
              console.log(res.data.data);
              this.userListt = res.data.data;
              // console.log(this.sendGiftList);
            });
        });
    },
    back() {
      console.log(1);
      this.$router.push({ path: "/Geren" });
    }
  }
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

.aaa {
  height: 80px;
  margin: 0 15px;
  border-bottom: 0.5px #e6e6e6 solid;
}
.touxiang {
  float: left;
  width: 50px;
  margin-right: 10px;
}
.touxiang img {
  width: 50px;
  margin-top: 15px;
  border-radius: 50%;
}

li {
  overflow: hidden;
}
.nickname {
  text-align: left;
  margin: 0;
  font-size: 15px;
  margin-top: 20px;
}

.man {
  display: inline-block;
  width: 35px;
  height: 14px;
  background: #3979fd;
  color: white;
  font-size: 10px;
  text-align: center;
  border-radius: 2px;
}
.woman {
  display: inline-block;
  width: 35px;
  height: 14px;
  background: #ff5277;
  color: white;
  font-size: 10px;
  text-align: center;
  border-radius: 2px;
}
.shijian {
  text-align: left;
  font-size: 13px;
  color: #999999;
  margin-top: 5px;
}

.ygz {
  width: 78px;
  height: 28px;
  float: right;
  background: #999999;
  border-radius: 14px;
  position: relative;
  font-size: 13px;
  top: 5px;
}
.fans {
  width: 78px;
  height: 28px;
  float: right;
  background: linear-gradient(to right, #fe4b68, #ff8c5f);
  border-radius: 14px;
  position: relative;
  font-size: 13px;
  top: 5px;
}
.gou {
  width: 15px;
  height: 15px;
  background: white;
  color: #999999;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 6px;
  text-align: center;
}

.txt {
  color: white;
  position: absolute;
  right: 10px;
  top: 4px;
}

.fans .wgz {
  margin-left: 8px;
}
.fans .bbb {
  right: 13px;
}
</style>