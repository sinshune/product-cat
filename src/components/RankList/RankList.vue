<!--
    content: 主页 - 排行榜
    author: Sunshine.
-->

<template>
  <div class="rank-list">
    <Card>
      <div slot="cardTitle">排行榜</div>
      <ul slot="cardContent" class="article">
        <!--transition: all .3s cubic-bezier(.25,.1,.25,1);-->
        <li v-for="(art, index) in rankList" :key="art.artId" style="margin-bottom: 15px">
          <OrderIcon :index="index+1" style="margin-right: 10px;"/>
          <a :href="art.href">{{art.title}}</a>
          <span class="art-readVol">{{art.readVol}}</span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import OrderIcon from '@/components/OrderIcon/OrderIcon'

export default {
  name: 'RankList',

  props: {
    rankList: {
      type: Array,
      required: true
    }
  },

  components: {
    Card,
    OrderIcon
  }
}
</script>

<style lang="scss" scoped>
  ul.article {
    li:last-child {
      margin: 0;
    }
    li {
      a {
        overflow: hidden;
        white-space: nowrap;
        vertical-align: middle;
        text-overflow: ellipsis;
        display: inline-block;
        width: 200px;
        color: #333;
        font-size: 14px;
        &:hover {
          color: #EC4141;
        }
      }
      span.art-readVol {
        font-size: 14px;
        display: inline-block;
        width: 45px;
        text-align: right;
        vertical-align: top;
        color: #999;
      }
    }
  }
</style>
