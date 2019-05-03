import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import LoginAndReg from '@/views/LoginAndReg/LoginAndReg'
// import ForgetPwd from '@/views/LoginAndReg/ForgetPwd/ForgetPwd'
// import Appeal from '@/views/LoginAndReg/Appeal/Appeal'
import PublishArticle from '@/views/PublishArticle/PublishArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login-reg',
      name: 'LoginAndReg',
      component: LoginAndReg
    },
    // {
    //   path: '/forget-pwd',
    //   name: 'ForgetPwd',
    //   component: ForgetPwd
    // },
    // {
    //   path: '/appeal',
    //   name: 'Appeal',
    //   component: Appeal
    // },
    {
      path: '/publish-article',
      name: 'PublishArticle',
      component: PublishArticle
    }
  ]
})
