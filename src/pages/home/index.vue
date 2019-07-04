<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>

     <me-scroll>
       <home-slider/>
     </me-scroll>

    <div class="g-backtop-container"></div>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
  import HomeHeader from './header';
  import HomeSlider from './slider';

  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";


</style>

