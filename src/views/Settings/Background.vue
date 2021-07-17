<template lang="pug">
  .background
    SettingItem(
      title="Set background image"
      description="Now, you are able to cuztomize the background picture however you want!!! Just provide the correct URL to the image will do."
      placeholder="eg. /bg.jpg"
      :initialData="initialBg"
      @change="bgChange"
    )
</template>

<script lang="ts">
import Vue from "vue";
import SettingItem from "@/components/SettingItem.vue";
import { setLS } from "@/services";
import { StorageType } from "@/models/StorageType";

export default Vue.extend({
  components: {
    SettingItem,
  },
  methods: {
    bgChange(newUrl: string): void {
      setLS(StorageType.BGURL, newUrl);
    },
  },
  computed: {
    initialBg(): string {
      return this.$store.state.bgUrl || "";
    },
  },
});
</script>

<style lang="less" scoped>
//
</style>
