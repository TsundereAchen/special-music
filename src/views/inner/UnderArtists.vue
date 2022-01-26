<template>
  <div>
    <div class="title">
      <i class="iconfont clear" @click="callback">&#xeb15;</i>
      <span>{{ classname }}</span>
    </div>
    <ul>
      <li class="singer" v-for="item in singers" :key="item.singerid">
        <img v-lazy="item.imgurl" />
        <span>{{ item.singername }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classid: 0,
      classname: "",
      singers: [],
    };
  },
  mounted() {
    this.classid = this.$store.state.classid | this.$route.params.classid;
    this.$store.state.classid = this.classid;
    console.log(`classid:${this.classid}`)
    this.getArtInfo();
  },
  destroyed() {
      this.$store.state.classid = null
  },
  methods: {
    async getArtInfo() {
      const { data: res } = await this.$axios.get(
        `/singer/list/${this.classid}?json=true`
      );
      this.classname = res.classname;
      this.singers = res.singers.list.info;
      this.singers.forEach((item) => {
        item.imgurl = item.imgurl.replace("{size}", "400");
      });
    },
    callback() {
        this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  height: 60px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  .iconfont {
    position: absolute;
    left: 20px;
    color: ccc;
    font-size: 25px;
  }
}
.singer {
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    height: 110px;
    border-bottom: 1px solid #ccc;
    img {
        width: 80px;
        margin-top: 15px;
    }
    span {
        position: absolute;
        margin-left: 20px;
        font-size: 19px;
        top: 40px;
    }
}
</style>