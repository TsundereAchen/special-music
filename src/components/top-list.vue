<template>
  <div class="topList">
    <div class="img">
      <img v-lazy="info.banner7url" alt="" />
    </div>
    <div class="title">
      <i class="iconfont" @click="callback">&#xeb15;</i>
      <span :class="{'centerspan': iscenterByTitle}">{{ info.rankname }}</span>
    </div>
    <div class="time" v-if="isShowTime">
      <span>上次更新时间：{{ curTime }}</span>
    </div>
  </div>
</template>

<script>
import { getTime } from "../assets/js/date";
export default {
  props: {
    iscenterByTitle: false,
    isShowTime: false,
    info: {
      rankname: "",
      banner7url: "",
      timestamp: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    curTime: function () {
      return getTime(this.info.timestamp);
    },
  },
  methods: {
    callback() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.topList {
  height: 230px;
  position: relative;
      color: #fff;
      font-size: 18px;
      line-height: 30px;
  .img {
    height: 100%;
    overflow: hidden;
    img {
      transform: translateY(-25%);
    }
  }
  .title {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-image: linear-gradient(#1c3c63, rgba(0, 0, 0, 0));
    padding-left: 10px;
    .iconfont {
      margin-right: 10px;
    }
    .centerspan {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
  }
  .time {
      width: 100%;
      height: 50px;
      padding-left: 10px;
      font-size: 15px;
      position: absolute;
       background-image: linear-gradient(rgba(0, 0, 0, 0),#1c3c63);
      bottom: 0;
  }
}
</style>