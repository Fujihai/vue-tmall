<template>
  <div class="history" v-if="histories.length">
    <div class="history-header">
      <h1 class="history-header-title">历史搜索</h1>
      <i
        class="iconfont icon-delete-all"
        @click="showConfirm"></i>
    </div>
    <ul class="history-list">
      <li
        class="history-list-item"
        v-for="item in histories"
        :key="item"
        @click="_$selectItem(item)"
      >
        <span class="history-list-text">{{item}}</span>
        <i
          class="iconfont icon-dark-close"
          @click.stop="removeItem(item)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  import {SEARCH_PAGE_HISTORIES_KEY} from './config';
  import storage from 'assets/js/storage';
  import {searchMixin} from 'assets/js/mixins';

  export default {
    name: 'SearchHistory',
    mixins: [searchMixin],
    data() {
      return {
        histories: []
      };
    },
    created() {
      this.getSearchHistory();
    },
    methods: {
      clear() {
        storage.remove(SEARCH_PAGE_HISTORIES_KEY);
      },
      update() {
        this.getSearchHistory(SEARCH_PAGE_HISTORIES_KEY);
      },
      getSearchHistory() {
        this.histories = storage.get(SEARCH_PAGE_HISTORIES_KEY, []);
      },
      removeItem(item) {
        this.histories = this.histories.filter(val => val !== item);
        storage.set(SEARCH_PAGE_HISTORIES_KEY, this.histories);
        this.$emit('remove-item');
      },
      showConfirm() {
        this.$emit('show-confirm');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .history {
    &-header {
      @include flex-between();

      &-title {
        font-size: 15px;
        margin: 10px 8px;
      }

      .icon-delete-all {
        font-size: 18px;
        margin-right: 16px;
      }
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      padding: 5px 8px;

      &-item {
        @include flex-center();
        padding: 10px 8px;
        margin: 5px 8px 5px 0px;
        background: #F0F2F5;
        border-radius: 3px;
      }

      .icon-dark-close {
        font-size: 13px;
        margin-left: 5px;
      }
    }
  }
</style>

