<template>
  <div class="search">
    <header class="g-header container">
      <search-header @query="getQuery"/>
    </header>
    <search-result :query="query" v-show="query"></search-result>
  </div>
</template>

<script>
  import SearchHeader from './header';
  import SearchResult from './result';

  export default {
    name: 'search',
    components: {
      SearchHeader,
      SearchResult
    },
    data() {
      return {
        query: ''
      };
    },
    methods: {
      getQuery(query) {
        this.query = query;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
