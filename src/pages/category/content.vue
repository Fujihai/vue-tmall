<template>
  <div class="content-wrapper">
    <scroll>
      <div class="content-list">
        <div class="section"
          v-for="(section, index) in contents"
          :key="index">
          <h3 class="section-title">{{section.title}}</h3>
          <div class="section-row">
            <li class="section-item"
              v-for="(item, index) in section.items"
              :key="index"
            >
              <a :href="item.action" class="section-item-link">
                <p class="section-item-pic"><img :src="item.imgUrl" alt="" class="section-item-img"></p>
                <p class="section-item-title">{{item.title}}</p>
              </a>
            </li>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll';
  import {getCategoryContent} from 'api/category';

  export default {
    name: 'CategoryContent',
    components: {
      Scroll
    },
    props: {
      curId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        contents: {},
        isBacktopVisible: false
      };
    },
    watch: {
      curId(id) {
        this.getContent(id);
      }
    },
    methods: {
      getContent(id){
        getCategoryContent(id).then(data => {
          if(data) {
            this.contents = data;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .content-wrapper {
    position:  relative;
    height: 100%;

    .section {
      &-title {
        display: block;
        line-height: 44px;
        font-size: 12px;
        color: #333;
        text-align: center;
        font-weight: bolder;

        &:before,
        &:after {
          content: '';
          width: 22px;
          height: 1px;
          background-color: #D9D9D9;
          margin: 0px 4px;
          display: inline-block;
          vertical-align: middle;
        }
      }

      &-row {
        margin-bottom: 20px;
        @include flex-center();
        flex-wrap: wrap;
      }

      &-item {
        width: 30%;
        margin-bottom: 10px;

        &-link {
          @include flex-center(column);
        }

        &-img {
          display: block;
          width: 64px;
          height: 64px;
          margin-bottom: 10px;
        }

        &-title {
          display: inline-block;
          width: 80px;
          padding: 2px 8px;
          line-height: 15px;
          text-align: center;
          @include multiline-ellipsis();
        }
      }
    }
  }
</style>

