<template>
  <div class="wrap">
    <div class="title">
      <van-icon name="arrow-left" class="icon" />我的关注
    </div>
    <van-tabs v-model="active">
      <!-- 分页1 -->
      <van-tab title="已关注">
        <ul>
          <li v-for="focus of focuslist" :key="focus.id" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <!-- 男女区分 -->
            <div class="nickname" v-if="focus.sex=='男'">
              {{focus.nickname}}
              <span class="man">♂ {{focus.age}}</span>
              <div class="ygz">
                <div class="gou">√</div>
                <span class="txt">已关注</span>
              </div>
            </div>
            <div class="nickname" v-else>
              {{focus.nickname}}
              <span class="woman">♀ {{focus.age}}</span>
              <div class="ygz">
                <div class="gou">√</div>
                <span class="txt">已关注</span>
              </div>
            </div>
            <!--  -->
            <div class="shijian">{{focus.time}} 关注</div>
          </li>
        </ul>
      </van-tab>
      <!-- 分页2 -->
      <van-tab title="粉丝"><ul>
          <li v-for="focus of focuslist" :key="focus.id" class="aaa">
            <div class="touxiang">
              <img src="../../../public/imgs/huojian.jpg" alt />
            </div>
            <!-- 男女区分 -->
            <div class="nickname" v-if="focus.sex=='男'">
              {{focus.nickname}}
              <span class="man">♂ {{focus.age}}</span>
              <div class="fans">
                <div class="gou">√</div>
                <span class="txt">已关注</span>
              </div>
            </div>
            <div class="nickname" v-else>
              {{focus.nickname}}
              <span class="woman">♀ {{focus.age}}</span>
              <!-- 是否关注 -->
              <div class="fans" v-if="focus.guanzhu"> 
                <div class="gou">√</div>
                <span class="txt">已关注</span>
              </div>
              <div class="fans" v-else> 
                <div class="gou wgz">+</div>
                <span class="txt bbb">关注</span>
              </div>
            </div>
            <!--  -->
            <div class="shijian">{{focus.time}} 关注</div>
          </li>
        </ul></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "fans",
  data() {
    const focuslist = [
      {
        id: 1,
        url: "./",
        nickname: "吴晨懋天天迟到",
        sex: "男",
        time: "2019/8/12",
        age: 22,
        guanzhu:true
      },
      {
        id: 2,
        url: "./",
        nickname: "hahahahah",
        sex: "女",
        time: "2019/8/12",
        age: 18,
        guanzhu:false

      }
    ];
    return {
      active: 2,
      focuslist
    };
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
  background: linear-gradient(to right,#fe4b68,#ff8c5f);
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

.fans .wgz{
    margin-left: 8px
}
.fans .bbb{
   right: 13px;
}
</style>