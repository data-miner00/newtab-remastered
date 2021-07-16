<template lang="pug">
  .setting-item
    h1.title {{ title }}
    p.description {{ description }}
    .input-wrap
      input(
        :placeholder="placeholder" 
        :value="initialData" 
        @change="emitInput"
      )
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
    placeholder: {
      type: String,
      required: true,
    },
    initialData: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitInput(evt: Event): void {
      this.$emit("change", (evt.target as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="less" scoped>
.setting-item {
  margin-bottom: 20px;
  .input-wrap {
    margin-top: 10px;
    input {
      outline: none;
      border: none;
      border-radius: 5px;
      width: 300px;
      padding: 10px;
    }
  }
}
</style>
