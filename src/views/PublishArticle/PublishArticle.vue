<!--
    content: 发布文章
    author: Sinshune.
-->

<template>
  <div class="publish-article">
    <el-form :model="articleForm" ref="articleForm" :rules="articleRules" label-width="70px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="articleForm.title" placeholder="请输入标题，标题不超过50字" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 42px;" prop="note">
        <quill-editor v-model="articleForm.note"
                      style="margin-bottom: 66px; height: 700px;"
        ></quill-editor>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select v-model="articleForm.category" placeholder="请选择类型">
          <el-option v-for="category in categoryList"
                     :key="category.value"
                     :label="category.label"
                     :value="category.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上传封面">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   :file-list="fileList"
                   list-type="picture"
                   :on-change="onFileListChange()">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">建议尺寸：640像素 * 400像素</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="摘要" prop="summary">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入文章摘要，摘要不超过300字"
          v-model="articleForm.summary"
          maxlength="300">
        </el-input>
      </el-form-item>
      <el-row style="text-align: right;">
        <el-button type="primary" @click="onSubmit('articleForm')">提交审核</el-button>
      </el-row>
    </el-form>

    <dl class="instruction">
      <dt>投稿须知: </dt>
      <dd v-for="(item, index) in instructions" :key="index">
        {{index+1}}. {{item}}
      </dd>
    </dl>
  </div>
</template>

<script>
import { checkArticleTitle, checkArticleNot } from '../../utils/validate'

export default {
  name: 'PublishArticle',

  data () {
    return {
      categoryList: [
        {label: '今日阅读', value: 'todayRead'},
        {label: 'Axure学习', value: 'axureStudy'},
        {label: '行业动态', value: 'industryDynamics'},
        {label: '产品设计', value: 'productDesign'},
        {label: '交互设计', value: 'interactiveDesign'},
        {label: '职业经验', value: 'occupationExperience'},
        {label: '教程', value: 'course'}
      ],
      articleForm: {
        title: '',
        note: '',
        category: 'todayRead',
        summary: ''
      },
      articleRules: {
        title: [
          { required: true, message: '标题不能为空' },
          { validator: checkArticleTitle, trigger: [ 'blur', 'change' ] }
        ],
        note: [
          { validator: checkArticleNot, trigger: [ 'blur' ] }
        ],
        category: [
          { required: true, message: '请选择文章分类' }
        ]
      },
      fileList: [],
      instructions: [
        '关于文章：只要是和互联网产品相关的原创文章，不管是专业的干货、逗趣的吐槽还是犀利的观点，我们都将喜大普奔地迎接，包括：产品、运营、交互、用户体验、文档、工具、创业、经验总结、项目总结等类型的分享与指导，谢绝一切形式的软文、公关稿、新闻稿，一经发现，立即删除！',
        '尊重版权：请务必使用原创稿件进行投稿，我们也接受代替朋友或者公司领导投稿，但请记得注明原作者哦！',
        '文末请注明完整作者信息，参考格式：文\\Ann',
        '文章配图务必保证清晰无水印，脑图或者细节图，建议导出高清图片。',
        '文章编辑好后请点击发布按钮进行投稿，投稿成功后将进入短暂的审核期，由于后台稿件量巨大，请勿着急，我们承诺24小时内审核完毕。',
        '已通过审核发布的稿件，如需修改请联系管理员@sunshine.（微信号：j1005098087）。'
      ]
    }
  },

  methods: {
    onFileListChange (file, fileList) {
    },

    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('调提交审核的接口')
          console.log(this.articleForm)
        } else {
          alert('表单校验没通过')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .publish-article {
    width: 900px;
    margin: 0 auto;
    .form-wrapper {
      padding: 30px;
    }

    .instruction {
      padding: 18px;
      color: #999;
      dt {
        color: #333;
        font-weight: 500;
        line-height: 48px;
      }
      dd {
        line-height: 24px;
        font-size: 14px;
      }
    }
  }
</style>
