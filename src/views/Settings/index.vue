<template lang="pug">
  .settings
    .settings__container
      .settings__container__title Settings
      .settings__container__settings
        .settings__container__settings__navigation
          .navlink User
          .navlink Quicklinks
          .navlink Clock
          .navlink Background
          .navlink Server
          .seperator
          .navlink About
          .navlink Privacy
        .settings__container__settings__content 
          router-view/
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    //
  }),
});
</script>

<style lang="less" scoped>
.settings {
  min-height: 100vh;

  &__container {
    width: 960px;
    margin: 0 auto;

    &__title {
      font-size: 36px;
      font-weight: 600;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
    }

    &__settings {
      display: flex;
      padding-top: 30px;

      &__navigation {
        flex-basis: 320px;
        flex-shrink: 0;

        .navlink {
          font-size: 1.5em;
          padding: 10px 15px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 5px;
          margin: 5px 10px 5px 0;
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
