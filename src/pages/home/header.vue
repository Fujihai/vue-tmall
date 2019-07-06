<template>
  <me-navbar class="header">
    <i class="iconfont icon-category" slot="left"></i>
    <div class="search" slot="center">
      <i class="iconfont icon-search"></i>
      <span>搜索商品、品牌</span>
    </div>
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

    .search {
      color: rgba(0, 0, 0, 0.3);
      background: #fff;
      padding: 8px 6px;
      border-radius: 3px;

      .icon-search {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>

