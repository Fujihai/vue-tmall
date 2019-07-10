<template>
  <div class="navbar">
    <div class="navbar-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .navbar {
    position: relative;

    @include flex-between();
    height: 50px;

    &-left {
      margin-left: 10px;

      ~ .navbar-right {
        position: static;
      }
    }

    &-center {
      flex: 1;
      margin: 0 10px;

       ~ .navbar-right {
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

