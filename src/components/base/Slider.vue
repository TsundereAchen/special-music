<template>
  <div
    class="SliderContainer"
    ref="slider"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @touchmove="touchMove"
  >
    <div class="sliderGroup" ref="sliderGroup">
      <div class="slider" v-for="item in banners" :key="item.id">
        <a href=""><img :src="item.imgurl" /></a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in banners"
        :class="{ active: currentPageIndex == index }"
        :key="item.id"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banners: [],
  },
  data() {
    return {
      currentPageIndex: 0, // 当前图片位置
      bannerWith: 0, // banner宽度
      startPoint: 0, // 触摸开始的位置
      endPoint: 0, // 触摸结束的位置
      distance: 0, // 触摸距离
      autoPlay: true, // 是否自动播放
      interval: 2000, // 播放时间间隔
      timer: null, // 定时器
    };
  },
  methods: {
    startPlay() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.currentPageIndex == this.banners.length - 1) {
          this.currentPageIndex = 0;
        } else {
          this.currentPageIndex++;
        }
        const slider = document.getElementsByClassName("slider");
        this.bannerWith = slider[0].offsetWidth;
        slider[0].style.marginLeft =
          -this.bannerWith * this.currentPageIndex + "px";
        slider[0].style.transition = "all in ease";
      }, 2000);
    },
    /**
     * 触摸开始：记录开始位置，停止计时器
     * 触摸移动：记录当前位置，让图片跟着滑动位置移动
     * 触摸结束：判断滑动方向翻页，开启定时器
     */
    touchStart(evt) {
      clearInterval(this.timer);
      this.startPoint = evt.changedTouches[0].pageX;
    },
    touchMove(evt) {
      this.endPoint = evt.changedTouches[0].pageX;
      this.distance = this.startPoint - this.endPoint; 
      if (this.distance == 0) return;
      const slider = document.getElementsByClassName("slider");
      if (
        (this.distance > 0 &&
          this.currentPageIndex !== this.banners.length - 1) ||
        (this.distance < 0 && this.currentPageIndex != 0)
      ) {
        slider[0].style.marginLeft =
          -this.distance - this.bannerWith * this.currentPageIndex + "px";
      }
    },
    touchEnd() {
      const slider = document.getElementsByClassName("slider");
      this.bannerWith = slider[0].offsetWidth
      if (
        this.distance > 0 &&
        this.currentPageIndex !== this.banners.length - 1
      ) {
        if (this.distance > this.bannerWith * 0.5) {
          this.currentPageIndex++;
        }
        slider[0].style.marginLeft =
          -this.currentPageIndex * this.bannerWith + "px";
      } else if (this.distance < 0 && this.currentPageIndex != 0) {
        if (-this.distance > this.bannerWith * 0.3) {
          this.currentPageIndex--;
        }
        slider[0].style.marginLeft =
          - this.bannerWith * this.currentPageIndex + "px";
      }
      this.startPlay();
    },
  },
  mounted() {
    this.startPlay();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.SliderContainer {
  overflow: hidden;
  position: relative;
  height: 180px;
}
.sliderGroup {
  display: flex;
  height: 100%;
}
.sliderGroup .slider {
  flex-shrink: 0;
  a,
  img {
    width: calc(100vw);
    height: 100%;
  }
}
.dots-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;
  width: 33%;
  display: flex;
  justify-content: center;
}
.dots-wrapper .dot {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #fff;
  opacity: 0.7;
  margin-left: 10px;
}
.dots-wrapper .active {
  width: 12px;
  border-radius: 15px;
  background-color: #f0031f;
}
</style>