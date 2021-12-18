<template>
  <div class="swiper-container" ref="customSwiper">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in list" :key="index" class="swiper-slide">
        <img :src="item.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入 swiper 样式
import 'swiper/css/swiper.min.css'

// 引入 swiper 库
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: ['list', 'options'],
  watch: {
    list: {
      // 无论数据是否发生变化，都先执行一遍
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          let swiper = new Swiper(this.$refs.customSwiper, this.options || {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },

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
}
</script>
