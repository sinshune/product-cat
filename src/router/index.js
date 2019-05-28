import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '../utils/auth'
import Home from '@/views/Home/Home'
import LoginAndReg from '@/views/LoginAndReg/LoginAndReg'
// import ForgetPwd from '@/views/LoginAndReg/ForgetPwd/ForgetPwd'
// import Appeal from '@/views/LoginAndReg/Appeal/Appeal'
import Article from '@/views/Article/Article'
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail'
import PublishArticle from '@/views/PublishArticle/PublishArticle'
import Question from '@/views/Question/Question'
import QuestionDetail from '@/views/QuestionDetail/QuestionDetail'
import WebsiteNav from '@/views/WebsiteNav/WebsiteNav'
import Course from '@/views/Course/Course'
import CourseDetail from '@/views/CourseDetail/CourseDetail'
import Download from '@/views/Download/Download'
import PersonCenter from '@/views/PersonCenter/PersonCenter'
import AboutUs from '@/views/AboutUs/AboutUs'

Vue.use(Router)

const vm = new Vue()

const router = new Router({
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
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/question/:questionId',
      name: 'QuestionDetail',
      component: QuestionDetail
    },
    {
      path: '/website-nav',
      name: 'WebsiteNav',
      component: WebsiteNav
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/course/:artId',
      name: 'CourseDetail',
      component: CourseDetail
    },
    {
      path: '/publish-article',
      name: 'PublishArticle',
      component: PublishArticle,
      beforeRouteEnter: () => {
        router.replace('/login-reg')
      }
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/person-center',
      name: 'PersonCenter',
      component: PersonCenter
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})

router.beforeEach((to, from, next) => {
  const whiteList = [ 'Home', 'LoginAndReg', 'Article', 'ArticleDetail', 'Question', 'QuestionDetail', 'WebsiteNav', 'Course', 'CourseDetail', 'Download', 'AboutUs' ]
  if (whiteList.includes(to.name)) {
    next()
  } else {
    if (getToken()) {
      next()
    } else {
      vm.$confirm('是否跳转至登录界面?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        router.replace({path: '/login-reg'})
      })
    }
  }
})

export default router
