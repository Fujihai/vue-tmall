<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>

     <me-scroll
      :data="recommends"
      @scroll-end="scrollEnd"
      ref="scroll"
     >
       <home-nav/>
       <home-slider/>
       <home-ad/>
       <home-recommend @loaded="getRecommends"/>
     </me-scroll>

    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
    </div>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
  import MeBacktop from 'base/backtop';
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import HomeAd from './ad';
  import HomeRecommend from './recommend';

  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      MeBacktop,
      HomeNav,
      HomeAd,
      HomeRecommend
    },
    data() {
      return {
        recommends: [],
        isBacktopVisible: false
      };
    },
    // created() {
    //   setTimeout(() => {
    //     this.isBacktopVisible = true;
    //   }, 1000);
    // },
    methods: {
      updateScroll() {

      },
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      scrollEnd(translate, scroll){
        // console.log('超过一屏，显示滚动条。');
        // translate 是往下滚动
        this.isBacktopVisible = translate < 0 && -translate  > scroll.height;
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";


</style>

