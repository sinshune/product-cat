<!--
    content: 个人中心
    author: Sinshune.
-->

<template>
  <div class="person-center">
    <el-tabs tab-position="left">
      <el-tab-pane>
        <span slot="label"><i class="icon iconfont iconwodeziliao"></i> 我的资料</span>
        <MyInfo/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="icon iconfont iconchange_password"></i> 修改密码</span>
        <UpdataPwd/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MyInfo from './MyInfo/MyInfo'
import UpdataPwd from './UpdataPwd/UpdataPwd'

export default {
  name: 'PersonCenter',

  components: {
    MyInfo,
    UpdataPwd
  }
}
</script>

<style lang="scss" scoped>
.person-center {
  padding-top: 20px;
  width: 900px;
  margin: 0 auto;
  background: #FFFFFF;
}
</style>
