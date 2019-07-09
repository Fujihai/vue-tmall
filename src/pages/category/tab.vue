<template>
  <div>
    <me-scroll>
      <ul class="tab">
        <li
          class="tab-item"
          :class="{'tab-item-active': item.id === curId}"
          v-for="(item, index) in items"
          :key="index"
          @click="switchTab(item.id)"
        ><span class="tab-item-text">{{item.name}}</span>
        </li>
      </ul>
    </me-scroll>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
  import {categoryNames} from './config';

  export default {
    name: 'CategoryTab',
    components: {
      MeScroll
    },
    data() {
      return {
        items: [],
        curId: ''
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.items = categoryNames;
        this.switchTab(this.items[0].id);
      },
      switchTab(id) {
        if(this.curId === id){
          return;
        }
        this.curId = id;
        this.$emit('switch-tab', id);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  $tab-item-height: 60px;

  .swiper-container{
    margin-top: 50px;
  }

  .tab {
    width: 100%;

    &-item {
      position: relative;
      margin-bottom: 1px;
      display: block;
      height: $tab-item-height;
      background-color: #F7F7F7;
      box-sizing: border-box;
      line-height: 20px;
      font-size: 12px;
      text-align: center;
      color: #333;

      &-text {
        position: absolute;
        padding: 10px 20px;
        top: 50%;
        left: 50%;
        width: 75px;
        transform: translate(-50%, -50%);
      }

      &-active {
        color: #FF0036;
        border-left: 2px solid #FF0036;
        background-color: #FFF;
      }
    }
  }
</style>

