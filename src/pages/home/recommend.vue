<template>
  <div class="recommend">
    <h3 class="recommend-title">猜你喜欢</h3>
    <ul class="recommend-list">
      <li class="recommend-item"
          v-for="(item, index) in recommends"
          :key="index">
        <a :href="item.baseinfo.itemUrl" class="recommend-link">
          <p class="recommend-pic"><img v-lazy="item.baseinfo.picUrlNew" alt="商品图片" class="recommend-img"></p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-price">¥{{item.price.actPrice}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getHomeRecommend} from 'api/home';

  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommends: [],
        curPage: 1,
        totalPage: 1
      };
    },
    created() {
      this.getRecommend();
    },
    methods: {
      getRecommend() {
        if(this.curPage > this.totalPage) {
          return;
        }

        getHomeRecommend(this.curPage).then(data => {
          if(data) {
            this.curPage ++;
            this.totalPage = data.totalPage;
            this.recommends = data.itemList.concat(data.itemList);
            this.$emit('loaded', this.recommend);
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
   @import "~assets/scss/mixins";

  .recommend {
    &-title {
      font-weight: bold;
      font-size: 20px;
      padding-left: 8px;
      margin: 5px 0px 10px 0px;
      color: #4C4C4C;
    }

    &-list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 5px;
    }

    &-item {
      width: 48%;
      height: 250dpx;
      background-color: #fff;
      margin-bottom: 8px;
      border: 1px solid rgb(237, 237, 237);
    }

    &-link {
      display: block;
    }

    &-pic {
      width: 100%;
      padding: 8px;
      background-color: #F7F7F7;
      /* padding-top: 100%; */
    }

    &-img {
      width: 100%;
    }

    &-name {
      @include multiline-ellipsis(2);

      font-size: 14px;
      line-height: 18px;
      margin-top: 2px;
      margin-bottom: 2px;
      color: rgb(62, 62, 62);
      padding: 8px;
      -webkit-line-clamp: 2;
    }

    &-price {
      white-space: pre-wrap;
      font-size: 16px;
      line-height: 28px;
      text-align: lefts;
      font-weight: 600;
      margin-left: 8px;
      color: rgb(255, 0, 0);
    }
  }
</style>
