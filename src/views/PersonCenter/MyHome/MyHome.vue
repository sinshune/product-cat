<!--
    content: 个人中心 - 我的资料
    author: Sinshune.
-->

<template>
  <div class="my-home">
    <el-tabs type="card" v-model="defaultTab">
      <el-tab-pane v-for="tab in tabs"
                   :key="tab.name"
                   :label="tab.label"
                   :name="tab.name"
      >
        <div v-if="defaultTab === 'article'">
          <el-table :data="artileList" border style="width: 98%; margin: 0 auto;">
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
    }
  },

  mounted () {
    this.list = [
      {
        artId: 58765,
        title: '文章的标题',
        releaseDate: 32423452354345,
        readVol: 234,
        commentVol: 3
      }
    ]
  }
}
</script>

<style lang="scss" scoped>

</style>
