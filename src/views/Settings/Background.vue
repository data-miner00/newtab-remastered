<template lang="pug">
  .background
    SettingItem(
      title="Set background image"
      description="Now, you are able to cuztomize the background picture however you want!!! Just provide the correct URL to the image will do."
      placeholder="eg. /bg.jpg"
      :initialData="initialBg"
      @change="bgChange"
    )
    SettingItem(
      title="Blur background set"
      description="Sometimes the image might be having a bad contrast with this application. You can set the blurryness in pixels (px) to see the effect."
      placeholder="eg. 5"
      :initialData="blurBg"
      @change="blurChange"
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
    blurChange(newBlur: string): void {
      setLS(StorageType.BGBLUR, newBlur);
    },
  },
  computed: {
    initialBg(): string {
      return this.$store.state.bgUrl || "";
    },
    blurBg(): string {
      return this.$store.state.bgBlur || "";
    },
  },
});
</script>

<style lang="less" scoped>
//
</style>
