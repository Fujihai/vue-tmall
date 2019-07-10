<template>
  <div class="search-box-wrapper">
    <i class="iconfont icon-search"></i>
    <div class="search-box" v-if="fake">{{placeholder}}</div>
    <input
      class="search-box"
      type="text"
      title="搜索框"
      :placeholder="placeholder"
      ref="input"
      v-model="query"
      v-if="!fake"
      >
    <i
      class="iconfont icon-close"
      v-show="query"
      @click="reset"
    ></i>
  </div>
</template>

<script>
  import {debounce} from 'assets/js/util';

  export default {
    name: 'SearchBox',
    props: {
      placeholder: {
        type: String,
        default: '搜索商品、品牌'
      },
      fake: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        query: ''
      };
    },
    watch: {
      // query() {
      //   this.$emit('query', this.query);
      // }
      query: debounce(function () {
        this.$emit('query', this.query);
      })
    },
    methods: {
      focus() {
        this.$refs.input && this.$refs.input.focus();
      },
      clear() {
        this.query = '';
      },
      reset() {
        this.clear();
        this.focus();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  $search-box-height: 30px;

  .search-box-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: $search-box-height;
    padding: 0 7px;
    background-color: #fff;
    border-radius: 4px;
  }

  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size;
    font-weight: bold;
  }

  .search-box {
      flex: 1;
      background: none;
      border: none;
      margin: 0 6px;
      color: #E4E4E4;
      line-height: 1.5;
      font-size: 12px;
    }
</style>

