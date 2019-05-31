<!--
    content: 提问
    author: Sinshune.
-->

<template>
  <div class="question">
    <QuestionItem v-for="question in questionList"
                  :key="question.id"
                  :question="question"
    ></QuestionItem>
  </div>
</template>

<script>
import moment from 'moment'
import http from '@/utils/request'
import QuestionItem from '@/components/QuestionItem/QuestionItem'

export default {
  name: 'Question',

  data () {
    return {
      questionList: []
    }
  },

  components: {
    QuestionItem
  },

  methods: {
  },

  mounted () {
    http.get(`/v3/get/articleList?isCheck=1&category=question`).then(
      res => {
        this.questionList = res.resultObject.articleList.map(art => {
          art.href = `/article/${art.artId}`
          art.avatar = `localhost${art.avatar}`
          art.releaseDate = moment(art.releaseDate).format('YYYY-MM-DD')
          return art
        })
      }
    )
  }
}
</script>
