<template>
  <div id="app">
    <Header></Header>
    <div class="container" :style="{width: $store.getters.mobile ? '' : '1170px'}">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
