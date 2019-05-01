<!--
    content: 底部导航栏
    author: Sinshune.
-->
<template>
  <div class="footer">
    <ul>
      <li v-for="footer of footerList" :key="footer.href">
        <router-link :to="footer.href">
          <i class="icon iconfont" :class="footer.icon"></i><span style="display: block; height: 0"></span>{{footer.label}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      footerList: [
        { label: '首页', href: '/home', icon: 'iconshouye' },
        { label: '文章', href: '/article', icon: 'iconwenzhang' },
        { label: '收藏', href: '/collect', icon: 'iconshoucang' },
        { label: '我的', href: '/person-center', icon: 'iconwode1' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer {
  position: fixed;
  bottom: 0;
  z-index: 500;
  padding: 10px 0 0 0;
  width: 100%;
  border-top: .0625rem solid #ccc;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      a {
        font-size: 15px;
        i {
          font-size: 15px;
        }
        &.router-link-active {
          color: #f58220;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
