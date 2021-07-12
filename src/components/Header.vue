<template lang="pug">
  header.header
    .header__location Taman Sri Songket, Batu Berendam, Melaka. 7.46PM
    .header__panel
      .header__panel__icon.app
        fa(icon="dungeon")
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
      padding: 10px;

      &.mail {
        margin-right: 15px;
      }
      &.chevron {
        font-size: 14px;
      }
    }

    &__user {
      display: flex;
      align-items: center;
      padding: 10px 12px;
      border-radius: @round-radius;
      transition: background 0.2s;

      &:hover {
        background: #eee;
      }

      &__avatar {
        .avatar(40px);
        margin-right: 10px;
      }
    }
  }
}
</style>
