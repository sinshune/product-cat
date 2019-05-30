<!--
    content: 素材下载
    author: Sunshine.
-->

<template>
  <div class="download">
    <div class="banner">
      <!--<div class="search">-->
        <!--<el-input slot="prepend" v-model="searchKeyword" minlength="6" maxlength="16">-->
          <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
        <!--</el-input>-->
      <!--</div>-->
    </div>

    <div class="download-container">
      <!--<div style="display: flex;">-->
        <!--<Material style="flex: 1;"/>-->
      <!--</div>-->
      <el-row :gutter="20">
        <el-col style="margin-top: 20px" :lg="6" :md="6" :sm="8" :xs="12" v-for="material in materialList" :key="material.id">
          <Material :material="material"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getFileType } from '../../utils/utils'
import Material from '@/components/Material/Material'

export default {
  name: 'Download',

  data () {
    return {
      searchKeyword: '',
      materialList: []
    }
  },

  methods: {
    getTip (type) {
      const noAutoDownloadFileType = ['.txt', '.png']
      if (noAutoDownloadFileType.includes(type)) {
        return '此类型文件需手动保存'
      } else {
        return '点击下载'
      }
    }
  },

  mounted () {
    this.materialList = [
      {
        id: 23497,
        title: '好吃的汉堡',
        cover: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        desc: '这是一个好吃的汉堡',
        href: '下载地址'
      },
      {
        id: 23498,
        title: '好吃的汉堡',
        cover: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        href: '下载地址'
      },
      {
        id: 23499,
        title: '好吃的汉堡',
        cover: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        href: '下载地址'
      },
      {
        id: 23500,
        title: '好吃的汉堡',
        cover: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        href: '下载地址'
      },
      {
        id: 23501,
        title: '好吃的汉堡',
        cover: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        href: '下载地址'
      }
    ]

    this.materialList.map(_ => {
      _.type = getFileType(_.cover)
      _.tip = this.getTip(getFileType(_.href))
      return _
    })
  },

  components: {
    Material
  }
}
</script>

<style lang="scss" scoped>
.download {
  .banner {
    width: 100%;
    height: 400px;
    background: url("./../../assets/imgs/material/banner.jpg");
    background-size: contain;
    .search {
      padding-top: 20px;
      text-align: center;
      div {
        width: 400px;
      }
    }
  }
}
</style>
