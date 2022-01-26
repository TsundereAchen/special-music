<template>
  <div>
    <toplist
      :info="info"
      :iscenterByTitle="false"
      :isShowTime="false"
    ></toplist>
    <NewsongList :songList="songList" :isShowRank="false"></NewsongList>
  </div>
</template>

<script>
import toplist from "../../components/top-list";
import NewsongList from "../../components/newsong/NewsongList";
export default {
  data() {
    return {
      specialid: 0,
      info: {
        rankname: "",
        banner7url: "",
      },
      songList: [],
    };
  },
  created() {},
  components: {
    toplist,
    NewsongList,
  },
  mounted() {
    this.specialid = this.$store.state.specialid | this.$route.params.specialid;
    this.$store.state.specialid = this.specialid;
    this.getSongInfo();
  },
  methods: {
    async getSongInfo() {
      const { data: res } = await this.$axios.get(
        `/plist/list/${this.specialid}?json=true`
      );
      this.info.rankname = res.info.list.specialname;
      this.info.banner7url = res.info.list.imgurl.replace("{size}", "400");
      this.songList = res.list.list.info;
    },
   
  },
};
</script>