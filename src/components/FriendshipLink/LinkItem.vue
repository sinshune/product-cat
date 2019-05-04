<!--
    content: 主页 - 友情链接 - 列表项
    author: Sunshine.
-->

<template>
  <div class="link-item">
    <a :href="link.linkHref" class="link-icon">
      <img :src="link.icon">
    </a>

    <div class="link-right">
      <a :href="link.linkHref" class="link-header">{{link.websiteName}}</a>
      <span class="link-survey">{{link.survey}}</span>
      <span class="link-desc">{{link.desc}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkItem',

  props: {
    link: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .link-item {
    display: flex;
    padding: 10px;

    .link-icon {
      img {
        width: 45px;
        height: 45px;
      }
    }

    .link-right {
      margin-left: 20px;
      span, a {
        display: block;

        &.link-header {
          font-size: 15px;
          line-height: 18px;
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
