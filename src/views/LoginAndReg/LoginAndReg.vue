<!--
    content: 登录
    author: Sinshune.
-->

<template>
  <div class="login-and-reg">
    <div class="tab-wrapper">
      <van-tabs type="card">
        <van-tab title="登录">
          <el-form :model="loginForm" ref="loginForm" :rules="loginRules" label-width="70px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名" minlength="1" maxlength="11"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" minlength="6" maxlength="16"/>
            </el-form-item>
            <el-form-item label="记住密码">
              <el-switch v-model="loginForm.isRemember"/>
            </el-form-item>
            <el-row>
              <el-button type="primary" style="width: 100%;" @click="onLogin('loginForm')">登录</el-button>
            </el-row>
          </el-form>
        </van-tab>

        <van-tab title="注册">
          <el-form :model="regForm" ref="regForm" :rules="regRules" label-width="70px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="regForm.username" placeholder="请输入用户名，不超过11位" minlength="1" maxlength="11" @blur="checkRepeat('username', regForm.username)"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="regForm.password" placeholder="请输入密码" minlength="6" maxlength="16"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
              <el-input type="password" v-model="regForm.password2" placeholder="请再次输入密码" minlength="6" maxlength="16"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input type="tel" v-model="regForm.phone" placeholder="请输入正确的手机号" minlength="11" maxlength="11" @blur="checkRepeat('phone', regForm.phone)"/>
            </el-form-item>
            <el-row style="margin-bottom: 8px; text-align: center;">
              <el-checkbox v-model="regForm.isAgree">我已阅读并同意《用户注册协议》</el-checkbox>
            </el-row>
            <el-row>
              <el-button type="primary" style="width: 100%;" @click="onReg('regForm')">注册</el-button>
            </el-row>
          </el-form>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { checkUsername, checkRepeatUsername, checkPassword, checkPhone, checkRepeatPhone } from '../../utils/validate'
import { setCookie } from '../../utils/utils'
import http from '@/utils/request'

export default {
  name: 'LoginAndReg',

  data () {
    const checkPassword2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.regForm.password) {
        return callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        isRemember: false
      },
      loginRules: {
        username: [
          // { required: true, message: '用户名不能为空', trigger: 'blur' }
          { validator: checkUsername, trigger: 'blur' }
        ],
        password: [
          { min: 6, max: 16, message: '长度在6-16个字符', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ]
      },
      regForm: {
        username: '',
        password: '',
        password2: '',
        phone: '',
        isAgree: true
      },
      regRules: {
        username: [
          { validator: checkUsername, trigger: 'blur' },
          { validator: checkRepeatUsername, trigger: 'blur' }
        ],
        password: [
          { min: 6, max: 16, message: '长度在6-16个字符', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ],
        password2: [
          { validator: checkPassword2, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' },
          { validator: checkRepeatPhone, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    onLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          http.post('/v3/user/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          }).then((res) => {
            console.log('res: ', res)
            if (!res.error) {
              if (this.loginForm.isRemember) {
                setCookie('userId', res.resultObject.userId, 7)
                setCookie('token', res.resultObject.token, 7)
              }
              this.$store.commit('setUserId', res.resultObject.userId)
              this.$store.commit('setToken', res.resultObject.token)
              window.location.href = '/home'
            } else {
              this.$message.error('用户名或密码错误')
            }
          })
        }
      })
    },

    onReg (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          delete this.regForm.isAgree
          delete this.regForm.password2
          http.post('/v3/user/register', {
            ...this.regForm
          }).then(res => {
            if (res.error) {
              this.$message.error(res.message.join('；'))
            } else {
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              this.$router.replace('/login-reg')
            }
          })
        }
      })
    },

    checkRepeat (checkField, checkValue) {
      console.log('checkValue: ', checkValue)
      http.get(`v3/user/check?checkField=${checkField}&checkValue=${checkValue}`).then(
        res => {
          console.log('res: ', res.resultObject.isPass)
        }
      )
    }
  }
}
</script>

<style lang="scss">
@import "./styles/LoginAndReg";
</style>
