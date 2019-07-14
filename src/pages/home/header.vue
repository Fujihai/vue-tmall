<template>
  <navbar class="header">
    <i
      class="iconfont icon-category"
      slot="left"
      @click="goToCategory"></i>
    <search-box
      placeholder="搜索商品、品牌"
      slot="center"
      fake
      @query="getQuery"
      @click.native="goToSearch"
    />
    <i class="iconfont icon-user" slot="right"></i>
  </navbar>
</template>

<script>
  import Navbar from 'base/navbar';
  import SearchBox from 'base/search-box';

  export default {
    name: 'HomeHeader',
    components: {
      Navbar,
      SearchBox
    },
    methods: {
      getQuery(query) {
        console.log(query);
      },
      goToSearch() {
        this.$router.push('/search');
      },
      goToCategory() {
        this.$router.push('/category');
      }
    }
  };
</script>

<style lang='scss' scoped>
  @import "~assets/scss/mixins";

  .header {
    background-color: #FF0036;

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

      .hint {
        font-size: 13px;
        padding-left: 3px;
        height: 26px;
        line-height: 22px;
      }
    }
  }
</style>

