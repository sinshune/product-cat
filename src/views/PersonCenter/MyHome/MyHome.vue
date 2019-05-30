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
            <el-table-column prop="isCheck"
                             label="状态"
                             :filters="[{ text: '审核中', value: 0 }, { text: '已发布', value: 1 }, { text: '审核失败', value: 2 }]"
                             :filter-method="filterArtState"
                             filter-placement="bottom-end"
            >
              <template slot-scope="scope">
                {{scope.row.isCheck == 0 ? '审核中' : scoped.row.isCheck == 1 ? '已发布' : '审核失败'}}
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="delArticle(scope.row.artId)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">修改</el-button>
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
            <el-table-column prop="isCheck" label="状态">
              <template slot-scope="scope">
                {{scope.row.isCheck == 0 ? '审核中' : scoped.row.isCheck == 1 ? '已发布' : '审核失败'}}
              </template>
            </el-table-column>
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
      materialList: []
    }
  },

  methods: {
    delArticle (artId) {
      console.log('artId: ', artId)
    },

    // 获取"我发表的文章"
    getArticleList () {
      http.get(`/v3/get/articleList`, {
        userId: getUserId()
      }).then(res => {
        console.log('我发表的文章列表: ', res.resultObject.articleList)
        this.articleList = res.resultObject.articleList
      })
    },

    // 获取"我上传的素材"
    getMaterialList () {
      http.get(`/v3/get/materialList`, {
        userId: getUserId()
      }).then(res => {
        console.log('我上传的素材列表: ', res.resultObject.articleList)
        this.articleList = res.resultObject.articleList
      })
    },

    // 切换tab
    onSwitchTab (tab, evt) {
      console.log(tab.name)
    },

    // 通过状态过滤我的文章
    filterArtState (value, row) {
      console.lov(value, row)
    }
  },

  mounted () {
    this.getArticleList()
    this.getMaterialList()
  }
}
</script>

<style lang="scss" scoped>

</style>
