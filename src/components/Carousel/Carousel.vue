<!--
    content: 首页轮播图
    author: Sinshune.
-->
<template>
  <div class="swiper-container" :style="[{width: mobile ? '100%' : '50%'}]">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img of imgList" :key="img.src">
        <img :src="img.src" width="100%">
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { mapGetters } from 'vuex'

export default {
  name: 'Carousel',

  data () {
    return {
      swiper: null,
      imgList: [
        { src: require('@/assets/imgs/Carousel/timg.jpg') },
        { src: require('@/assets/imgs/Carousel/1.jpg') },
        { src: require('@/assets/imgs/Carousel/2.jpg') }
      ]
    }
  },

  mounted () {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
  },

  computed: {
    ...mapGetters([
      'mobile'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container {
  margin-left: 0;
}
</style>
