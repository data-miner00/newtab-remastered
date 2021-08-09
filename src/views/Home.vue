<template lang="pug">
  .home(tabindex="0" @keydown.ctrl.prevent="navigateSearch")
    router-link.setting-button(to="/settings" title="Settings")
      fa(:icon="['far', 'object-ungroup']")
    Header/
    .content-wrapper
      .info
        DigitalClock/
        .place {{ place }}
      .searchbox(ref="hod")
        .service-selector(@click="toggleSelector")
          .service-icon(:title="service")
            img(:src="serviceLogo")
          .dropdown-icon
            fa(icon="caret-down")
          .hidden-selector(ref="hid")
            .icons(v-for="se in searchEngines" :key="se.id" @click="selectService(se.id)" :title="se.service")
              div
                img(:src="se.logo")
        .search-input
          input(
            type="text" 
            ref="searchbox" 
            v-model="searchQuery" 
            :placeholder="searchPlaceholder" 
            @focus="triggerDarkerBorder(); hideTip()" 
            @blur="triggerDarkerBorder(); showTip()" 
            @keyup.enter="search"
          )
          .tips(ref="tip") CTRL+K
      .shortcut-section
        .some 
        .shortcut-container
          ShortcutItem(
            v-for="(shortcut, index) in shortcuts"
            :key="index"
            :icon="shortcut.icon"
            :name="shortcut.name"
            :url="shortcut.url"
          )
        .bottom-part
          .left
          .right View full list &gt;&gt;
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import Header from "../components/Header.vue";
import ShortcutItem from "../components/ShortcutItem.vue";
import DigitalClock from "../components/DigitalClock.vue";
import { StorageType } from "../models/StorageType";
import { setLS } from "../services/index";

type ISearchEngineService = {
  id: number;
  service: string;
  logo: string;
  queryString: string;
};

export default Vue.extend({
  components: {
    Header,
    ShortcutItem,
    DigitalClock,
  },
  metaInfo: {
    title: "Your trusty new tab app | Newtab Remastered",
  },
  data: () => ({
    searchQuery: "",
    serviceId: 1,
    service: "",
    serviceLogo: "",
    serviceQueryString: "",
  }),
  mounted(): void {
    this.selectService(this.searchEngineIndex, true);
  },
  methods: {
    ...mapMutations(["setSearchEngine"]),
    search(): void {
      // Check if the user hit enter but did not provide args
      // In this case do nothing and return
      if (!this.searchQuery) return;

      // Check if the args is a link
      // TODO: include coverage for http, non http[s] using regex
      if (this.searchQuery.startsWith("https://")) {
        window.open(this.searchQuery, "_blank");
      } else {
        const parsedSearchText: string = this.searchQuery.replaceAll(" ", "+");
        window.open(this.serviceQueryString + parsedSearchText, "_blank");
      }
      this.searchQuery = "";
    },
    selectService(_id: number, onMount = false): void {
      const seaechboxElement: HTMLInputElement = this.$refs
        .searchbox as HTMLInputElement;
      const { id, service, logo, queryString }: ISearchEngineService =
        this.searchEngines[_id - 1];
      this.serviceId = id;
      this.service = service;
      this.serviceLogo = logo;
      this.serviceQueryString = queryString;
      seaechboxElement.focus();

      if (!onMount) {
        // Set to local storage and store
        this.setSearchEngine(_id);
        setLS(StorageType.SEARCHENGINE, JSON.stringify(_id));
      }
    },
    toggleSelector() {
      const selectorElement: HTMLDivElement = this.$refs.hid as HTMLDivElement;

      // Silence unknown reason of triggering the function
      if (!selectorElement) return;

      if (selectorElement.style.display == "none") {
        selectorElement.style.display = "block";
      } else {
        selectorElement.style.display = "none";
      }
    },
    triggerDarkerBorder() {
      const searchElement: HTMLDivElement = this.$refs.hod as HTMLDivElement;

      // Silence unknown reason of triggering the function
      if (!searchElement) return;

      if (searchElement.classList.contains("focus")) {
        searchElement.classList.remove("focus");
      } else {
        searchElement.classList.add("focus");
      }
    },
    showTip(): void {
      const tipElement: HTMLDivElement = this.$refs.tip as HTMLDivElement;

      if (!tipElement) return;

      tipElement.style.visibility = "visible";
    },
    hideTip(): void {
      const tipElement: HTMLDivElement = this.$refs.tip as HTMLDivElement;

      if (!tipElement) return;

      tipElement.style.visibility = "hidden";
    },
    navigateSearch(evt: any): void {
      if (evt.key == "k") {
        const searchboxElement: HTMLInputElement = this.$refs
          .searchbox as HTMLInputElement;
        searchboxElement.focus();
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
          service: "Qwant",
          logo: "/favicons/qwant.png",
          queryString: "https://www.qwant.com/?q=",
        },
        {
          id: 9,
          service: "Library Genesis",
          logo: "/favicons/libgen.png",
          queryString: "http://libgen.rs/scimag/?q=",
        },
      ];
    },
    searchPlaceholder(): string {
      return `Search ${this.service} or type a URL`;
    },
    shortcuts() {
      return [
        {
          name: "Facebook",
          icon: "facebook",
          url: "https://www.facebook.com",
        },
        {
          name: "Twitter",
          icon: "twitter",
          url: "https://www.twitter.com",
        },
        {
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com",
        },
        {
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com",
        },
        {
          name: "Windy",
          icon: "windy",
          url: "https://www.windy.com",
        },
        {
          name: "GitHub",
          icon: "github",
          url: "https://www.github.com",
        },
        {
          name: "Reddit",
          icon: "reddit",
          url: "https://www.reddit.com",
        },
        {
          name: "Next.js",
          icon: "next",
          url: "https://nextjs.org/",
        },
        {
          name: "Vite.js",
          icon: "vitejs",
          url: "https://vitejs.dev/",
        },
        {
          name: "Investopedia",
          icon: "investopedia",
          url: "https://www.investopedia.com/",
        },
      ];
    },
    place(): string {
      return this.$store.state.place || "Hypatia, Mars";
    },
    searchEngineIndex(): number {
      return Number(this.$store.state.searchEngine) || 1;
    },
  },
});
</script>

<style lang="less" scoped>
@import "../assets/less/_variables.less";
@import "../assets/less/components/icon.less";
.home {
  height: 100vh;
}

.setting-button {
  .icon();
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 20px 20px 0;
}

.content-wrapper {
  margin: 0 auto;
  width: 600px;
}

.info {
  padding: 20px 0;

  .place {
    text-align: right;
  }
}

.searchbox {
  width: 100%;

  display: flex;
  background: white;

  border-radius: 5px;
  border: 1px solid #eee;

  &.focus {
    border: 1px solid cornflowerblue;
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

    .dropdown-icon {
      color: #333;
    }

    .hidden-selector {
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
      background: white;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 10px 0;
      display: none;

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
    position: relative;

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

    .tips {
      position: absolute;
      top: 50%;
      right: 5px;
      padding: 5px;
      transform: translateY(-50%);
      font-weight: 600;
      color: white;
      border-radius: 5px;
      background: rgb(240, 240, 240);
      cursor: default;
      transition: background 0.2s;

      &:hover {
        background: lightgray;
      }
    }
  }
}

.shortcut-section {
  width: 100%;
  .shortcut-container {
    width: 100%;
    margin: 20px 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .bottom-part {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 0.75em;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    .right {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
