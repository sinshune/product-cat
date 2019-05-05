import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import LoginAndReg from '@/views/LoginAndReg/LoginAndReg'
// import ForgetPwd from '@/views/LoginAndReg/ForgetPwd/ForgetPwd'
// import Appeal from '@/views/LoginAndReg/Appeal/Appeal'
import Article from '@/views/Article/Article'
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail'
import PublishArticle from '@/views/PublishArticle/PublishArticle'
import WebsiteNav from '@/views/WebsiteNav/WebsiteNav'
import PersonCenter from '@/views/PersonCenter/PersonCenter'

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
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/:artId',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/website-nav',
      name: 'WebsiteNav',
      component: WebsiteNav
    },
    {
      path: '/publish-article',
      name: 'PublishArticle',
      component: PublishArticle
    },
    {
      path: '/person-center',
      name: 'PersonCenter',
      component: PersonCenter
    }
  ]
})
