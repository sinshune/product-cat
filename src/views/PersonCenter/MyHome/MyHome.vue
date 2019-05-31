<!--
    content: 个人中心 - 我的资料
    author: Sinshune.
-->

<template>
  <div class="my-home">
    <el-tabs type="card" v-model="defaultTab" @tab-click="onSwitchTab">
      <el-tab-pane v-for="tab in tabs"
                   :key="tab.name"
                   :label="tab.label"
                   :name="tab.name"
      >
        <div v-if="defaultTab === 'article'">
          <el-table :data="articleList" border style="width: 98%; margin: 0 auto;">
            <el-table-column prop="artId" label="文章ID">
              <template slot-scope="scope">
                <router-link :to="{path: `/article/${scope.row.artId}`}">{{scope.row.artId}}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="title" label="文章标题"></el-table-column>
            <el-table-column prop="releaseDate" label="发布日期" width="180"></el-table-column>
            <el-table-column prop="readVol" label="阅读量"></el-table-column>
            <el-table-column prop="commentVol" label="评论量"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="getArtDetail(scope.row.artId)" type="text" size="small">详情</el-button>
                <el-button @click="delArticle(scope.row.artId)" type="text" size="small">删除</el-button>
                <!--<el-button type="text" size="small">修改</el-button>-->
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="defaultTab === 'material'">
          <el-table :data="materialList" border style="width: 98%; margin: 0 auto;">
            <el-table-column prop="artId" label="文章ID">
              <template slot-scope="scope">
                <router-link :to="{path: `/article/${scope.row.artId}`}">{{scope.row.artId}}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="title" label="文章标题"></el-table-column>
            <el-table-column prop="releaseDate" label="发布日期" width="180"></el-table-column>
            <el-table-column prop="readVol" label="阅读量"></el-table-column>
            <el-table-column prop="commentVol" label="评论量"></el-table-column>
            <!--<el-table-column prop="isCheck" label="状态">-->
              <!--<template slot-scope="scope">-->
                <!--{{scope.row.isCheck == 0 ? '审核中' : scoped.row.isCheck == 1 ? '已发布' : '审核失败'}}-->
              <!--</template>-->
            <!--</el-table-column>-->
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="delArticle(scope.row.artId)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getUserId } from '../../../utils/auth'
import http from '@/utils/request'

export default {
  name: 'MyHome',

  data () {
    return {
      defaultTab: 'article',
      tabs: [
        { label: '我发表的文章', name: 'article' },
        { label: '我上传的素材', name: 'material' }
      ],
      articleList: [],
      materialList: [],
      isCheck: 1
    }
  },

  methods: {
    delArticle (artId) {
      console.log('artId: ', artId)
      http.delete(`/v3/delete/${artId}`).then(res => {
        // 获取 我发表的文章 列表
        http.get(`/v3/get/articleList?userId=${getUserId()}&isCheck=0`).then(res => {
          console.log('res: ', res)
          this.articleList = res.resultObject.articleList
        })
      })
    },

    getArtDetail (artId) {
      this.$router.push(`/article/${artId}`)
    },

    // 切换tab
    onSwitchTab (tab, evt) {
      console.log(tab.name)
      if (tab.name === 'article') {
        // 获取 我发表的文章 列表
        http.get(`/v3/get/articleList?userId=${getUserId()}&isCheck=0`).then(res => {
          console.log('res: ', res)
          this.articleList = res.resultObject.articleList
        })
      } else if (tab.name === 'material') {
        // this.getMaterialList()
      }
    },

    // 通过状态过滤我的文章
    filterArtState (value, row) {
      console.lov(value, row)
    }
  },

  mounted () {
    // 获取 我发表的文章 列表
    // fixmin
    // http.get(`/v3/get/articleList?userId=${getUserId()}&isCheck=1`).then(res => {
    http.get(`/v3/get/articleList?userId=${this.$store.getters.userId}&isCheck=0`).then(res => {
      console.log('res: ', res)
      this.articleList = res.resultObject.articleList
    })

    // 获取 我上传的素材  列表
    http.get(`/v3/getMaterialList?userId=${this.$store.getters.userId}&isCheck=1`)
  }
}
</script>

<style lang="scss" scoped>

</style>
