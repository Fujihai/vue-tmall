<template>
  <me-navbar class="header">
    <i class="iconfont icon-category" slot="left"></i>
    <div class="" slot="center">搜索框</div>
    <i class="iconfont icon-user" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar
    }
  };
</script>

<style lang='scss' scoped>
  @import "~assets/scss/mixins";

  .header {
    background-color: transparent;

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>

