<!--
    content: 主页
    author: Sunshine.
-->
<template>
  <div class="home">
    <div class="main-content" :style="{width: mobile ? '100%': '860px'}">
      <Carousel :imgList="imgList"></Carousel>

      <div class="article-list-container" :style="{width: mobile ? clientWidth : '860px'}">
        <van-tabs>
          <van-tab v-for="(tab, index) of articleTabs" :key="index" :title="tab.title">
            <div class="article-item-wrapper" v-for="article of articleList" :key="article.artId">
              <ArticleItem :article="article"/>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <div class="aside-hidden" v-if="!mobile">
      <!-- 排行榜 -->
      <RankList :rank-list="rankList"/>

      <!-- 作者专栏 -->
      <AuthorColumn style="margin-top: 20px" :author-list="auhtorList"/>

      <!-- 友情链接 -->
      <friendshipLink style="margin-top: 20px" :link-list="linkList"/>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel'
import ArticleItem from '../../components/ArticleItem/ArticleItem'
import RankList from './RankList/RankList'
import AuthorColumn from './AuthorColumn/AuthorColumn'
import FriendshipLink from './FriendshipLink/FriendshipLink'
import { mapGetters } from 'vuex'
import { keepDecimal } from './../../utils/utils'
import moment from 'moment'

export default {
  name: 'Home',

  data () {
    return {
      imgList: [
        { src: require('@/assets/imgs/Carousel/155426706264302441-860x220.jpg'), href: 'http://www.baidu.com' },
        { src: require('@/assets/imgs/Carousel/155426715535138224-860x220.jpg'), href: 'http://www.baidu.com' },
        { src: require('@/assets/imgs/Carousel/155426722604888208-860x220.jpg'), href: 'http://www.baidu.com' }
      ],
      articleTabs: [
        {title: '今日阅读', category: 'todayRead'},
        {title: 'Axure学习', category: 'axureStudy'},
        {title: '行业动态', category: 'industryDynamics'},
        {title: '产品设计', category: 'productDesign'},
        {title: '交互设计', category: 'interactiveDesign'},
        { title: '职业经验', category: 'occupationExperience' }
      ],
      rankList: [], // 排行榜
      articleList: [], // 文章列表
      auhtorList: [], // 作者专栏
      linkList: [], // 友情链接
      clientWidth: null
    }
  },

  methods: {
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

    // 通过"类别"获取文章列表
    getArticleList (category) {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/article-list').then(
        (data) => {
          this.articleList = data.data.resultObject.map(art => {
            art.href = `/article/${art.artId}`
            art.releaseDate = moment(art.releaseDate).format('YYYY-MM-DD')
            return art
          })
        }
      )
    },

    // 专栏作者列表
    getAuthorList () {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/author-column').then(
        (data) => {
          this.auhtorList = data.data.resultObject
        }
      )
    },

    //  友情链接列表
    getLinkLIst () {
      this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/link-list').then(
        data => {
          this.linkList = data.data.resultObject
        }
      )
    }
  },

  computed: {
    ...mapGetters(['mobile'])
  },

  components: {
    Carousel,
    ArticleItem,
    RankList,
    AuthorColumn,
    FriendshipLink
  },

  mounted () {
    this.getRankList()

    this.getArticleList('todayRead')

    this.getAuthorList()

    this.getLinkLIst()

    console.log(window.clientWidth)
    this.clientWidth = document.body.clientWidth - 30 + 'px'
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  overflow: hidden;
  .van-col {
    overflow: hidden;
    & img {
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .main-content {
    float: left;
  }
  .aside-hidden {
    float: right;
  }

  .article-list-container {
    background: #ffffff;
    margin-top: 20px;
    width: 860px;
    .article-item-wrapper {
      margin: 20px;
      margin-bottom: 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>
