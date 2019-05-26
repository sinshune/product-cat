<!--
    content: 评论回复组件
    author: Sunshine.
-->

<template>
  <div class="sub-comment">
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
  name: 'SubComment',

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
.sub-comment {
  padding: 5px 30px;
}
</style>
