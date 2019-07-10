<template>
  <div class="slider-wrapper">
    <slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-if="sliders.length">
    <swiper-slide
      v-for="(item, index) in sliders"
      :key="index">
      <a :href="item.linkUrl" class="slider-link">
        <img :src="item.picUrl" alt="" class="slider-img">
      </a>
    </swiper-slide>
  </slider>
  </div>

</template>

<script>
  import Slider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from 'api/home';

  export default {
    name: 'HomeSlider',
    components: {
      Slider,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      getSliders() {
        getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .slider-wrapper{
    width: 351px;
    height: 131px;
    margin: 0 auto;
    border-radius: 10px;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img{
    width: 100%;
    height: 100%;
  }
</style>

