<!--
    content: 主页
    author: Sunshine.
-->
<template>
  <div class="home">
    <div class="main-content">
      <Carousel :imgList="imgList" :style="{width: mobile ? '100%': '860px'}"></Carousel>

      <div class="article-list-container" v-if="!mobile">
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
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel'
import Card from '@/components/Card/Card'
import OrderIcon from '@/components/OrderIcon/OrderIcon'
import ArticleItem from './ArticleItem/ArticleItem'
import { mapGetters } from 'vuex'
import { keepDecimal } from './../../utils/utils'
import moment from 'moment'

export default {
  name: 'Home',

  data () {
    return {
      imgList: [
        { src: 'http://i.chanpin100.com/155426722604888208-860x220', href: 'http://www.baidu.com' },
        { src: 'http://i.chanpin100.com/155426715535138224-860x220', href: 'http://www.baidu.com' },
        { src: 'http://i.chanpin100.com/155540280177039624-860x220', href: 'http://www.baidu.com' },
        { src: 'http://i.chanpin100.com/155426706264302441-860x220', href: 'http://www.baidu.com' }
      ],
      rankList: [], // 排行榜
      articleList: [], // 文章列表
      articleTabs: [
        {title: '今日阅读', category: 'todayRead'},
        {title: 'Axure学习', category: 'axureStudy'},
        {title: '行业动态', category: 'industryDynamics'},
        {title: '产品设计', category: 'productDesign'},
        {title: '交互设计', category: 'interactiveDesign'},
        { title: '职业经验', category: 'occupationExperience' }
      ]
    }
  },

  methods: {
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
    }
  },

  computed: {
    ...mapGetters(['mobile']),

    readVolMark: (readVol) => {
      return parseFloat(readVol / 10000, 1) + '万'
    }
  },

  components: {
    Carousel,
    Card,
    OrderIcon,
    ArticleItem
  },

  mounted () {
    this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/rank-list').then(
      (data) => {
        let rst = data.data
        this.rankList = rst.resultObject.map(art => {
          art.readVol = keepDecimal(art.readVol, 1) + '万'
          return art
        })
      }
    ).catch()

    this.getArticleList('todayRead')
  }
}
</script>

<style lang="scss" scoped>
.home {
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
