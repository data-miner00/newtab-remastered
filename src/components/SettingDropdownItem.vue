<template lang="pug">
  .setting-dropdown-item
    h1.title {{ title }}
    p.description {{ description }}
    .dropdown-wrap
      select(:name="subject" :ref="subject" @change="change")
        option(
          v-for="(item, index) in items"
          :key="index"
          :value="item.toLowerCase()"
        ) {{ item }}
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
    subject: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    change(): void {
      this.$emit(
        "change",
        (this.$refs[this.subject] as HTMLSelectElement).value
      );
    },
  },
});
</script>

<style lang="less" scoped>
.setting-dropdown-item {
  margin-bottom: 20px;
  .dropdown-wrap {
    margin-top: 10px;
    select {
      border: none;
      border-radius: 5px;
      width: 300px;
      padding: 10px;
    }
  }
}
</style>
