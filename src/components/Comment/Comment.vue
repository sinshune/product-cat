<!--
    content: 评论组件
    author: Sunshine.
-->

<template>
  <div class="comment">
    <el-card :body-style="{padding: '0 30px'}" shadow="never">
      <el-input type="textarea" rows="4" :placeholder="placeholder" v-model="commentContent"/>
      <div class="save-comment">
        <span class="user-info">
          <img src="http://i.chanpin100.com/155703824062867147-crop-90x90" alt="">
          <a href="">{{username || '一只特立独行的猪'}}</a>
        </span>
        <el-button type="primary" class="publish-btn" @click="onPublish()">发表</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getCookie } from '../../utils/utils'

export default {
  name: 'Comment',

  data () {
    return {
      username: '',
      commentContent: ''
    }
  },

  props: {
    placeholder: {
      type: String,
      required: true
    }
  },

  methods: {
    onPublish () {
      if (!this.commentContent) {
        this.$message({
          message: '评论内容不能为空哦',
          type: 'warning'
        })
      }
    }
  },

  mounted () {
    this.username = getCookie('username')
  }
}
</script>

<style lang="scss">
@import "styles/Comment";
</style>
