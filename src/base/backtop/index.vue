<template>
  <transition name="backtop">
    <a href="javascript:;"
      class="backtop"
      v-show="visible"
      @click="backToTop"
    >
      <i class="iconfont icon-backtop"></i>
    </a>
  </transition>
</template>

<script>
  export default {
    name: 'Backtop',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backToTop() {
        this.$emit('backtop');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .backtop {
    overflow: hidden;
    @include flex-center();
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;

    .iconfont {
      color:#5A5A5A;
      font-size: 44px;
    }
  }

  .backtop {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.4s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
</style>

