<template lang="pug">
  header.header
    .header__location
    .header__panel
      a.header__panel__icon.lang(href="https://translate.google.com.my" title="Google Translate" target="_blank")
        fa(icon="language")
      a.header__panel__icon.map(:href="mapUrl" title="Maps" target="_blank")
        fa(:icon="['far', 'map']")
      a.header__panel__icon.app(:href="newsUrl" title="News" target="_blank")
        fa(:icon="['far', 'newspaper']")
      a.header__panel__icon.mail(:href="mailUrl" title="Email" target="_blank")
        fa(:icon="['far', 'envelope']")
      .header__panel__user
        .header__panel__user__avatar
          img(:src="avatarUrl")
        .header__panel__user__username {{ username }}
        .header__panel__user__chevron
          fa(icon="chevron-down")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    username(): string {
      return (
        this.$store.state.username || "Abdullah Tan bin Lim Ismail Yong Kang"
      );
    },
    avatarUrl(): string {
      return this.$store.state.avatarUrl || "profile.png";
    },
    mapUrl(): string {
      return this.$store.state.mapUrl || "https://www.google.com.my/maps";
    },
    newsUrl(): string {
      return this.$store.state.newsUrl || "https://news.microsoft.com/en-my/";
    },
    mailUrl(): string {
      return this.$store.state.mailUrl || "https://www.hotmail.com";
    },
  },
});
</script>

<style lang="less" scoped>
@import "../assets/less/components/avatar.less";
@import "../assets/less/components/icon.less";
@import "../assets/less/_variables.less";

.header {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &__panel {
    display: flex;
    align-items: center;

    &__icon {
      .icon();

      &.mail {
        margin-right: 10px;
      }
    }

    &__user {
      display: flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: @round-radius;
      transition: background 0.2s;

      &:hover {
        background: rgba(232, 234, 237, 0.08);
      }

      &__avatar {
        .avatar(36px);
        margin-right: 10px;
      }

      &__chevron {
        .icon(14px, false);
      }
    }
  }
}
</style>
