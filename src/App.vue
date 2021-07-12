<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view/
</template>

<style lang="less">
@import "./assets/less/global.less";
</style>
