<template>
  <div class="newsongContainer">
    <div class="list" v-for="item in songList" :key="item.album_id">
      <div class="name">{{ item.filename }}</div>
      <span class="iconfont">&#xe8c6;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  }
  .iconfont {
    position: absolute;
    font-size: 25px;
    color: gray;
    right: 15px;
  }
}
</style>