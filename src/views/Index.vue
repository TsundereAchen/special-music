<template>
  <div class="index">
    <ul>
      <li>
        <img src="@/assets/images/fluidicon.png" alt="" />
      </li>
      <li><router-link to="/newSong">新歌</router-link></li>
      <li><router-link to="/rank">排行</router-link></li>
      <li><router-link to="/songList">歌单</router-link></li>
      <li><router-link to="/artists">歌手</router-link></li>
      <li><router-link to="/listenBook">听书</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  created() {},
};
</script>

<style scoped>
.index {
  text-align: center;
  width: 100%;
}
.index ul {
  display: flex;
  margin-top: 5px;
  height: 40px;
  background-color: black;
  color: darkgoldenrod;
  line-height: 40px;
}
.index ul li {
  margin-right: 20px;
  width: calc(100em / 6);
}
.index img {
  width: 26px;
  height: 26px;
  vertical-align: -4px;
}
</style>
