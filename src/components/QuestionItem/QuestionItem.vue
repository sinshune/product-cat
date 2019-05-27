<!--
    content: 提问 - 列表
    author: Sinshune.
-->

<template>
  <div class="question-item">
    <table>
      <tbody>
        <tr>
          <td class="item-answer">
            <span>{{question.answerVol}}</span><br>
            <span>回答</span>
          </td>
          <td class="item-read">
            <span>{{question.readVol}}</span><br>
            <span>阅读</span>
          </td>
          <td class="item-title">
            <router-link :to="{path: `/question/${question.id}`}">{{question.title}}</router-link>
            <div>
              <span class="avatar">
                <img :src="userInfo.avatar">
              </span>
              <span class="username">{{userInfo.username}}</span>
              <span>{{question.releaseDate}}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QuestionItem',

  data () {
    return {
      userInfo: {
        username: '',
        avavtor: ''
      }
    }
  },

  props: {
    question: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'mobile'
    ])
  },

  mounted () {
    console.log('mark: ', this.$store.state.user.userInfo)
  }
}
</script>

<style lang="scss" scoped>
.question-item {
  width: 730px;
  margin: 0 auto;
  padding: 10px 0;
  font-size: 12px;

  .item-answer {
    width: 48px;
    text-align: center;
    vertical-align: top;
    line-height: 1.6;
    text-align: center;
    color: #f58220;
    span:first-child {
      font-size: 16px;
    }
  }
  .item-read {
    width: 48px;
    text-align: center;
    vertical-align: top;
    line-height: 1.6;
    text-align: center;
    color: #999999;
    span:first-child {
      font-size: 16px;
    }
  }
  .item-title {
    padding-left: 10px;
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    div {
      color: #999;
      font-size: 12px;
      line-height: 1.6;
    }
  }
}
</style>
