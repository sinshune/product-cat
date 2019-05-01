<template>
  <span class="order-icon grey" :class="{red: index==1 || index==2 || index==3}">{{index}}</span>
</template>

<script>
export default {
  name: 'OrderIcon',
  props: {
    index: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.order-icon{
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 18px;
  height: 18px;
  color: #fff;
  border-radius: 2px;
  margin-top: 1px;
  &.grey {
    background: #bebebe;
  }
  &.red {
    background: #ec4141;
  }
}
</style>
