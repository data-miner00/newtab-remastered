<template lang="pug">
  .settings
    .settings__container
      .settings__container__header
        router-link.settings__container__header__back(to="/" title="Go back")
          fa(icon="arrow-left") 
        .settings__container__header__title Settings
      .settings__container__settings
        .settings__container__settings__navigation
          router-link.navlink(:to="{ name: 'user' }" exact-active-class="eactive") User
          router-link.navlink(:to="{ name: 'quicklinks' }" exact-active-class="eactive") Quicklinks
          router-link.navlink(:to="{ name: 'clock' }" exact-active-class="eactive") Clock
          router-link.navlink(:to="{ name: 'background' }" exact-active-class="eactive") Background
          router-link.navlink(:to="{ name: 'server' }" exact-active-class="eactive") Server
          .seperator
          router-link.navlink(:to="{ name: 'about' }" exact-active-class="eactive") About
          router-link.navlink(:to="{ name: 'privacy' }" exact-active-class="eactive") Privacy
        .settings__container__settings__content 
          router-view/
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    // goBack(): void {
    //   this.$router.go
    // },
  },
});
</script>

<style lang="less" scoped>
@import "../../assets/less/components/icon.less";

.settings {
  min-height: 100vh;

  &__container {
    width: 960px;
    margin: 0 auto;

    &__header {
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      display: flex;
      &__back {
        .icon(20px, true);
        cursor: pointer;
        margin-right: 20px;
      }

      &__title {
        font-size: 36px;
        font-weight: 600;
      }
    }

    &__settings {
      display: flex;
      padding-top: 30px;

      &__navigation {
        flex-basis: 320px;
        flex-shrink: 0;

        .navlink {
          display: block;
          font-size: 1.5em;
          padding: 10px 15px;
          transition: background 0.2s;
          border-radius: 5px;
          margin: 5px 10px 5px 0;

          &.eactive {
            background: rgba(0, 0, 0, 0.3);
          }

          &:hover {
            background: rgba(0, 0, 0, 0.3);
          }
        }

        .seperator {
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
          margin: 30px 10px 30px 0;
        }
      }

      &__content {
        flex-grow: 1;
        padding-left: 30px;
      }
    }
  }
}
</style>
