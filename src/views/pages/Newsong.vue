<template>
  <div>
    <Slider :banners="slider"> </Slider>
    <NewsongList :songList="songList"></NewsongList>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Slider from "../../components/base/Slider.vue";
import NewsongList from '../../components/newsong/NewsongList'
import Bottom from '../../components/newsong/HomeBottom'
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
    Bottom
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
    },
  },
};
</script>