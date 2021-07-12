<template lang="pug">
  .home
    Header/
    .greeting Good Morning
    .searchbox(ref="hod")
      .service-selector(@click="toggleSelector")
        .service-icon(:title="service")
          img(:src="serviceLogo")
        .dropdown-icon
          fa(icon="caret-down")
        .hidden-selector(ref="hid")
          .icons(v-for="se in searchEngines" :key="se.id" @click="selectService(se.id)")
            div
              img(:src="se.logo")
      .search-input
        input(type="text" v-model="searchQuery" :placeholder="searchPlaceholder" @focus="triggerDarkerBorder" @blur="triggerDarkerBorder" @keyup.enter="search")

</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";

type ISearchEngineService = {
  id: number;
  service: string;
  logo: string;
  queryString: string;
};

export default Vue.extend({
  components: {
    Header,
  },
  data: () => ({
    searchQuery: "",
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
      if (!this.searchQuery) return;
      if (this.searchQuery.startsWith("https://")) {
        window.open(this.searchQuery, "_blank");
      } else {
        const parsedSearchText: string = this.searchQuery.replaceAll(" ", "+");
        window.open(this.serviceQueryString + parsedSearchText, "_blank");
      }
      this.searchQuery = "";
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
    triggerDarkerBorder() {
      const searchElement: HTMLDivElement = this.$refs.hod as HTMLDivElement;
      if (searchElement.classList.contains("focus")) {
        searchElement.classList.remove("focus");
      } else {
        searchElement.classList.add("focus");
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
          queryString: "https://www.google.com/search?q=",
        },
        {
          id: 2,
          service: "Duckduckgo",
          logo: "/favicons/duckduckgo.png",
          queryString: "https://www.duckduckgo.com/?q=",
        },
        {
          id: 3,
          service: "Youtube",
          logo: "/favicons/youtube.png",
          queryString: "https://www.youtube.com/results?search_query=",
        },
        {
          id: 4,
          service: "Bing",
          logo: "/favicons/bing.png",
          queryString: "https://www.bing.com/search?q=",
        },
        {
          id: 5,
          service: "Yahoo",
          logo: "/favicons/yahoo.png",
          queryString: "https://search.yahoo.com/search?p=",
        },
        {
          id: 6,
          service: "Baidu",
          logo: "/favicons/baidu.png",
          queryString: "https://www.baidu.com/s?wd=",
        },
        {
          id: 7,
          service: "Yandex",
          logo: "/favicons/yandex.png",
          queryString: "https://www.yandex.com/search/?text=",
        },
        {
          id: 8,
          service: "Library Genesis",
          logo: "/favicons/libgen.png",
          queryString: "http://libgen.rs/scimag/?q=",
        },
      ];
    },
    searchPlaceholder(): string {
      return `Search ${this.service} or type a URL`;
    },
  },
});
</script>

<style lang="less" scoped>
@import "../assets/less/_variables.less";
.home {
  height: 100vh;
}

.searchbox {
  margin: 0 auto;
  width: 600px;
  display: flex;
  background: white;
  border-radius: 5px;
  border: 1px solid #eee;

  &.focus {
    border: 1px solid #ccc;
  }

  .service-selector {
    display: flex;
    padding: 10px 30px;
    position: relative;
    cursor: pointer;
    border-right: 1px solid #eee;

    .service-icon {
      margin-right: 10px;
    }

    .hidden-selector {
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
      background: white;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 10px 0;

      .icons {
        height: 48px;
        width: 105px;
        transition: background 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          width: fit-content;
        }

        &:hover {
          background: #eee;
        }
      }
    }
  }
  .search-input {
    flex-grow: 1;

    input {
      font-size: 1rem;
      color: #333;
      padding: 10px 10px 10px 20px;
      outline: none;
      border: none;
      background: transparent;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
