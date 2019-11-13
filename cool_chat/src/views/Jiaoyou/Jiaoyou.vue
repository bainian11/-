<template>
  <div>
    <div class="header">
      <p>交友</p>
      <div class="look">只看异性</div>
    </div>
    <div id="nav">
      <van-tabs v-model="activeName" class="tab" swipeable sticky animated :offset-top=40 line-width=30>
        <van-tab title="红人" name="a">
          <div class="main-content">
            <!-- <div class="pic"></div> -->
            <img style="display:block" src="../../assets/bg-1.jpg" alt="">
            <li>
              <img src="../../assets/01.jpg" alt="">
              <div class="detail">
                <p class="name">Jessy</p><div class="sex">26</div>
                <br>
                <p class="derection">我风的风阿文戈二万个呃俄给呃符文呃风个噶饿呃...</p>
              </div>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </van-tab>

        <van-tab title="活跃" name="b">
          <div class="main-content">
            <img style="display:block"  src="../../assets/bg-1.jpg" alt="">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </van-tab>

        <van-tab title="新面孔" name="c">
          <div class="main-content">
            <img style="display:block"  src="../../assets/bg-1.jpg" alt="">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a",
    };
  }
};
</script>

<style scoped>
#nav {
  /* padding: 15px; */
  font-size: 15px;
}

#nav .nav-left {
  float: left;
  margin-left: 47px;
}

#nav .nav-right {
  float: right;
  margin-right: 47px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

.header {
  width: 100%;
  height: 40px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.header p {
  font-size: 17px;
  width: 34px;
  height: 17px;
  display: inline-block;
  text-align: center;
  line-height: 17px;
  margin-left: 79px;
}

.look {
  width: 65px;
  height: 25px;
  background: linear-gradient(to right, #fe4c68, #ff8a5f);
  float: right;
  margin-top: 10px;
  font-size: 12px;
  line-height: 27px;
  color: white;
  border-radius: 20px;
  margin-right: 15px;
}

.main-content {
  width: 100%;
  overflow: auto;
  /* background-color: #000 */
}

.main-content img {
    height: 100px;
}

.main-content li {
    width: 50%;
    height: 240px;
    list-style: none;
    float: left;
    margin-top: 0;
    position: relative;
}

.main-content li img {
  width: 100%;
  height: 100%;
  display: block;
}


.tab {
  width: 100%;
  margin-top: 40px;

}

.pic {
  width: 100%;
  height: 800px;
  background: #42b983;
  margin-top: 100px;
}

.detail {
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  /* background: #fe5367; */
  color: white;
}

.name {
  text-align: left;
  font-size: 15px;
  margin-left: 10px;
  /* width: 80px; */
  display: inline-block;
  float: left;
}

.sex {
  width: 32px;
  height: 15px;
  background: #fe5367; 
  float: left;
  margin-left: 6px;
  border-radius: 3px;
  color: white;
  font-size: 10px; 
  line-height: 16px;
}

.derection {
  text-align: left;
  padding: 0 10px;
  font-size: 10px;
  margin-top: 5px;
}
</style>