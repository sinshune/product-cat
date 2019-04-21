<!--
    content: 主页
    author: Sunshine.
-->
<template>
  <div class="home">
    <van-row gutter="10">
      <van-col>
        <Carousel></Carousel>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel'

export default {
  name: 'Home',

  components: {
    Carousel
  }
}
</script>

<style lang="scss" scoped>
.home {
  .van-col {
    overflow: hidden;
  }
  .van-col img {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
