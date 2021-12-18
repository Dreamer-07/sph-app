<template>
  <div class="swiper-container" ref="customSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in imageList" :key="image.id">
        <img :src="image.imgUrl" :class="{active: index === currentActiveIndex}" @click="updateActiveIndex(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    data() {
      return {
        currentActiveIndex: 0
      }
    },
    methods: {
      updateActiveIndex(index) {
        this.currentActiveIndex = index;
        this.$bus.$emit('updateProductDetailImg', index);
      }
    },
    props: ['imageList'],
    watch: {
      imageList(){
        this.$nextTick(() => {
          let swiper = new Swiper (this.$refs.customSwiper, {
            // 设置 slide 容器可以同时显示几个
            slidesPerView: 3,
            // 设置 slides 多少数量为一组
            slidesPerGroup: 1,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>
