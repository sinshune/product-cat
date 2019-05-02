<!--
    content: 主页 - 作者专栏 - 作者信息
    author: Sinshune.
-->

<template>
  <div class="author-item">
    <span class="author-avatar">
      <img :src="author.avatar">
    </span>

    <div class="author-right">
      <div class="author-header">
        <a href="javascript:;">{{author.username}}</a>
      </div>
      <div class="author-company" author.company>{{author.company}} {{author.position}}</div>
      <div class="author-intro" v-if="author.intro" :title="author.intro">{{author.intro}}</div>
      <div class="author-wechat" v-if="author.wechat">个人微信: {{author.wechat}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorItem',

  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .author-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #dfdfdf;

    .author-avatar {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .author-right {
      flex: 1;
      margin-left: 15px;
      .author-header {
        margin-bottom: 6px;
        a {
          font-size: 15px;
          line-height: 18px;
          transition: all .3s cubic-bezier(.25, .1, .25, 1);
          &:hover {
            text-decoration: none;
            color: #F13F3F;
          }
        }
      }

      .author-company {
        margin-bottom: 12px;
        font-size: 12px;
        line-height: 14px;
        color: #999;
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
      }

      .author-intro {
        bottom: 0;
        margin-top: 7px;
        font-size: 14px;
        line-height: 20px;
        color: #666;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
</style>
