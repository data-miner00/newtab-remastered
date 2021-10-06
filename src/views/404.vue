<template lang="pug">
  .not-found
    .not-found__main
      .not-found__main__404 404
      .not-found__main__description
        | It seems like the #[span dark valley] is up ahead. There are #[span no ways]
        | to cross the unfathomable abyss upfront. Let's #[span head back] to somewhere safe.
      router-link.not-found__main__back-btn(:to="{ name: 'home'}") Go back

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  metaInfo: {
    title: "404 | Newtab Remastered",
  },
});
</script>

<style lang="less" scoped>
.not-found {
  height: 100vh;
  display: grid;
  place-items: center;

  &__main {
    width: fit-content;
    height: fit-content;

    &__404 {
      font-size: 96px;
      font-weight: 800;
    }
    &__description {
      width: 500px;
      background: rgba(0, 0, 0, 0.4);
      padding: 20px;

      span {
        color: #7369b6;
        font-weight: 800;
      }
    }
    &__back-btn {
      display: block;
      padding: 16px 20px;
      background: #7369b6;
      font-weight: 700;
      margin-top: 20px;
      width: fit-content;
      border-radius: 5px;
      transition: 0.2s ease;

      &:hover {
        background-color: darkslateblue;
      }
    }
  }
}
</style>
