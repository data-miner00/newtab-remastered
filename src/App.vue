<template lang="pug">
  #app
    .bg-img
      img(:src="backgroundImgUrl" :style="{ filter: `blur(${backgroundBlur}px)`}")
    
    router-view/
</template>

<script lang="ts">
import Vue from "vue";
import { loadLS } from "@/services";
import { StorageType } from "@/models/StorageType";

export default Vue.extend({
  beforeMount(): void {
    loadLS(StorageType.USERNAME);
    loadLS(StorageType.AVATARURL);
    loadLS(StorageType.MAILURL);
    loadLS(StorageType.NEWSURL);
    loadLS(StorageType.MAPURL);
    loadLS(StorageType.BGURL);
    loadLS(StorageType.CLOCKMODE);
    loadLS(StorageType.COLONMODE);
    loadLS(StorageType.PLACE);
    loadLS(StorageType.SEARCHENGINE);
    loadLS(StorageType.BGBLUR);
  },
  computed: {
    backgroundImgUrl(): string {
      return this.$store.state.bgUrl || "/test2.jpg";
    },
    backgroundBlur(): string {
      return this.$store.state.bgBlur || "0";
    },
  },
});
</script>

<style lang="less">
@import "./assets/less/global.less";

#app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background: #26262b;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
