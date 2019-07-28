<template>
  <transition name="confirm">
    <div class="confirm-wrapper" v-show="visible">
      <div class="confirm">
        <div class="confirm-title" v-if="title">{{title}}</div>
        <div class="confirm-msg">{{msg}}</div>
        <div class="confirm-btns">
          <button class="confirm-btn confirm-cancel" @click="cancel">{{cancelBtnText}}</button>
          <button class="confirm-btn confirm-ok" @click="confirm">{{confirmBtnText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Confirm",
    props: {
      title: {
        type: String,
        default: ""
      },
      msg: {
        type: String,
        default: "确定执行此操作吗？"
      },
      cancelBtnText: {
        type: String,
        default: "取消"
      },
      confirmBtnText: {
        type: String,
        default: "确定"
      }
    },
    data() {
      return {
        visible: false
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      cancel() {
        this.hide();
        this.$emit("cancel");
      },
      confirm() {
        this.hide();
        this.$emit("confirm");
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .confirm-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: $search-popup-z-index;
    @include flex-center();
    background-color: $modal-bgc;
  }

  .confirm {
    overflow: hidden;
    width: 80%;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;

    &-title {
      padding: 20px 15px 0;
      font-size: 18px;
      text-align: center;

      & + .confirm-msg {
        padding-top: 20px;

      }
    }

    &-msg {
      padding: 40px 15px;
      text-align: center;
      line-height: 1.5;
    }

    &-btns {
      display: flex;
    }

    &-btn {
      flex: 1;
      height: 44px;
      line-height: 44px;
      background: none;
      border: none;
      border-top: 1px solid #e3e5e9;
    }

    &-ok {
      border-left: 1px solid #e3e5e9;
    }

    &-ok:hover {
      background-color: #f23030;
      color: #fff;
    }
  }

  .confirm {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.3s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-enter-active {
      .confirm {
        animation: scale-in 0.3s;
      }
    }
  }

  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
