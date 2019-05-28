<!--
    content: 底部导航栏
    author: Sinshune.
-->
<template>
  <div class="footer">
    <div class="footer-mobile" v-if="$store.getters.mobile">
      <ul>
        <li v-for="footer of footerList" :key="footer.href">
          <router-link :to="footer.href">
            <i class="icon iconfont" :class="footer.icon"></i><span style="display: block; height: 0"></span>{{footer.label}}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="footer-pc" v-if="!$store.getters.mobile">
      <div class="about-us">
        <div class="intro">
          产品猫是一个设计师学习平台，初心是专注于设计师的学习成长与交流，为设计师发声、替好作品说话，是平台的运营理念。想更全面了解优设或联系我们合作，欢迎访问<router-link to="/about-us" class="about-us-link">“关于我们”</router-link>。
        </div>
        <div class="join-us">
          <span>关于我们</span>
          <span>联系我们<a href="http://wpa.qq.com/msgrd?v=3&uin=2650232288&site=qq&menu=yes" target="_blank"><img src="../../assets/imgs/ContactUs/qq.svg" width="16"></a></span>
          <span>加入我们</span>
          <span>广告合作</span>
          <span>网址导航</span>
        </div>
      </div>

      <div class="copyright" style="margin-top: 18px; text-align: center;">
        Copyright © 2019 产品猫 - 京ICP备16005435号-1 京公网安备 42018502001134号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      footerList: [
        { label: '首页', href: '/home', icon: 'iconshouye' },
        { label: '文章', href: '/article', icon: 'iconwenzhang' },
        // { label: '收藏', href: '/collect', icon: 'iconshoucang' },
        { label: '我的', href: '/person-center', icon: 'iconwode1' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer {
  //position: fixed;
  //bottom: 0;
  width: 100%;
  .footer-mobile {
    z-index: 500;
    padding: 10px 0 0 0;
    border-top: .0625rem solid #ccc;
    ul {
      display: flex;
      text-align: center;
      li {
        flex: 1;
        a {
          font-size: 15px;
          i {
            font-size: 15px;
          }
          &.router-link-active {
            color: #f58220;
            font-weight: 700;
          }
        }
      }
    }
  }

  .footer-pc {
    padding: 20px;
    clear: both;
    background: #24273D;
    color: #666;
    font-size: 13px;
    .about-us {
      width: 800px;
      margin: 0 auto;
      overflow: hidden;
      div {
        float: left;
        border-right: 1px solid #000;
        &:last-child {
          border: none;
        }
      }
      .intro {
        width: 300px;
        padding-right: 50px;
        margin: 0 auto;
        .about-us-link {
          transition: all 0.18s ease-out;
          &:hover {
            color: #ffffff
          }
        }
      }
      .join-us {
        padding-left: 50px;
        span {
          display: inline-block;
          margin-right: 10px;
          height: 68px;
          line-height: 68px;
          transition: all 0.18s ease-out;
          img {
            margin-top: 26px;
            cursor: pointer;
          }

          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
