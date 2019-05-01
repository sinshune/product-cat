<template>
  <div class="card">
    <div class="card-title">
      <slot name="cardTitle"></slot>
    </div>
    <div class="card-content">
      <slot name="cardContent"></slot>
    </div>
    <div class="card-footer">
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  width: 320px;
  background: #ffffff;
  color: #333333;
  .card-title {
    margin: 0 15px;
    font-size: .8rem;
    height: 48px;
    line-height: 48px;
    font-weight: 500;
    border-bottom: 1px solid #EFEFEF;
  }
  .card-content {
    padding: 15px;
    line-height: 18px;
  }
}
</style>
