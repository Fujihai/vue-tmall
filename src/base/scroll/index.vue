<template>
  <swiper :options="swiperOption" ref="swiper">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default{
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: [Array, Object]
      }
    },
    data() {
      return {

      };
    },
    watch: {
      data() {
        this.update();
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.swiperOption = {
          direction: 'vertical',  //垂直方向滚动
          slidesPerView: 'auto',  //一页可显示的内容张数
          freeMode: true,         //一次可以滚动任意距离，幻灯片每次只能滚动固定距离
          setWrapperSize: true,   //设置内容区域为计算出来的高度，可以使用 api 进行获取
          scrollbar: {            //与分页器类似
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true            //自动隐藏
          },
          on: {
            sliderMove: this.scroll,      // 滚动过程中
            transitionEnd: this.scrollEnd // 滚动过程停止触发的事件
          }
        };
      },
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update();
      },
      scrollToTop(speed, runCallbacks) {
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
      },
      scroll() {
        // 在滚动过程中，触发滚动事件。用来控制「返回顶部」 按钮的显示与隐藏。
        this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);
      },
      scrollEnd() {
        // 触发 scroll-end 事件，携带参数 translate 及 swiper 对象
        this.$emit('scroll-end', this.$refs.swiper.swiper.translate, this.$refs.swiper.swiper, this.pulling);
      },
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    /* vh 是指相对于视窗的高度，设置为100，则占满整个视窗 */
    height: 100vh;
  }

  .swiper-slide {
    height: auto;
  }
</style>
