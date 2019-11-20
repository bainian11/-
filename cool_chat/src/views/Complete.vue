<template>
  <div class="wrap">
    <div class="title"></div>
    <h3>完善资料</h3>
    <ul>
      <!-- 头像 -->
      <li>
        <span class="hint">上传头像</span>
        <div class="touxiang">
          <van-uploader
            v-model="fileList"
            multiple
            :max-count="1"
            :after-read="afterRead"
            :upload-text="'上传图片'"
          />
        </div>
      </li>
      <!-- 昵称 -->
      <li>
        <span class="hint">昵称</span>
        <van-icon name="arrow" size="8px" color="#e6e6e6" class="arrow" />
        <input type="text" class="nickname" maxlength="8" v-model="nickname" />
      </li>
      <!-- 出生日期 -->
      <li>
        <span class="hint">出生日期</span>
        <van-icon name="arrow" size="8px" color="#e6e6e6" class="arrow" @click="timeisshow" />
        <b v-if="choosed" @click="timeisshow">{{birthday}}</b>
      </li>
    </ul>
    <van-button type="primary" size="large" color="#999999" class="button" @click="complete">完成</van-button>
    <!-- 日期选择框 -->
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      v-if="choosetime"
      v-on:confirm="confirm"
      @cancel="cancel"
      :item-height="36"
    />
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Complete",
  components: {},
  data() {
    const date = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12
    };
    const born = {};
    return {
      fileList: [], //头像文件数组

      //日期相关
      currentDate: new Date(),
      minDate: new Date(1948, 12, 1),
      choosetime: false,
      choosed: false,

      date, //月份简写对象
      born, //选择之后的出生日期对象

      // 需要发送的数据
      phone: "111",
      sex: "0",
      head: "", //头像返回的字符串
      nickname: ""
    };
  },
  computed: {
    birthday: function() {
      return this.born.year + "-" + this.born.month + "-" + this.born.day;
    }
  },
  mounted() {
    console.log(this.$route.query.phone);
    console.log(this.$route.query.sex);
    this.phone = this.$route.query.phone;
    this.sex = this.$route.query.sex;
  },
  methods: {
    // 箭头显示日期界面
    timeisshow() {
      this.choosetime = !this.choosetime;
    },
    // 日期界面确定方法
    confirm(val) {
      this.choosetime = false;
      //
      val = val.toString().split(" ");
      const day = val[2];
      const year = val[3];
      const month = this.date[val[1]];
      // console.log(year, month, day);
      Vue.set(this.born, "year", year);
      Vue.set(this.born, "month", month);
      Vue.set(this.born, "day", day);
      console.log(this.birthday);
      this.choosed = true;
    },
    // 日期界面取消方法
    cancel() {
      this.choosetime = false;
    },
    // 上传头像
    afterRead(file) {
      this.uploadImg(file.file);
    },
    uploadImg(file) {
      // 创建form对象
      let formdata1 = new FormData();
      // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('file',file);
      formdata1.append("img", file, file.name);

      //this.axios 是因为在main.js写在vue实例里

      this.axiosAjax
        .post("/touxiang", formdata1)
        .then(res => {
          //这里的url为后端接口
          console.log(res.data);
          this.head = res.data.data;
          console.log(this.head);
          //res 为接口返回值
        })
        .catch(() => {});
    },
    complete() {
      this.axios
        .post("/complete", {
          phone: this.phone,
          sex: this.sex,
          headImage: this.head,
          nickName: this.nickname,
          birthday: this.birthday
        })
        .then(res => {
          if (res.data.data.userId) {
            this.$store.commit("sendUserId", res.data.data.userId);
            console.log(res.data.data.userId);
            this.$router.push({
              path: "/jiaoyou"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.wrap {
  margin: 0 30px;
}
.title {
  height: 80px;
  line-height: 80px;
}
.icon {
  float: left;
  margin-top: 26px;
}
.touxiang {
  /* float: right; */
  position: absolute;
  top: 115px;
  right: 22px;
}
.nickname {
  float: right;
  height: 30px;
  color: #999999;
  font-size: 15px;
  margin-right: 5px;
  font-weight: 500;
  border: none;
  outline: medium;
  margin-top: 20px;
  width: 135px;
}

.arrow {
  float: right;
  height: 75px;
  line-height: 75px;
}
b {
  float: right;
  height: 75px;
  line-height: 75px;
  color: #999999;
  font-size: 15px;
  margin-right: 5px;
  font-weight: 500;
}

li {
  height: 75px;
  border-bottom: 0.5px solid #e6e6e6;
}

.hint {
  float: left;
  height: 75px;
  line-height: 75px;
  font-size: 15px;
  color: #b8b8b8;
}

h3 {
  text-align: left;
  margin: 0;
  font-weight: 500;
  height: 45px;
  font-size: 25px;
}

.button {
  margin-top: 40px;
}
</style>