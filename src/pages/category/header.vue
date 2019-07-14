<template>
  <navbar class="header">
    <i class="iconfont icon-left-arrow" slot="left"></i>
    <search-box
      class="search"
      placeholder="搜索商品、品牌"
      slot="center"
      @click.native="goToSearch"
    />
  </navbar>
</template>

<script>
  import Navbar from 'base/navbar';
  import SearchBox from 'base/search-box';

  export default {
    name: 'CategoryHeader',
    components: {
      Navbar,
      SearchBox
    },
    methods: {
      goToSearch() {
        this.$router.push('/search');
      }
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
    }
  }
</style>

