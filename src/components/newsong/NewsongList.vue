<template>
  <div class="newsongContainer">
    <div class="list" v-for="item in songList" :key="item.album_id">
      <a :href="item.song_url">
        <div class="name">{{ item.filename }}</div>
        <span class="iconfont">&#xe8c6;</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowRank: false,
    songList: [],
  },
};
</script>

<style lang="scss" scoped>
.newsongContainer {
  margin-left: 5px;
  width: 100%;
  font-size: 10px;
  text-align: center;
}
.newsongContainer .list {
  position: relative;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  .name {
    float: left;
    margin-left: 10px;
    text-align: left;
    overflow: hidden;
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .iconfont {
    position: absolute;
    font-size: 25px;
    color: gray;
    right: 15px;
  }
}
</style>