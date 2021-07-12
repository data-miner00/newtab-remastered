<template lang="pug">
  .default-layout
    Header/
    slot/
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";

export default Vue.extend({
  components: {
    Header,
  },
});
</script>

<style lang="less" scoped>
.default-layout {
  min-height: 100vh;
}
</style>
