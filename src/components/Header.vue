<template lang="pug">
  header.header
    .header__location
    .header__panel
      .header__panel__icon.app
        fa(:icon="['far', 'newspaper']")
      .header__panel__icon.mail
        fa(:icon="['far', 'envelope']")
      .header__panel__user
        .header__panel__user__avatar
          img(src="profile.png")
        .header__panel__user__username
          | Abdullah Tan bin Lim Ismail Yong Kang
        .header__panel__icon.chevron
          fa(icon="chevron-down")
</template>

<style lang="less" scoped>
@import "../assets/less/components/avatar.less";
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
      font-size: 20px;
      width: 50px;
      height: 50px;
      display: grid;
      place-items: center;
      border-radius: @round-radius;
      transition: background 0.2s;

      & > svg {
        display: block;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      &.mail {
        margin-right: 10px;
      }
      &.chevron {
        font-size: 14px;
      }
    }

    &__user {
      display: flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: @round-radius;
      transition: background 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      &__avatar {
        .avatar(36px);
        margin-right: 10px;
      }
    }
  }
}
</style>
