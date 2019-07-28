<template>
  <div class="search">
    <header class="g-header container">
      <search-header @query="getQuery"/>
    </header>
    <search-result :query="query" v-show="query"></search-result>
    <search-history
      @show-confirm="showConfirm"
      v-show="!query"
      ref="history"></search-history>
    <confirm
      msg="确定删除所有搜索记录？"
      ref="confirm"
      @confirm="clearAllSearchHistories"></confirm>
  </div>
</template>

<script>
  import SearchHeader from './header';
  import SearchResult from './result';
  import SearchHistory from './history';
  import Confirm from 'base/Confirm';

  export default {
    name: 'search',
    components: {
      SearchHeader,
      SearchResult,
      SearchHistory,
      Confirm
    },
    data() {
      return {
        query: ''
      };
    },
    methods: {
      getQuery(query) {
        this.query = query;
      },
      showConfirm() {
        this.$refs.confirm.show();
      },
      clearAllSearchHistories() {
        this.$refs.history.clear();
        this.$refs.history.update();
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
