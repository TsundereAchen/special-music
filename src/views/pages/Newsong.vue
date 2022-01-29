<template>
  <div>
    <Slider :banners="slider"> </Slider>
    <!-- <ScrollView :songList="songList"></ScrollView> -->
    <HorizontalList :songList="songList"></HorizontalList>
    <NewsongList :songList="songList"></NewsongList>
    <Bottom isShowSpan="true"></Bottom>
  </div>
</template>

<script>
import Slider from "../../components/base/Slider.vue";
import ScrollView from "../../components/base/ScrollView.vue";
import NewsongList from "../../components/newsong/NewsongList";
import Bottom from "../../components/newsong/HomeBottom";
import HorizontalList from "../../components/HorizontalList";

export default {
  name: "",
  data() {
    return {
      slider: [],
      songList: [],
    };
  },
  components: {
    Slider,
    NewsongList,
    Bottom,
    HorizontalList,
    ScrollView,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data: res } = await this.$axios.get("", {
        params: { json: true },
      });
      this.slider = res.banner;
      this.songList = res.data.splice(0, 5);
      this.songList.forEach((item) => {
        item.album_sizable_cover = item.album_sizable_cover.replace(
          "{size}",
          "400"
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>