<template lang="pug">
  .about 
    .about__app Newtab Remastered
    .about__version Version 1.1.0
    .about__description 
      | A lightweight application that mimics the typical new tab page but have elevated functionalities that suits well.
    .about__github 
      | The source code can be found on #[a.gh(href="https://github.com/data-miner00/newtab-remastered" target="blank") Github]
</template>

<style lang="less" scoped>
.about {
  &__app {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 1em;
  }

  &__version {
    font-size: 1.5em;
    margin-bottom: 0.75em;
  }

  &__github {
    .gh {
      font-weight: 700;
      text-decoration: underline;
    }
  }
}
</style>
