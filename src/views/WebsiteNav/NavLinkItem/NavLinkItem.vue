<!--
    content: 网址导航 - 列表项
    author: Sunshine.
-->

<template>
  <div class="nav-link-item">
    <a :href="link.linkHref" class="link-icon">
      <img :src="link.icon">
    </a>

    <div class="link-right">
      <a :href="link.linkHref" class="link-header">{{link.websiteName}}</a>
      <span class="link-survey" :title="link.survey">{{link.survey}}</span>
      <span class="link-desc">{{link.desc}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLinkItem',

  props: {
    link: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link-item {
    display: flex;
    padding: 10px;

    .link-icon {
      img {
        width: 26px;
        height: 26px;
      }
    }

    .link-right {
      margin-left: 10px;
      span, a {
        display: block;

        &.link-header {
          margin-bottom: 8px;
          font-size: 15px;
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: all .3s cubic-bezier(.25, .1, .25, 1);
          &:hover {
            text-decoration: none;
            color: #F13F3F;
          }
        }

        &.link-survey {
          font-size: 12px;
          line-height: 14px;
          color: #999;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        &.link-desc {
          font-size: 14px;
          color: #666;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
</style>
