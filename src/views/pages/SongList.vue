<template>
  <div class="container">
    <div class="infolist" v-for="item in infoList" :key="item.specialid">
      <a href="#">
        <div class="img"><img v-lazy="item.imgurl" /></div>
        <div class="info">
          <p class="intro">{{ item.intro }}</p>
          <p class="playbox">
            <i class="iconfont">&#xea10;</i>
            {{ item.playcount }}
          </p>
        </div>
        <span class="iconfont enter">&#xe775;</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoList: [],
    };
  },
  created() {
    this.getRankInfo();
  },
  methods: {
    async getRankInfo() {
      const { data: res } = await this.$axios.get("plist/index&json=true");
      this.infoList = res.plist.list.info;
      this.infoList.forEach((item) => {
        item.imgurl = item.imgurl.replace("{size}", "400");
      });
      console.log(this.infoList);
    },
  },
};
</script>

<style lang="scss" scoped>
.infolist {
  box-sizing: border-box;
  margin-left: 20px;
  height: 140px;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  a {
    width: 100%;
    height: 100%;
  }
}
.infolist {
  .img {
    float: left;
    margin-right: 10px;
    width: 120px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    padding-left: 140px;
    width: 20em;
    font-size: 18px;
    text-align: left;
    .intro {
      margin-bottom: 35px;
      margin-top: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .enter {
      float: right;
      right: 10px;
  }
}
</style>