<!--
    content: 主页 - 作者专栏
    author: Sunshine.
-->

<template>
  <div class="author-column">
    <Card>
      <div slot="cardTitle">作者专栏</div>
      <ul slot="cardContent" class="author-list">
        <li v-for="author in authorList" :key="author.userId">
          <AuthorItem :author="author"/>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import AuthorItem from './AuthorItem'

export default {
  name: 'AuthorColumn',

  props: {
    authorList: {
      type: Array,
      required: true
    }
  },

  components: {
    Card,
    AuthorItem
  }
}
</script>

<style lang="scss" scoped>
</style>
