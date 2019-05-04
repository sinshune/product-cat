<!--
    content: 主页 - 作者专栏
    author: Sunshine.
-->

<template>
  <div class="friendship-link">
    <Card>
      <div slot="cardTitle">友情链接</div>
      <ul slot="cardContent" class="link-list">
        <li v-for="link in linkList" :key="link.linkHref">
          <LinkItem :link="link"/>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import LinkItem from './LinkItem'

export default {
  name: 'FriendshipLink',

  props: {
    linkList: {
      type: Array,
      required: true
    }
  },

  components: {
    Card,
    LinkItem
  }
}
</script>

<style lang="scss" scoped>

</style>
