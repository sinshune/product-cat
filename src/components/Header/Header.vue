<!--
    content: 顶部导航栏
    author: Sinshune.
-->
<template>
  <div class="header">
    <!-- pc端 -->
    <div class="header-pc" v-if="!$store.getters.mobile">
      <!-- logo -->
      <div class="logo">
        <img src="./../../assets/imgs/logo.png" width="160" height="57">
      </div>
      <!-- 导航栏 -->
      <ul class="menu-container">
        <li v-for="menu of menuContainer" :key="menu.href">
          <router-link :to="menu.href">{{menu.label}}</router-link>
        </li>
      </ul>
      <!-- 登录/注册 -->
      <ul class="user-corner">
        <li><a href="">登录</a> <a style="color: #cccccc;">|</a> <a href="">注册</a></li>
        <li><a href="" class="publish">投稿</a></li>
      </ul>
    </div>

    <!-- 移动端 -->
    <div class="header-mobile" v-if="$store.getters.mobile">
      <!-- logo -->
      <div class="logo">
        <img src="./../../assets/imgs/logo.png" width="102" height="36">
        <i class="icon iconfont" :class="[isMenuShow ? 'iconguanbi' : 'iconcaidan1']" style="font-weight: 700;" @click="toggleMenu()"></i>
      </div>
      <transition enter-active-class="animated slideInDown" leave-active-class="animated fadeOutUpBig">
        <div class="nav-wrapper" v-if="isMenuShow">
          <!-- 导航栏 -->
          <div class="menu-container">
            <van-tabs>
              <van-tab v-for="menu of menuContainer" :key="menu.href" :title="menu.label">
                <div slot="title">
                  <router-link :to="menu.href">{{menu.label}}</router-link>
                </div>
              </van-tab>
            </van-tabs>
          </div>
          <!-- word -->
          <p class="word">
            产品猫——专注于产品经理的学习与交流
          </p>
          <!-- 搜索 -->
          <div class="search-wrapper">
            <van-search placeholder="请输入搜索关键词" v-model="keyword" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import 'vuex'

export default {
  name: 'Header',

  data () {
    return {
      menuContainer: [
        {label: '首页', href: '/home'},
        {label: '文章', href: '/article'},
        {label: '网址导航', href: '/navigator'},
        {label: '课程推荐', href: '/recommend'},
        {label: '教程', href: '/Course'},
        {label: '素材下载', href: '/download'},
        {label: '关于我们', href: '/about-us'}
      ],
      isMenuShow: false,
      keyword: ''
    }
  },

  methods: {
    toggleMenu () {
      this.isMenuShow = !this.isMenuShow
    }
  }
}
</script>

<style lang="scss">
  @import "styles/header-pc";
  @import "styles/header-mobile";

  .header {
    width: 100%;
    background: #ffffff;
  }
</style>
