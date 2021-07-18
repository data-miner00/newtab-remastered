<template lang="pug">
  .time {{ hours }}#[span(ref="colon") :]{{ minutes }} {{ ampm }}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    hours: {
      type: String,
      required: true,
    },
    minutes: {
      type: String,
      required: true,
    },
    ampm: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="less" scoped>
.time {
  font-size: 86px;
  font-weight: 700;
  text-align: center;
}
</style>
