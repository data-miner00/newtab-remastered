<template lang="pug">
  .settings
    .settings__dialog-overlay(ref="overlay" @click.self="toggleConfirmDialog")
      .settings__rusure-dialog
        .wrap
          h1.settings__rusure-dialog__title.title Reset All Settings
          .settings__rusure-dialog__description Are you sure you want to remove all your current settings and restore to the default settings?
        .settings__rusure-dialog__actions
          .naah(@click="toggleConfirmDialog") Naah
          .yeh(@click="confirmReset(); toggleConfirmDialog()") Yeh
    .settings__container
      .settings__container__header
        router-link.settings__container__header__back(to="/" title="Go back")
          fa(icon="arrow-left") 
        .settings__container__header__title Settings
        .settings__container__header__reset(title="Reset settings" @click="toggleConfirmDialog")
          fa(icon="hand-sparkles")
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
import { mapActions } from "vuex";
import { removeAllLS } from "@/services";

export default Vue.extend({
  metaInfo: {
    title: "Settings | Newtab Remastered",
  },
  methods: {
    ...mapActions(["clearState"]),
    toggleConfirmDialog(): void {
      const overlayElement: HTMLDivElement = this.$refs
        .overlay as HTMLDivElement;

      if (!overlayElement) return;

      if (overlayElement.style.display == "none") {
        overlayElement.style.display = "flex";
      } else {
        overlayElement.style.display = "none";
      }
    },
    confirmReset(): void {
      this.clearState();
      removeAllLS();
    },
  },
});
</script>

<style lang="less" scoped>
@import "../../assets/less/components/icon.less";

.settings {
  min-height: 100vh;
  position: relative;

  &__dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    justify-content: center;
    align-items: center;
  }
  &__rusure-dialog {
    width: 460px;
    color: black;
    height: 280px;
    background: white;
    padding: 40px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    &__actions {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;
      gap: 5px;
      div {
        text-align: center;
        border: 1px solid #aaa;
        border-radius: 5px;
        width: 80px;
        padding: 8px 0;
        transition: background 0.2s, color 0.2s;
        cursor: pointer;

        &:hover {
          background: #aaa;
          color: white;
        }
      }
    }
  }

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

      &__reset {
        .icon(20px, true);
        cursor: pointer;
        margin-left: auto;
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
