<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>

     <me-scroll :data="recommends">
       <home-nav/>
       <home-slider/>
       <home-ad/>
       <home-recommend @loaded="getRecommends"/>
     </me-scroll>

    <div class="g-backtop-container"></div>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
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
      HomeNav,
      HomeAd,
      HomeRecommend
    },
    data() {
      return {
        recommends: []
      };
    },
    methods: {
      updateScroll() {

      },
      getRecommends(recommends) {
        this.recommends = recommends;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";


</style>

