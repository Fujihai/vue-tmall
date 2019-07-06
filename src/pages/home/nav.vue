<template>
  <nav class="nav" v-if="navs.length">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {getHomeNav} from 'api/home';

  export default {
    name: 'HomeNav',
    data() {
      return {
        navs: []
      };
    },
    created() {
      this.getNavs();
    },
    methods: {
      getNavs() {
        getHomeNav().then(data => {
          this.navs = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .nav {
    width: 100%;
    padding-top: 15px;
    background-color: #fff;
    margin-top: 45px;

    &-list {
      display: flex;
      flex-wrap: nowrap;
    }

    &-item {
      width: 20%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      width: 60%;
      margin-bottom: 8px;
    }
  }
</style>
