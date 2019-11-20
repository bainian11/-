<template>
  <div>
    <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
    title="TA的相册"
  />
  <ul>
    <li>
      <img src="http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt="">
    </li>
    <li>
      <img src="http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt="">
    </li>
    <li>
      <img src="http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt="">
    </li>
    <li>
      <img src="http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt="">
    </li>
    <li>
      <img src="http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt="">
    </li>
    <li>
      <img src="http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt="">
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    onClickLeft() {
      console.log('返回');
    }
  },
  mounted() {

  },
  computed: {

  },
  components: {

  },
};
</script>

<style scoped>
  li {
    float: left;
    margin-right: 1px;
  }
  li:nth-child(3n) {
    margin-right: 0;
  }
  li img {
    width: 93px;
    height: 93px;
  }
</style>
