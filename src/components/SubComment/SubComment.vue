<!--
    content: 评论回复组件
    author: Sunshine.
-->

<template>
  <div class="reply">
    <el-card class="box-card">
      <p class="reply-content">
        {{subComment.userInfo.username}} 回复 {{subComment.beReplyUserInfo.username}}: {{subComment.commentContent}}
      </p>
      <p>
        <time>{{subComment.commentTime}}</time>
        <a style="float:right;" :data-username="subComment.userInfo.username" :data-userid="subComment.userInfo.userId" ref="user" @click="onReply($event)">回复</a>
      </p>
    </el-card>
  </div>
</template>

<script>
import Comment from '@/components/Comment/Comment'

export default {
  name: 'Reply',

  data () {
    return {
    }
  },

  props: {
    subComment: {
      type: Object,
      required: true
    }
  },

  methods: {
    onReply (evt) {
      this.$emit('onSubReply', this.$refs.user.dataset.username, this.$refs.user.dataset.userid)
      // console.log(this.$refs.user.dataset.username)
      // this.isCommentShow = !this.isCommentShow
      // // 当前登录用户回复评论用户
      // this.placeholder = `${this.username} 回复${this.$refs.user.dataset.username}`
    }
  },

  mounted () {
    console.log('SubComment: ', this.subComment)
  },

  components: {
    Comment
  }
}
</script>

<style lang="scss">
.reply {
  padding: 5px 30px;
}
</style>
