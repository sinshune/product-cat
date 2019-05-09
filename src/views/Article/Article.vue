<!--
    content: 文章
    author: Sinshune.
-->

<template>
  <div class="article">
    <div class="article-header">
      <h1>所有文章</h1>
      <p>-- 已发布文章 {{articleList.length}} 篇 --</p>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="article-item-wrapper" v-for="article of articleList" :key="article.artId" style="padding: 15px 30px;">
      <ArticleItem :article="article"/>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/ArticleItem'
import moment from 'moment'

export default {
  name: 'Article',

  data () {
    return {
      articleList: []
    }
  },

  methods: {
    // 通过"类别"获取文章列表
    getArticleList (category) {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/article-list').then(
        (data) => {
          this.articleList = data.data.resultObject.map(art => {
            art.href = `/article/${art.artId}`
            art.releaseDate = moment(art.releaseDate).format('YYYY-MM-DD')
            return art
          })
        }
      )
    }
  },

  mounted () {
    this.getArticleList('industryDynamics')
  },

  components: {
    ArticleItem
  }
}
</script>

<style lang="scss" scoped>
.article {
  .article-header {
    text-align: center;
    h1 {
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: bold;
      color: #ff5a00;
    }
    p {
      margin-bottom: 40px;
      font-size: 14px;
      color: #888;
    }
  }
}
</style>
