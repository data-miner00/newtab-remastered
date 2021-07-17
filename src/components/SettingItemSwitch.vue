<template lang="pug">
  .setting-item-switch
    h1.title {{ title }}
    p.description {{ description }}
    label.switch
      input(type="checkbox" @change="onValueChange" :checked="initialData")
      span.slider.round
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    initialData: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onValueChange(evt: Event): void {
      this.$emit("change", (evt.target as HTMLInputElement).checked);
    },
  },
});
</script>

<style lang="less" scoped>
@import "../assets/less/components/switch.less";

.setting-item-switch {
  margin-bottom: 20px;

  .description {
    margin-bottom: 10px;
  }
}
</style>
