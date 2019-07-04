<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MeNavbar"
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .mine-navbar {
    position: relative;

    @include flex-between();
    height: 50px;
    background-color: #FF0036;

    &-left {
      margin-left: 10px;

      ~ .mine-navbar-right {
        position: static;
      }
    }

    &-center {
      flex: 1;
      margin: 0 10px;

       ~ .mine-navbar-right {
        position: static;
      }
    }

    &-right {
      position: absolute;
      right: 0;
      @include flex-center();
      margin-right: 10px;
    }
  }
</style>

