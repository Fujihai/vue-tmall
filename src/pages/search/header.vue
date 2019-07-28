<template>
  <navbar class="header">
    <search-box
      class="search"
      slot="center"
      placeholder="搜索商品/店铺/品牌"
      @query="query">
    </search-box>
  </navbar>
</template>

<script>
  import Navbar from 'base/navbar';
  import SearchBox from 'base/search-box';

  export default {
    name: 'SearchHeader',
    components: {
      Navbar,
      SearchBox
    },
    methods: {
      query(query) {
        this.$emit('query', query);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    background-color: #fff;
    border-bottom: 1px solid  #F7F7F7;

    .search {
      border-radius: 1px;
      color: #333;
      background: #F7F7F7;
    }
  }
</style>

