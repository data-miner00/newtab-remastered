<template lang="pug">
  //- DefaultLayout
  #app
    .bg-img
      img(:src="backgroundImgUrl")
    
    router-view/
</template>

<script lang="ts">
import Vue from "vue";
// import DefaultLayout from "./layouts/Default.vue";

export default Vue.extend({
  components: {
    // DefaultLayout,
  },
  data: () => ({
    backgroundImgUrl: "/test2.jpg",
  }),
});
</script>

<style lang="less">
@import "./assets/less/global.less";

#app {
  position: relative;
  min-height: 100vh;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
