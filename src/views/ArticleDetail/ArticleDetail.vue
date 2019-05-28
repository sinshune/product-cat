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
          <!--<span>喜欢 {{article.likeVol}}</span>-->
        </div>
        <p class="article-survey">{{article.survey}}</p>
        <p class="art-content" v-html="article.artContent"></p>
      </div>

      <!--<el-row style="margin: 20px; text-align: right;">-->
        <!--<button class="like-btn"><i class="icon iconfont iconxihuan"></i> <span>喜欢</span> {{article.likeVol}}</button>-->
      <!--</el-row>-->

      <el-row>
        <div class="comment-vol">{{article.commentVol}} 条评论</div>
      </el-row>

      <el-row>
        <CommentItem v-for="(comment, index) in commentList" :key="index" :comment="comment"/>
        <Comment :placeholder="article.commentVol==0 ? '当前还没有评论, 快来抢沙发吧': '期待你的评论哦~'"/>
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
import Comment from '@/components/Comment/Comment'
import CommentItem from '@/components/CommentItem/CommentItem'
import SubComment from '@/components/SubComment/SubComment'

export default {
  name: 'ArticleDetail',

  data () {
    return {
      article: {},
      rankList: [], // 排行榜
      auhtorList: [], // 作者专栏
      commentList: [
        {
          artId: 108363,
          commentId: 10001,
          userInfo: {
            userId: 123,
            username: '一只特立独行的咸鱼',
            avatar: 'http://i.chanpin100.com/152022653877138648-crop-90x90'
          },
          commentTime: 1557282318000,
          commentContent: '感谢作者分享',
          commentChildren: [
            {
              artId: 108363,
              parentCommentId: 10001,
              commentId: 10002,
              beReplyUserInfo: {
                userId: 123,
                username: '一只特立独行的咸鱼',
                avatar: 'http://i.chanpin100.com/152022653877138648-crop-90x90'
              },
              userInfo: {
                userId: 121,
                username: '一只特立独行的猪',
                avatar: 'http://i.chanpin100.com/149665234441457329-crop-90x90'
              },
              commentTime: 1557288836000,
              commentContent: '我也感谢作者的分享, 谢谢作者, 谢谢楼主'
            },
            {
              artId: 108363,
              parentCommentId: 10001,
              commentId: 10003,
              beReplyUserInfo: {
                userId: 123,
                username: '一只特立独行的咸鱼',
                avatar: 'http://i.chanpin100.com/152022653877138648-crop-90x90'
              },
              userInfo: {
                userId: 127,
                username: '路人丁',
                avatar: 'http://i.chanpin100.com/146795713502145912'
              },
              commentTime: 1557292392000,
              commentContent: '同意楼上'
            }
          ]
        },
        {
          artId: 108363,
          commentId: 10004,
          userInfo: {
            userId: 125,
            username: '路人甲',
            avatar: 'http://i.chanpin100.com/149694344543006289-crop-90x90'
          },
          commentTime: 1557285036000,
          commentContent: '文章立意深刻, 思路清晰, 大佬之作',
          commentChildren: [
            {
              artId: 108363,
              parentCommentId: 10004,
              commentId: 10005,
              beReplyUserInfo: {
                userId: 125,
                username: '路人甲',
                avatar: 'http://i.chanpin100.com/149694344543006289-crop-90x90'
              },
              userInfo: {
                userId: 126,
                username: '花开花落',
                avatar: 'http://i.chanpin100.com/151482189378657274-crop-90x90'
              },
              commentTime: 1557288939000,
              commentContent: '同意楼主观点, 大佬之作'
            },
            {
              artId: 108363,
              parentCommentId: 10004,
              commentId: 10006,
              beReplyUserInfo: {
                userId: 125,
                username: '路人甲',
                avatar: 'http://i.chanpin100.com/149694344543006289-crop-90x90'
              },
              userInfo: {
                userId: 129,
                username: '路人丙',
                avatar: 'http://i.chanpin100.com/151482189378657274-crop-90x90'
              },
              commentTime: 1557298573000,
              commentContent: '评论很到位'
            }
          ]
        },
        {
          artId: 108363,
          parentCommentId: 10004,
          commentId: 10007,
          beReplyUserInfo: {
            userId: 125,
            username: '路人甲',
            avatar: 'http://i.chanpin100.com/149694344543006289-crop-90x90'
          },
          userInfo: {
            userId: 130,
            username: '我是PM',
            avator: 'http://thirdqq.qlogo.cn/qqapp/101035033/D3CEE504C5280D3FD22A8BF7BCE0FEC0/100'
          },
          commentTime: 1557307399000,
          commentContent: '一看作者就具有运营和产品思维, 值得学习, 感谢分享'
        }
      ]
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

    // 获取当前文章的评论

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
    AuthorColumn,
    Comment,
    CommentItem,
    SubComment
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

    .comment-vol {
      margin: 10px 30px;
      font-size: 16px;
      padding: 13px 0;
      border-top: 1px solid #EFEFEF;
      border-bottom: 1px solid #EFEFEF;
      font-weight: 500;
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
