<template lang="pug">
  DefaultLayout
    router-view/
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "./layouts/Default.vue";

export default Vue.extend({
  components: {
    DefaultLayout,
  },
});
</script>

<style lang="less">
@import "./assets/less/global.less";
</style>
