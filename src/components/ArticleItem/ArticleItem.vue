<!--
    content: 主页 - 文章列表
    author: Sinshune.
-->
<template>
  <div class="article-item">
    <router-link :to="article.href" v-if="!mobile">
      <img :src="article.img"  style="width: 170px;">
    </router-link>

    <div class="article-right">
      <h3 class="article-head">
        <router-link :to="{path: `/article/${article.artId}`}">{{article.title}}</router-link>
      </h3>
      <h5 class="article-survey" v-if="!mobile">{{article.survey}}</h5>
      <div class="article-info">
        <span class="author">
          <span class="author-img" v-if="article.avatar">
            <img :src="article.avatar">
          </span>
          {{article.username}}
        </span>
        <span class="release-date" v-if="!mobile">{{article.releaseDate}}</span>
        <span>
          <i class="icon iconfont iconchakan2"></i>{{article.readVol}}
        </span>
        <span>
          <i class="icon iconfont iconpinglun1"></i>{{article.commentVol}}
        </span>
        <span>
          <i class="icon iconfont iconcollection"></i>{{article.likeVol}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['mobile'])
  }
}
</script>

<style lang="scss" scoped>
.article-item {
  display: flex;

  a {
    overflow: hidden;
    margin-right: 20px;
    img {
      &:hover {
        transform: scale(1.2);
        transition: transform .5s ease 0s;
      }
    }
  }

  .article-right {
    flex: 1;
    color: #333;

    .article-head {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      transition: all .3s cubic-bezier(.25,.1,.25,1);
      &:hover {
        text-decoration: none;
        color: #F13F3F;
      }
    }
    .article-survey {
      font-size: 14px;
      line-height: 2em;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .article-info {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #cccccc;
      &>span {
        display: inline-block;
        margin-right: 8px;
        i {
          margin-top: 1px;
        }

        &:not(:last-child) {
          &:hover {
            color: #f00;
          }
        }
      }

      .author {
        transition: all .3s cubic-bezier(.25,.1,.25,1);
        &:hover {
          text-decoration: none;
          color: #F13F3F;
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
