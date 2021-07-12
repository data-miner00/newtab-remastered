<template lang="pug">
  .home
    .searchbox
      .service-selector(@click="toggleSelector")
        .service-icon(:title="service")
          img(:src="serviceLogo")
        .dropdown-icon d
        .hidden-selector(ref="hid")
          .icons(v-for="se in searchEngines" :key="se.id" @click="selectService(se.id)")
            img(:src="se.logo")
      .search-input
        input(type="text" placeholder="Type here...")

</template>

<script lang="ts">
import Vue from "vue";

type ISearchEngineService = {
  id: number;
  service: string;
  logo: string;
  queryString: string;
};

export default Vue.extend({
  data: () => ({
    serviceId: 1,
    service: "",
    serviceLogo: "",
    serviceQueryString: "",
  }),
  beforeMount(): void {
    this.selectService(1);
  },
  methods: {
    search(): void {
      //
    },
    selectService(_id: number): void {
      const { id, service, logo, queryString }: ISearchEngineService =
        this.searchEngines[_id - 1];
      this.serviceId = id;
      this.service = service;
      this.serviceLogo = logo;
      this.serviceQueryString = queryString;
    },
    toggleSelector() {
      const selectorElement: HTMLDivElement = this.$refs.hid as HTMLDivElement;
      if (selectorElement.style.display == "none") {
        selectorElement.style.display = "block";
      } else {
        selectorElement.style.display = "none";
      }
    },
  },
  computed: {
    searchEngines(): ISearchEngineService[] {
      return [
        {
          id: 1,
          service: "Google",
          logo: "/favicons/google.png",
          queryString: "",
        },
        {
          id: 2,
          service: "Duckduckgo",
          logo: "/favicons/duckduckgo.png",
          queryString: "",
        },
        {
          id: 3,
          service: "Bing",
          logo: "/favicons/bing.png",
          queryString: "",
        },
        {
          id: 4,
          service: "Yahoo",
          logo: "/favicons/yahoo.png",
          queryString: "",
        },
      ];
    },
  },
});
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background: #eee;
}
.searchbox {
  display: flex;

  .service-selector {
    display: flex;
    padding: 20px;
    background: #eee;
    position: relative;

    .hidden-selector {
      position: absolute;
      top: 100%;
    }
  }
  .search-input {
    padding: 20px;
    input {
      outline: none;
      border: none;
      background: transparent;
    }
  }
}
</style>
