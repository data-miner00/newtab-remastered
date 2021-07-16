<template lang="pug">
  header.header
    .header__location
    .header__panel
      .header__panel__icon.map
        fa(:icon="['far', 'map']")
      .header__panel__icon.app
        fa(:icon="['far', 'newspaper']")
      .header__panel__icon.mail
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
