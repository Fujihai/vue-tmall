<template>
  <navbar class="header">
    <i class="iconfont icon-left-arrow" slot="left"></i>
    <div class="search" slot="center">
      <i class="iconfont icon-search"></i>
      <span class="hint">搜索商品/品牌</span>
    </div>
  </navbar>
</template>

<script>
  import Navbar from 'base/navbar';

  export default {
    name: 'CategoryHeader',
    components: {
      Navbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.navbar {
      background-color: $bgc-theme;
    }

    .iconfont {
      color: #5F646E;
      font-size: $icon-font-size;
    }

    span,
    .icon-search {
      color: #999999;
    }

    .search {
      padding: 8px;
      background: #F2F2F2;
      border-radius: 16px;

      .hint {
        font-size: 12px;
        padding-left: 3px;
        height: 20px;
        line-height: 18px;
      }
    }
  }
</style>

