<!--
    content: 上传文件弹窗
    author: Sinshune.
-->

<template>
  <div class="upload">
    <el-form :model="uploadForm" ref="uploadForm" :rules="uploadRules" label-width="70px">
      <el-form-item label="素材名称" prop="title">
        <el-input v-model="uploadForm.title" placeholder="请输入素材名称" maxlength="20"/>
      </el-form-item>
      <el-form-item label="素材描述" prop="desc">
        <el-input v-model="uploadForm.desc" placeholder="请对素材进行简单的描述" maxlength="20"/>
      </el-form-item>
      <el-form-item label="素材封面" prop="cover">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   :show-file-list="false">
          <img v-if="uploadForm.cover" :src="uploadForm.cover" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="素材内容" prop="content">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   :show-file-list="false">
          <img v-if="uploadForm.content" :src="uploadForm.content">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Upload',

  props: {
    uploadForm: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      uploadRules: {
        // oldPassword: [
        //   { validator: checkOldPassword, trigger: 'blur' }
        // ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  .avatar {
    img {
      margin-top: 12px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
