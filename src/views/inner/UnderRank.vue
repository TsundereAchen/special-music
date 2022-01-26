<template>
  <div>
    <toplist :info="info" :iscenterByTitle='true' :isShowTime="true"></toplist>
    <NewsongList :songList="songList" :isShowRank="true"></NewsongList>
    <HomeBottom :isShowSpan="false"></HomeBottom>
  </div>
</template>

<script>
import toplist from "../../components/top-list";
import NewsongList from '../../components/newsong/NewsongList'
import HomeBottom from '../../components/newsong/HomeBottom'
export default {
  data() {
    return {
      rankid: 0,
      info: {
        rankname: "",
        banner7url: "",
        timestamp: 0,
      },
      songList: []
    };
  },
  components: {
    toplist,
    NewsongList,
    HomeBottom
  },
  created() {
   if(sessionStorage.rankid) this.rankid = sessionStorage.rankid
  },
  mounted() {
    this.rankid = this.rankid | this.$route.params.rankid;
    sessionStorage.rankid = this.rankid
    this.getRankTopInfo();
  },
  destroyed() {
    sessionStorage.rankid = null
  },
  methods: {
    async getRankTopInfo() {
      const { data: res } = await this.$axios.get(
        `/rank/info/?rankid=${this.rankid}&page=1&json=true`
      );
      console.log(res);
      this.info.rankname = res.info.rankname;
      this.info.banner7url = res.info.banner7url.replace("{size}", "400");
      this.info.timestamp = res.songs.timestamp;
      this.songList = res.songs.list
    },
  },
};
</script>