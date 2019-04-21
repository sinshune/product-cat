<!--
    content: 首页轮播图
    author: Sinshune.
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img of imgList" :key="img.src">
        <a :href="img.href" target="_blank"><img :src="img.src"></a>
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <!--<div class="swiper-button-prev"></div>-->
    <!--<div class="swiper-button-next"></div>-->
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
        { src: 'http://i.chanpin100.com/155426722604888208-860x220', href: 'http://www.baidu.com' },
        { src: 'http://i.chanpin100.com/155426715535138224-860x220', href: 'http://www.baidu.com' },
        { src: 'http://i.chanpin100.com/155540280177039624-860x220', href: 'http://www.baidu.com' },
        { src: 'http://i.chanpin100.com/155426706264302441-860x220', href: 'http://www.baidu.com' }
      ]
    }
  },

  mounted () {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 2500
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev'
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
