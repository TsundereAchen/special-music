<template>
  <div>歌手页面</div>
</template>

<script>
export default {
  data() {
    return {
        artists: []
    };
  },
  created() {
    this.getArtists();
  },
  methods: {
    async getArtists() {
      const { data: res } = await this.$axios.get("singer/class&json=true");
      this.artists = res.list
      console.log(res);
    },
  },
};
</script>