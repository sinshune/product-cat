<template>
  <div id="app">
    <Header></Header>
    <div class="container" :style="{width: $store.getters.mobile ? '' : '1200px'}">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/scss/common.scss';

.container {
  padding: 15px;
  margin: 0 auto;
}
</style>
