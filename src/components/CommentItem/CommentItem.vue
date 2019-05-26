<!--
    content: 评论项
    author: Sunshine.
-->

<template>
  <div class="comment-item">
    <div class="comment-wrapper">
      <div class="avatar">
        <img :src="comment.userInfo.avatar" alt="">
      </div>
      <div class="comment-content">
        <h5>{{comment.userInfo.username}}</h5>
        <small>{{comment.commentTime}}</small>
        <p>{{comment.commentContent}}</p>
        <a :data-username="comment.userInfo.username" :data-userid="comment.userInfo.userId" ref="user" @click="onReply()">回复</a>
      </div>
    </div>
    <el-row v-if="comment.commentChildren && comment.commentChildren.length>0" style="padding-left: 70px">
      <subComment v-for="(subComment, index) in comment.commentChildren" :key="index" :subComment="subComment" @onSubReply="onSubReply"/>
    </el-row>

    <el-row v-if="isCommentShow" style="padding-left: 70px;">
      <Comment :placeholder="placeholder"/>
    </el-row>
  </div>
</template>

<script>
import Comment from '@/components/Comment/Comment'
import subComment from '@/components/SubComment/SubComment'
import { getCookie } from '../../utils/utils'

export default {
  name: 'CommentItem',

  data () {
    return {
      // 当前登录用户信息
      userId: '1001',
      username: '一只特立独行的猪',
      isCommentShow: false,

      placeholder: ''
    }
  },

  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  methods: {
    onReply (evt) {
      // 当前登录用户回复评论用户
      this.placeholder = `${this.username} 回复 ${this.$refs.user.dataset.username}`
      if (!this.isCommentShow) {
        this.isCommentShow = !this.isCommentShow
      } else {
        this.isCommentShow = true
      }
    },

    onSubReply (username, userid) {
      this.placeholder = `${this.username} 回复 ${username}`
      if (!this.isCommentShow) {
        this.isCommentShow = !this.isCommentShow
      } else {
        this.isCommentShow = true
      }
      // console.log('username, userid: ', username, userid)
    }
  },

  computed: {
  },

  mounted () {
    this.username = getCookie('username')

    console.log('comment: ', this.comment)
  },

  components: {
    Comment,
    subComment
  }
}
</script>

<style lang="scss">
@import "./CommentItem";
</style>
