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
        <li v-if="!$store.getters.userInfo"><router-link to="/login-reg">登录 | 注册</router-link></li>
        <li class="upload">
          <a href="javascript:;" @click="onUpload()"><i class="icon iconfont iconshangchuan"></i></a>
        </li>
        <li class="avatar" v-if="$store.getters.userInfo">
          <el-dropdown>
            <router-link to="/person-center">
              <img src="http://q.qlogo.cn/qqapp/101035033/586D9851C413A9C0F6EFAA7525B09A6A/100">
            </router-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >
                <a @click="loginOut()">退出</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li><router-link to="/publish-article" class="publish">投稿</router-link></li>
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
import Upload from '@/components/Upload/Upload'

export default {
  name: 'Header',

  data () {
    return {
      menuContainer: [
        {label: '首页', href: '/home'},
        {label: '文章', href: '/article'},
        {label: '提问', href: '/question'},
        {label: '网址导航', href: '/website-nav'},
        {label: '教程', href: '/course'},
        {label: '素材下载', href: '/download'},
        {label: '关于我们', href: '/about-us'}
      ],
      isMenuShow: false,
      keyword: '',
      uploadForm: {
        title: '',
        desc: '',
        cover: '',
        content: ''
      }
    }
  },

  methods: {
    toggleMenu () {
      this.isMenuShow = !this.isMenuShow
    },

    onUpload () {
      const h = this.$createElement
      this.$msgbox({
        title: '上传文件',
        message: h('Upload', {
          props: {
            uploadForm: this.uploadForm
          }
        }, Upload),
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: '保存',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    },

    loginOut () {
      this.$store.commit('removeUserInfo')
      console.log(this.$store.getters.userInfo)
    }
  },

  components: {
    Upload
  }
}
</script>

<style lang="scss">
  @import "styles/header-pc";
  @import "styles/header-mobile";

  .header {
    width: 100%;
    background: #ffffff;
    box-shadow: 3px 1px 3px #d5d5d5;
  }
</style>
