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
import http from '@/utils/request'

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
      http.get(`/v3/get/articleList?isCheck=1&category=course`).then(
        (data) => {
          this.courseList = data.resultObject.articleList.map(course => {
            course.href = `/course/${course.artId}`
            course.releaseDate = moment(course.releaseDate).format('YYYY-MM-DD')
            course.cover = `http://localhost:80/${course.cover}`
            course.avatar = `http://localhost:80/${course.avatar}`
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
