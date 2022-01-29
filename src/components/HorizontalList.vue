<template>
  <div class="horListContainer">
    <p class="title">推荐歌单<i class="iconfont">&#xe775;</i></p>
    <div class="wrapper">
      <ul class="content">
        <li class="item" v-for="item in songList" :key="item.audio_id">
          <img v-lazy="item.album_sizable_cover" alt="" />
          <div class="num"><i class="iconfont">&#xe62b;</i>{{item.bitrate_high}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songList: [],
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.horListContainer {
  height: 120px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  .title {
    font-size: 20px;
    color: darkolivegreen;
    text-align: left;
    margin: 8px 8px;
  }
  .content {
    position: relative;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .item {
      position: relative;
      flex: 0 0 100px;
      width: 100px;
      text-align: center;
      padding-left: 5px;
      padding-right: 5px;
      img {
        width: 100%;
      }
      .num {
        position: absolute;
        top: 0;
        color: #fff;
        right: 5px;
      }
      .name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>