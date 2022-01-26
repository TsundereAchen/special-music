<template>
  <div>
    <div class="artgroup" v-for="item in artists" :key="item[0].classid">
      <div class="artitem" v-for="i in item" :key="i.classid">
        <router-link
          :to="{
            name: 'underart',
            params: {
              classid: i.classid,
            },
          }"
          ><p>
            <span>{{ i.classname }}</span>
            <i class="iconfont enter">&#xe775;</i>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artists: [],
    };
  },
  created() {
    this.getArtists();
  },
  methods: {
    async getArtists() {
      const { data: res } = await this.$axios.get("singer/class&json=true");
      this.artists = [];
      this.artists.push([res.list[0]]);
      for (let i = 1; i < res.list.length - 1; ) {
        this.artists.push([res.list[i], res.list[i + 1], res.list[i + 2]]);
        i = i + 3;
      }
      console.log(this.artists);
    },
  },
};
</script>

<style lang="scss" scoped>
.artgroup {
  margin: 20px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.artitem {
  position: relative;
  padding: 10px;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  .enter {
    position: absolute;
    right: 10px;
  }
}
</style>