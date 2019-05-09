<!--
    content: 关于我们
    author: Sinshune.
-->

<template>
  <div class="about-us">
    <div class="about-us-container">
      <h3 class="about-us-header">关于我们</h3>
      <div class="block-quote">
        <h4>投稿、发布招聘、合作QQ：1005098087<a href="http://wpa.qq.com/msgrd?v=3&uin=2650232288&site=qq&menu=yes" target="_blank"><i class="el-icon-s-comment"></i></a></h4>
      </div>

      <h3 class="title">产品猫</h3>
      <p class="content">产品猫是一个设计师学习平台，初心是专注于设计师的学习成长与交流，为设计师发声、替好作品说话，是平台的运营理念。想更全面了解优设或联系我们合作，欢迎联系右上角QQ号。</p>

      <h3 class="title">客户须知</h3>
      <p class="content">
        国内的技能学习型社区经过多年的发展，已经越来越成熟完善，但是我们发现在大家求新求变的过程中，追逐得更多的却是会员注册人数、广告点击人数、学员缴费人数。<br>
        许多平台和站长抛弃了阅读体验、忽视了原创内容、放大了站点数据。他们去偷、他们去窃、更甚至直接违法复制。这种触犯法律触怒同行的卑劣行径屡见不鲜。<br>
        相对来讲，真正核心的用户来平台学习成长初衷却被一点一点诱导剥夺。太多的功能歪了楼、太多的特效炫了目，用户被干扰、被打断、被欺骗的行为屡屡发生，愤怒的他们只能在社交平台上无助发声，然后被其他热点和声音淹没。<br>
        鉴于此，我们<strong>谢绝平台调性不同且用户体验较差的广告，婉拒各类联盟代码的推广。</strong>
      </p>

      <h3 class="title">联系方式</h3>
      <p class="content">
        投稿、发布招聘、合作QQ：1005098087<a href="http://wpa.qq.com/msgrd?v=3&uin=2650232288&site=qq&menu=yes" target="_blank"><i class="el-icon-s-comment"></i></a>
      </p>
    </div>

    <div class="aside-hidden" v-if="!$store.getters.mobile">
      <!-- 排行榜 -->
      <RankList :rank-list="rankList"/>

      <!-- 友情链接 -->
      <friendshipLink :link-list="linkList"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import RankList from '@/components/RankList/RankList'
import FriendshipLink from '@/components/FriendshipLink/FriendshipLink'
import { keepDecimal } from '../../utils/utils'

export default {
  name: 'AboutUs',

  data () {
    return {
      rankList: [],
      linkList: []
    }
  },

  mounted () {
    // 获取排行榜信息
    this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/rank-list').then(
      (data) => {
        let rst = data.data
        this.rankList = rst.resultObject.map(art => {
          art.readVol = keepDecimal(art.readVol, 1) + '万'
          return art
        })
      }
    ).catch()

    // 获取链接信息
    this.http.get('https://www.easy-mock.com/mock/5cc9597af7fcb464ef62ac11/link-list').then(
      data => {
        this.linkList = data.data.resultObject
        console.log('this.linkList: ', this.linkList)
      }
    )
  },

  components: {
    Card,
    RankList,
    FriendshipLink
  }
}
</script>

<style lang="scss">
.about-us {
  width: 100%;
  overflow: hidden;

  .about-us-container {
    padding: 30px;
    width: 800px;
    float: left;
    background: #FFFFFF;
    .about-us-header {
      margin-top: 20px;
      font-size: 28px;
      font-weight: bold;
      text-align: center;
    }
    .block-quote {
      h4 {
        padding-right: 30px;
        text-align: right;
        i {
          color: #e7e7e7;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          &:before {
            font-size: 36px;
          }
          &:hover {
            color: #666666;
          }
        }
        font-size: 16px;
        line-height: 28px;
        a {
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          color: #383838;
        }
      }
    }
    .title {
      font-size: 22px;
      font-weight: bold;
      line-height: 35px !important;
      padding: 25px 0 0;
    }
    .content {
      padding: 20px 40px 0 20px;
      font: 16px/2 Tahoma,Verdana,"Microsoft Yahei";
      letter-spacing: 0.5px;
      color: #525252;
    }
  }

  .aside-hidden {
    float: right;
  }
}
</style>
