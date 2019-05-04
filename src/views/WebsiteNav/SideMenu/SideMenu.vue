<!--
    content: 网址导航 - 左侧导航菜单
    author: Sinshune.
-->
<template>
  <div class="website-nav">
    <el-menu>
      <el-menu-item v-for="(menu, index) in menuList" :key="index" :index="index">
        <span slot="title"><a :href="menu.anchor">{{menu.label}}</a></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',

  data () {
    return {
      menuList: [
        {label: '热门推荐', anchor: '#hot'}
        // '热门推荐',
        // '前端开发',
        // '设计教程',
        // '界面设计',
        // '灵感创意',
        // '设计工具',
        // '素材资源',
        // '酷站模板',
        // '字体设计',
        // '配色方案',
        // '摄影美图',
        // '漫画插图',
        // '行业视野'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
