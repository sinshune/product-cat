<!--
    content: 网址导航
    author: Sinshune.
-->
<template>
  <div class="website-nav" style="width: 1200px; margin: 0 auto;">
    <Card v-for="(nav, index) in navList" :key="index">
      <div slot="cardTitle">{{nav.navTitle}}</div>
      <el-row slot="cardContent" :gutter="10" style="margin-bottom: 20px">
        <el-col :span="4" v-for="(link, index) in nav.linkList" :key="index">
          <NavLinkItem :link="link"/>
        </el-col>
      </el-row>
    </Card>
  </div>
</template>

<script>
import SideMenu from './SideMenu/SideMenu'
import Card from '@/components/Card/Card'
import NavLinkItem from './NavLinkItem/NavLinkItem'

export default {
  name: 'WebsiteNav',

  data () {
    return {
      navList: [
        {
          navTitle: '高清图库',
          linkList: [
            {
              websiteName: 'WallHaven',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-1.png',
              survey: 'WallBase创办人失联后，前成员推出的网站',
              desc: '',
              linkHref: 'https://alpha.wallhaven.cc/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            }
          ]
        },
        {
          navTitle: '高清图库',
          linkList: [
            {
              websiteName: 'WallHaven',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-1.png',
              survey: 'WallBase创办人失联后，前成员推出的网站',
              desc: '',
              linkHref: 'https://alpha.wallhaven.cc/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            },
            {
              websiteName: 'PNG素材库',
              icon: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-3-png.png',
              survey: '推荐！最知名的PNG优质素材库。透明的、感动的',
              desc: '',
              linkHref: 'http://pngimg.com/'
            }
          ]
        }
      ]
    }
  },

  components: {
    SideMenu,
    Card,
    NavLinkItem
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100% !important;
}
</style>
