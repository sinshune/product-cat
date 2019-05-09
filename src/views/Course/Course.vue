<!--
    content: 教程
    author: Sinshune.
-->

<template>
  <div class="course">
    <div class="course-header">
      <h1>所有教程</h1>
      <p>-- 已发布教程 {{courseList.length}} 篇 --</p>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>教程</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="course-item-wrapper" v-for="course of courseList" :key="course.artId" style="padding: 15px 30px;">
      <ArticleItem :article="course"/>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/ArticleItem'
import moment from 'moment'

export default {
  name: 'Course',

  data () {
    return {
      courseList: []
    }
  },

  methods: {
    // 获取教程列表
    getArticleList () {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/article-list').then(
        (data) => {
          this.courseList = data.data.resultObject.map(course => {
            course.href = `/course/${course.artId}`
            course.releaseDate = moment(course.releaseDate).format('YYYY-MM-DD')
            return course
          })
        }
      )
    }
  },

  mounted () {
    this.getArticleList()
  },

  components: {
    ArticleItem
  }
}
</script>

<style lang="scss" scoped>
.course {
    .course-header {
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
