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
          <img :src="avatar" alt="">
          <a href="">{{username || '一只特立独行的猪'}}</a>
        </span>
        <el-button type="primary" class="publish-btn" @click="onPublish()">发表</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getCookie } from '../../utils/utils'
import { getUserId } from '../../utils/auth'
import http from '@/utils/request'

export default {
  name: 'Comment',

  data () {
    return {
      artId: '',
      username: '',
      avatar: '',
      commentContent: ''
    }
  },

  props: {
    placeholder: {
      type: String,
      required: true
    },
    parentCommentId: {
      type: Number,
      required: false
    },
    byReplyUserId: {
      type: Number,
      required: false
    }
  },

  methods: {
    onPublish () {
      console.log('mark1: ', this.parentCommentId, this.byReplyUserId)
      if (!this.commentContent) {
        this.$message({
          message: '评论内容不能为空哦',
          type: 'warning'
        })
      } else {
        let myDate = new Date()
        http.post('/v3/save/comment', {
          artId: this.artId,
          parentCommentId: this.parentCommentId,
          byReplyUserId: this.byReplyUserId,
          userId: getUserId() || getCookie('userId'),
          commentTime: myDate.getTime(),
          commentContent: this.commentContent
        }).then(res => {
          this.commentContent = ''
          console.log('res: ', res)
        })
      }
    }
  },

  mounted () {
    this.username = getCookie('username')
    this.avatar = getCookie('avatar')
    this.artId = this.$router.currentRoute.params.artId
  }
}
</script>

<style lang="scss">
@import "styles/Comment";
</style>
