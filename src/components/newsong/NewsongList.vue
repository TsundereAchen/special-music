<template>
  <div class="newsongContainer">
    <div class="list" v-for="(item, index) in songList" :key="item.audio_id">
      <a :href="item.song_url">
        <div
          :class="{
            number: true,
            red: index == 0,
            yellow: index == 1,
            blue: index == 2,
          }"
          v-if="index < 3 && isShowRank"
        >
          {{ index + 1 }}
        </div>
        <div class="name">{{ item.filename }}</div>
        <span class="iconfont">&#xe8c6;</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowRank: Boolean,
    songList: [],
  }
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
  a {
    color: #000;
  }
  .number {
    float: left;
    margin-top: 20px;
    line-height: 20px;
    font-size: 12px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: #fff;
  }
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
.red {
  background: #ff3300;
}
.yellow {
  background: #ffff00;
}
.blue {
  background: #6699ff;
}
</style>