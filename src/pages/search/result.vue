<template>
  <div class="result">
    <ul class="s-list" v-show="results.length">
      <li
        class="s-list-item"
        v-for="(item, index) in results"
        :key="index">
        <a
          class="s-list-text"
          @click="_$selectItem(item[0])">{{item[0]}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getSearchResult} from 'api/search';
  import {searchMixin} from 'assets/js/mixins';

  export default {
    name: 'SearchResult',
    mixins: [searchMixin],
    data() {
      return {
        results: [],
        shopUrl: ''
      };
    },
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    watch: {
      query(query) {
        this.getResults(query);
      }
    },
    methods: {
      getResults(keyword) {
        if(!keyword) {
          return;
        }

        getSearchResult(keyword).then(data => {
          if(data) {
            this.results = data.result;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";

    .s {
      &-list {
        width: 100%;
        padding: 0px 10px;

        &-item {
          float: left;
          padding: 10px 8px;
          width: 50%;
          border-bottom: 1px solid #eee;
        }

        &-text {
          font-size: 14px;
          color:#333;
          @include ellipsis();
        }
      }
    }
</style>

