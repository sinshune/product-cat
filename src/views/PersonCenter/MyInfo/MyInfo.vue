<!--
    content: 个人中心 - 我的资料
    author: Sinshune.
-->

<template>
  <div class="my-info">

    <Card style="width: 100%;">
      <div slot="cardTitle">我的资料</div>
      <div slot="cardContent">
        <el-form :model="myInfoForm" ref="myInfoForm" :rules="myInfoRules" label-width="70px">
          <el-form-item label="头像" prop="avatar" class="avatar-label">
            <el-upload action=""
                       :on-change="onAvatarChange"
                       :multiple="false" :limit="1"
                       :file-list="avatarList"
                       :auto-upload="false">
              <img v-if="myInfoForm.avatar" :src="myInfoForm.avatar" class="avatar">
              <el-button>上传头像</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <div style="width: 300px;">
            <el-form-item label="昵称" prop="username">
              <el-input v-model="myInfoForm.username" placeholder="请输入昵称，不超过11位" minlength="1" maxlength="11"/>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="myInfoForm.name" placeholder="您的真实姓名" maxlength="8"/>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-radio v-model="myInfoForm.gender" label="0">男</el-radio>
              <el-radio v-model="myInfoForm.gender" label="1">女</el-radio>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="myInfoForm.phone" placeholder="请输入正确的手机号" minlength="11" maxlength="11"/>
            </el-form-item>
            <el-form-item label="公司" prop="company">
              <el-input v-model="myInfoForm.company" placeholder="您所在的公司"/>
            </el-form-item>
            <el-form-item label="职位" prop="position">
              <el-input v-model="myInfoForm.position" placeholder="您在公司的职位或您从事的岗位"/>
            </el-form-item>
            <el-form-item label="个人介绍" prop="intro">
              <el-input type="textarea" v-model="myInfoForm.intro" placeholder="您的产品感悟或一句话介绍" rows="3"/>
            </el-form-item>
            <el-row>
              <el-button type="primary" style="margin-left: 70px" @click="saveModify('myInfoForm')">保存修改</el-button>
            </el-row>
          </div>
        </el-form>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import { checkUsername, checkPhone } from '../../../utils/validate'
import http from '@/utils/request'
import { getUserId } from '../../../utils/auth'

export default {
  name: 'MyInfo',

  data () {
    return {
      myInfoForm: {
        // 昵称不能为空, 其他都可以为空
        avatar: '',
        username: '',
        name: '',
        gender: null,
        phone: '',
        company: '',
        position: '',
        intro: ''
      },
      myInfoRules: {
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ]
      },
      avatarList: []
    }
  },

  methods: {
    // 当上传的头像发生变化时
    onAvatarChange (file, fileList) {
      this.avatarList = fileList
    },

    saveModify (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          let formData = new FormData()
          formData.append('userId', getUserId())
          formData.append('avatar', this.avatarList[0] ? this.avatarList[0].raw : '')
          formData.append('username', this.myInfoForm.username)
          formData.append('name', this.myInfoForm.name)
          formData.append('phone', this.myInfoForm.phone)
          formData.append('company', this.myInfoForm.company)
          formData.append('position', this.myInfoForm.position)
          formData.append('intro', this.myInfoForm.intro)
          if (this.myInfoForm.gender) {
            formData.append('gender', this.myInfoForm.gender)
          }

          http.post('/v3/modify/userInfo', formData, config).then(rst => console.log('rst: ', rst))
        }
      })
    }
  },

  mounted () {
    this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/person-info', {
      userId: '从cookie中取的用户信息'
    }).then(
      data => {
        this.myInfoForm = data.data.resultObject
      }
    )
  },

  components: {
    Card
  }
}
</script>

<style lang="scss">
@import "MyInfo";
</style>
