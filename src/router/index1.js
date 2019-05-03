import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Layout from '../views/layout/index'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/lotteryHall/index'
    },
    {
      path: '/LoginAndReg',
      name: 'LoginAndReg',
      component: _import('LoginAndReg/LoginAndReg')
    },
    {
      path: '/register',
      name: 'register',
      component: _import('LoginAndReg/register')
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: _import('LoginAndReg/forgetPwd')
    },
    {
      path: '/allLottery',
      name: 'allLottery',
      component: _import('lotteryHall/allLottery')
    },
    {
      path: '/k3/:id',
      name: 'k3',
      component: _import('lotteryHall/K3'),
      meta: {needLogin: true}
    },
    {
      path: '/ssc/:id',
      name: 'ssc',
      component: _import('lotteryHall/SSC'),
      meta: {needLogin: true}
    },
    {
      path: '/syxw/:id',
      name: 'syx5',
      component: _import('lotteryHall/syx5'),
      meta: {needLogin: true}
    },
    {
      path: '/pk10/:id',
      name: 'pk10',
      component: _import('lotteryHall/pk10'),
      meta: {needLogin: true}
    },
    {
      path: '/numberBox',
      name: 'numberBox',
      component: _import('lotteryHall/numberBox'),
      meta: {needLogin: true}
    },
    {
      path: '/lotteryHall',
      component: Layout,
      redirect: '/lotteryHall/index',
      children: [{
        path: 'index',
        component: _import('lotteryHall/lotteryHall'),
        name: 'lotteryHall'
      }]
    },
    // activity子页面
    {
      path: '/upgrade/0',
      name: 'upgrade',
      component: _import('activity/upgrade')
    },
    {
      path: '/upgrade/1',
      name: 'daily2',
      component: _import('activity/daily2')
    },
    {
      path: '/upgrade/2',
      name: 'wechat3',
      component: _import('activity/wechat3')
    },
    {
      path: '/upgrade/3',
      name: 'credit4',
      component: _import('activity/credit4')
    },
    {
      path: '/upgrade/4',
      name: 'agent5',
      component: _import('activity/agent5')
    },
    {
      path: '/upgrade/5',
      name: 'recommend6',
      component: _import('activity/recommend6')
    },
    {
      path: '/upgrade/6',
      name: 'redpacket7',
      component: _import('activity/redpacket7')
    },
    {
      path: '/upgrade/7',
      name: 'wechattrans8',
      component: _import('activity/wechattrans8')
    },
    {
      path: '/upgrade/8',
      name: 'alipaytrans9',
      component: _import('activity/alipaytrans9')
    },
    {
      path: '/upgrade/9',
      name: 'mystery10',
      component: _import('activity/mystery10')
    },

    {
      path: '/activity',
      component: Layout,
      redirect: '/activity/index',
      children: [{
        path: 'index',
        component: _import('activity/activity'),
        name: 'activity'
      }]
    },
    // find子页面
    {
      path: '/player/0',
      name: 'player',
      component: _import('find/player')
    },
    {
      path: '/player/1',
      name: 'player1',
      component: _import('find/player1')
    },
    {
      path: '/player/2',
      name: 'player2',
      component: _import('find/player2')
    },
    {
      path: '/player/3',
      name: 'player3',
      component: _import('find/player3')
    },
    {
      path: '/player/4',
      name: 'player4',
      component: _import('find/player4')
    },
    {
      path: '/player/5',
      name: 'player5',
      component: _import('find/player5')
    },
    {
      path: '/player/6',
      name: 'player6',
      component: _import('find/player6')
    },
    {
      path: '/player/7',
      name: 'player7',
      component: _import('find/player7')
    },
    {
      path: '/player/8',
      name: 'player8',
      component: _import('find/player8')
    },
    {
      path: '/player/9',
      name: 'player9',
      component: _import('find/player9')
    },
    {
      path: '/find',
      component: Layout,
      redirect: '/find/index',
      children: [{
        path: 'index',
        component: _import('find/find'),
        name: 'find'
      }]
    },
    {
      path: '/find-yesterday',
      component: Layout,
      redirect: '/find-yesterday',
      children: [{
        path: '',
        component: _import('find/find-yesterday'),
        name: 'findYesterday'
      }]
    },
    {
      // 我的
      path: '/home',
      component: Layout,
      redirect: '/home/index',
      children: [{
        path: 'index',
        component: _import('home/home'),
        meta: {needLogin: true},
        name: 'home'
      }]
    },
    {
      // 我要充值
      path: '/recharge',
      component: _import('home/recharge'),
      name: 'recharge'
    },
    {
      // 交易记录
      path: '/transRecord',
      component: _import('home/transRecord'),
      name: 'transRecord'
    },
    {
      // 投注记录
      path: '/noteRecord',
      component: _import('home/noteRecord'),
      name: 'noteRecord'
    },
    {
      // 投注详情
      path: '/recordInfo/:id',
      component: _import('home/recordInfo'),
      name: 'recordInfo'
    },
    {
      // 个人信息
      path: '/userInfo',
      component: _import('home/userInfo'),
      name: 'userInfo'
    },
    {
      // 安全中心
      path: '/safeCenter',
      component: _import('home/safeCenter'),
      name: 'safeCenter'
    },
    {
      // 代理中心
      path: '/agentCenter',
      component: _import('home/agentCenter'),
      name: 'agentCenter'
    },
    {
      // 代理说明
      path: '/agentIntro',
      component: _import('home/agentIntro'),
      name: 'agentIntro'
    },
    {
      //  代理报表
      path: '/agentReportForm',
      component: _import('home/agentReportForm'),
      name: 'agnetReportForm'
    },
    {
      //  代理报表
      path: '/rebateDes',
      component: _import('home/rebateDes'),
      name: 'rebateDes'
    },
    {
      //  下级报表
      path: '/subReportForm',
      component: _import('home/subReportForm'),
      name: 'subReportForm'
    },
    {
      // 下级开户
      path: '/subOpenAccount',
      component: _import('home/subOpenAccount'),
      name: 'subOpenAccount'
    },
    {
      // 会员管理
      path: '/memberManage',
      component: _import('home/memberManage'),
      name: 'memberManage'
    },
    {
      // 投注记录
      path: '/noteDetail',
      component: _import('home/noteDetail'),
      name: 'noteDetail'
    },
    {
      // 交易记录
      path: '/tradeDetail',
      component: _import('home/tradeDetail'),
      name: 'tradeDetail'
    },
    {
      // 今日盈亏
      path: '/todayProfitLoss',
      component: _import('home/todayProfitLoss'),
      name: 'todayProfitLoss'
    },
    {
      // 我的消息公告
      path: '/myMessage',
      component: _import('home/myMessage'),
      name: 'myMessage'
    },
    {
      // 我的消息
      path: '/myMessageContent/:id',
      component: _import('home/myMessageContent'),
      name: 'myMessageContent'
    },
    {
      // 绑定密保手机
      path: '/bindPhone',
      component: _import('home/bindPhone'),
      name: 'bindPhone'
    },
    {
      // 绑定密保邮箱
      path: '/bindEmail',
      component: _import('home/bindEmail'),
      name: 'bindEmail'
    },
    {
      // 银行转帐
      path: '/bankTransfer',
      component: _import('home/bankTransfer'),
      name: 'bankTransfer'
    },
    {
      // 微信支付
      path: '/weChatPay',
      component: _import('home/weChatPay'),
      name: 'weChatPay'
    },
    {
      // 支付宝
      path: '/alipay',
      component: _import('home/alipay'),
      name: 'alipay'
    },
    {
      // qq支付
      path: '/qqpay',
      component: _import('home/qqpay'),
      name: 'qqpay'
    },
    {
      // 验证原密码
      path: '/verOriPwd',
      component: _import('home/verOriPwd'),
      name: 'verOriPwd'
    },
    {
      // 设置登录密码
      path: '/setLoginPwd',
      component: _import('home/setLoginPwd'),
      name: 'setLoginPwd'
    },
    {
      // 设置安全密码
      path: '/setSafePwd',
      component: _import('home/setSafePwd'),
      name: 'setSafePwd'
    },
    {
      // 设置密保问题
      path: '/setQuestion',
      component: _import('home/setQuestion'),
      name: 'setQuestion'
    },
    {
      // 银行卡管理
      path: '/cardManage',
      component: _import('home/cardManage'),
      name: 'cardManage'
    },
    {
      // 银行卡管理
      path: '/setBankcard',
      component: _import('home/setBankcard'),
      name: 'setBankcard'
    }
  ]
})
