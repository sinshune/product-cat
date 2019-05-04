<!--
    content: 文章详情
    author: Sunshine.
-->

<template>
  <div class="article-detail">
    <div class="article-content" :style="{width: mobile ? '100%': '860px'}">
      <div class="article-list-container">
        <h2>{{article.title}}</h2>
        <div class="article-info">
          <span>发布于{{article.releaseDate}}</span>
          <span>阅读 {{article.readVol}}</span>
          <span>评论 {{article.commentVol}}</span>
          <span>喜欢 {{article.likeVol}}</span>
        </div>
        <p class="article-survey">{{article.survey}}</p>
        <p class="art-content" v-html="article.artContent"></p>
      </div>

      <el-row style="margin: 20px; text-align: right;">
        <button class="like-btn"><i class="icon iconfont iconxihuan"></i> <span>喜欢</span> {{article.likeVol}}</button>
      </el-row>
    </div>

    <div class="aside-hidden" v-if="!mobile">
      <!-- 排行榜 -->
      <RankList :rank-list="rankList"/>

      <!-- 作者专栏 -->
      <AuthorColumn style="margin-top: 20px" :author-list="auhtorList"/>
    </div>
  </div>
</template>

<script>
import { keepDecimal } from '../../utils/utils'
import moment from 'moment'
import { mapGetters } from 'vuex'
import RankList from '@/components/RankList/RankList'
import AuthorColumn from '@/components/AuthorColumn/AuthorColumn'

export default {
  name: 'ArticleDetail',

  data () {
    return {
      article: {},
      rankList: [], // 排行榜
      auhtorList: [] // 作者专栏
    }
  },

  methods: {
    // 获取文章详情
    getArticleDetail (artId) {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/article-detail').then(
        data => {
          let rst = data.data.resultObject
          rst.releaseDate = moment(rst.releaseDate).format('YYYY-MM-DD')
          this.article = rst
        }
      )
    },

    // 获取当前用户收藏的文章Id

    // 获取排行榜信息
    getRankList () {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/rank-list').then(
        (data) => {
          let rst = data.data
          this.rankList = rst.resultObject.map(art => {
            art.readVol = keepDecimal(art.readVol, 1) + '万'
            return art
          })
        }
      ).catch()
    },

    // 专栏作者列表
    getAuthorList () {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/author-column').then(
        (data) => {
          this.auhtorList = data.data.resultObject
        }
      )
    }
  },

  computed: {
    ...mapGetters(['mobile'])
  },

  mounted () {
    this.getRankList()
    this.getAuthorList()
    this.getArticleDetail('artId')
  },

  components: {
    RankList,
    AuthorColumn
  }
}
</script>

<style lang="scss" scoped>
.article-detail  {
  .article-content {
    float: left;
    margin-bottom: 173px;
    background: #FFFFFF;
    .article-list-container {
      margin: 30px;
      h2 {
        margin-bottom: 10px;
        font-size: 30px;
        line-height: 42px;
        font-weight: 700;
        color: #333;
      }
      .article-info {
        font-size: 14px;
        color: #999;
        span {
          margin-right: 20px;
        }
      }
      .article-survey {
        margin: 20px 0;
        font-size: 14px;
        padding: 15px 2px;
        word-break: break-all;
        word-wrap: break-word;
        color: #666;
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
        background-color: #fbfbfb;
        border-radius: 2px;
      }
    }
  }

  .like-btn {
    padding: 6px 20px;
    width: 150px;
    border: none;
    border-radius: 100px;
    background: transparent;
    border: 1px solid #F6A0A0;
    color: #EC4141;
    cursor: pointer;
  }

  .aside-hidden {
    float: right;
  }
}
</style>

<style lang="scss">
  .art-content p {
    font-size: 16px !important;
  }
  .art-content img {
    width: 100% !important;
  }
</style>
