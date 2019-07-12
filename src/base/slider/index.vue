<template>
  <swiper :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper} from 'vue-awesome-swiper';

  export default {
    name: 'Slider',
    components: {
      swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return [
            'horizontal',
            'vertical'
          ].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          watchOverflow: true,  // 只有一个 slide 时, swiper 失效
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false //当用户与轮播图有交互时，轮播停止
          } : false,
          slidesPerView: 1, //每个 slider 容器能够同时显示的 slides 数量
          loop: this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              let resHtml = '';
              let baseBulletStyle = 'display:inline-block;margin:0 2px;height:2px;width:18px;border:none;';
              const bulletNormal = 'background-color:#85746D;opacity:.3;';
              const bulletActive = 'background-color:#ffffff;opacity:1;';
              let bulletStatusStyle = '';
              for(let i = 1; i <= total; i++) {
                bulletStatusStyle = i === current ? bulletActive : bulletNormal;
                resHtml += `<span class="swiper-pagination-custom" style='${baseBulletStyle}${bulletStatusStyle}'></span>`;
              }
              return resHtml;
            },
          }
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
