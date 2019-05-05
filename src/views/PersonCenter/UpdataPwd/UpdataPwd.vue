<!--
    content: 个人中心 - 修改密码
    author: Sinshune.
-->

<template>
  <div class="updata-pwd">

    <Card style="width: 100%;">
      <div slot="cardTitle">修改密码</div>
      <div slot="cardContent" style="width: 300px;">
        <el-form :model="updataPwdForm" ref="updataPwdForm" :rules="updataPwdRules" label-width="70px">
          <el-form-item label="原密码" prop="oldPassword">
            <el-input type="password" v-model="updataPwdForm.oldPassword" placeholder="请输入原密码" minlength="6" maxlength="16"/>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input type="password" v-model="updataPwdForm.newPassword" placeholder="请输入新密码" minlength="6" maxlength="16"/>
          </el-form-item>
          <el-form-item label="确认密码" prop="newPassword2">
            <el-input type="password" v-model="updataPwdForm.newPassword2" placeholder="请再次输入密码" minlength="6" maxlength="16"/>
          </el-form-item>
          <el-row>
            <el-button type="primary" style="margin-left: 70px">保存修改</el-button>
          </el-row>
        </el-form>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import { isEmpty } from '../../../utils/utils'
import { checkPassword } from '../../../utils/validate'

export default {
  name: 'UpdataPwd',

  data () {
    const checkOldPassword = (rule, value, callback) => {
      if (isEmpty(value)) {
        return callback(new Error('请输入登录密码'))
      } else {
        this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/person-info').then(
          (data) => {
            let rst = data.data.resultObject
            if (value !== rst.password) {
              return callback(new Error('密码错误，请重新输入'))
            } else {
              return callback()
            }
          }
        )
      }
    }
    const checkNewPassword2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.updataPwdForm.newPassword) {
        return callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      updataPwdForm: {
        oldPassword: '',
        newPassword: '',
        newPassword2: ''
      },
      updataPwdRules: {
        oldPassword: [
          { validator: checkOldPassword, trigger: 'blur' }
        ],
        newPassword: [
          { validator: checkPassword, trigger: 'blur' }
        ],
        newPassword2: [
          { validator: checkNewPassword2, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {

  },

  components: {
    Card
  }
}
</script>

<style lang="scss">
</style>
