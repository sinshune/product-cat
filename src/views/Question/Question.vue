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
import QuestionItem from '@/components/QuestionItem/QuestionItem'

export default {
  name: 'Question',

  data () {
    return {
      questionList: [
        {
          id: 24355,
          title: '问题1',
          answerVol: 18,
          readVol: 1235,
          releaseDate: moment(1558935991449).format('YYYY-MM-DD')
        },
        {
          id: 24356,
          title: '问题2',
          answerVol: 23,
          readVol: 4334,
          releaseDate: moment(1558935991449).format('YYYY-MM-DD')
        }
      ]
    }
  },

  components: {
    QuestionItem
  }
}
</script>
