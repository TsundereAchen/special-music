<template>
  <div class="container">
    <div class="rank-item" v-for="item in rankList" :key="item.id">
        <router-link
          :to="{
            name: 'underrank',
            params: {
              rankid: item.rankid,
            },
          }"
        >
          <img v-lazy="item.album_img_9" />
          <span class="name">{{ item.rankname }}</span>
          <span class="iconfont">&#xe775;</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankList: [],
    };
  },
  created() {
    this.getRankList();
  },
  methods: {
    async getRankList() {
      const { data: res } = await this.$axios.get("/rank/list&json=true");
      this.rankList = res.rank.list;
      this.rankList.forEach((item) => {
        item.album_img_9 = item.album_img_9.replace("{size}", "400");
      });
      console.log(res.rank);
    },
  },
};
</script>

<style lang="scss" scoped>
.container .rank-item {
  position: relative;
  left: 5px;
  height: 120px;
  border-bottom: 1px solid #ccc;
  img {
    float: left;
    margin-top: 10px;
    margin-left: 5px;
    width: 97px;
    height: 97px;
  }
  .name {
    position: absolute;
    text-align: left;
    font-size: 18px;
    top: 30px;
    left: 120px;
  }
  .iconfont {
    position: absolute;
    font-size: 18px;
    color: #ccc;
    line-height: 120px;
    right: 10px;
  }
}
</style>