<!--
    content: 素材
    author: Sunshine.
-->

<template>
  <div class="material">
    <el-card :body-style="{ padding: '0px' }" style="text-align: center; position: relative;">
      <img :src="material.cover" width="90%" style="margin-top: 10px; border-radius: 5px;">
      <div style="padding: 14px; overflow: hidden;">
        <div style="height: 50px;">
          <span style="font-size: 14px; float: left;">
            <span>{{material.title}}</span><br>
            <!--<span v-if="material.desc" style="display: inline-block; margin-top: 12px; color: #999999; font-size: 12px;">描述</span>-->
          </span>
        </div>
        <el-tooltip class="item" effect="dark" :content="material.tip" placement="top">
          <el-button type="primary" size="mini" style="position: absolute; bottom: 10px; right: 10px;">
            <a :href="material.href" style="color: #FFFFFF;" :download="material.type">下载</a>
          </el-button>
        </el-tooltip>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Material',

  props: {
    material: {
      type: Object,
      required: true
    }
  },

  computed: {
    materialTip: () => {
      // this.material
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
