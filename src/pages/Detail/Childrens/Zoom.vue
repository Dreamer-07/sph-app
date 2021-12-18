<template>
  <div class="spec-preview">
    <img :src="imageList[currentIndex].imgUrl"/>
    <div class="event" @mousemove="moveMask"></div>
    <div class="big">
      <img :src="imageList[currentIndex].imgUrl" :style="bigImgStyle"/>
    </div>
    <div class="mask" :style="maskStyle" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: {
    imageList: {
      type: Array,
      default: () => [{}]
    }
  },
  data() {
    return {
      currentIndex: 0,
      maskStyle: {
        left: "0px",
        top: "0px"
      },
      bigImgStyle: {
        left: "0px",
        top: "0px"
      }
    }
  },
  methods: {
    moveMask(event) {
      let {offsetWidth, offsetHeight} = this.$refs.mask;
      let {offsetX, offsetY} = event;
      let left = offsetX - offsetWidth / 2;

      // 设置边界
      if (left < 0) {
        left = 0
      } else if (left > offsetWidth) {
        left = offsetWidth
      }

      let top = offsetY - offsetHeight / 2;
      if (top < 0) {
        top = 0;
      } else if (top > offsetHeight) {
        top = offsetHeight
      }

      this.maskStyle = {left: left + "px", top: top + "px"}
      this.bigImgStyle = {left: left * -2 + "px", top: top * -2 + "px"}
    }
  },
  mounted() {
    this.$bus.$on('updateProductDetailImg', index => this.currentIndex = index)
  },
  destroyed() {
    this.$bus.$off('updateProductDetailImg')
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
