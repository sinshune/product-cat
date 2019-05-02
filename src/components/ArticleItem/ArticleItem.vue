<!--
    content: 主页 - 文章列表
    author: Sinshune.
-->
<template>
  <div class="article-item">
    <router-link :to="article.href">
      <img :src="article.img"  :style="{width: mobile ? '170px': '223px'}">
    </router-link>

    <div class="article-right">
      <h3 class="article-head">{{article.title}}</h3>
      <h5 class="article-survey">{{article.survey}}</h5>
      <div class="article-info">
        <span class="author">
          <span class="author-img" v-if="article.avatar">
            <img :src="article.avatar">
          </span>
          {{article.username}}
        </span>
        <span class="release-date">{{article.releaseDate}}</span>
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
      default () {
        return {
          artId: 108363,
          title: '阿里巴巴的战略中台是什么？',
          img: 'http://i.chanpin100.com/155660543194826955-256x160',
          survey: '最近中台战略比较火，你知道什么是中台么？',
          avatar: 'http://q.qlogo.cn/qqapp/101035033/586D9851C413A9C0F6EFAA7525B09A6A/100',
          author: '德艺双馨产品刘',
          releaseDate: 1556553600000,
          readVol: 1125,
          commentVol: 0,
          likeVol: 0,
          artContent: '阿里巴巴的战略中台是什么？阿里巴巴的战略中台是什么？'
        }
      }
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
    img {
      &:hover {
        transform: scale(1.2);
        transition: transform .5s ease 0s;
      }
    }
  }

  .article-right {
    flex: 1;
    position: relative;
    margin-left: 20px;
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
      position: absolute;
      bottom: 0;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #cccccc;
      &>span {
        display: inline-block;
        margin-right: 20px;
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
