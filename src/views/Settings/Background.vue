<template lang="pug">
  .background
    SettingItem(
      title="Set background image"
      description="You are able to cuztomize the background picture with any of the online-hosted images. All it takes is just the web URL to the image."
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
