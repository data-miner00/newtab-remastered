<template lang="pug">
  .quicklinks
    SettingItem(
      title="Set default mail service"
      description="By setting the email service by providing its corresponding URL, you have override the link in the home that brings you to the designated mail service of your choice."
      placeholder="eg. https://www.hotmail.com"
      :initialData="initialMailUrl"
      @change="mailChange"
    )
    SettingItem(
      title="Set default news client"
      description="By setting the news client, you are ensured to grab the latest news feeds from your favourite news service provider at your disposal."
      placeholder="eg. https://news.microsoft.com/en-my/"
      :initialData="initialNewsUrl"
      @change="newsChange"
    )
    SettingItem(
      title="Set your map app"
      description="Never been before accessing maps can be this fast. By applying your custom map service provider, you are guarenteed to explore maps at blazing speeds."
      placeholder="eg. https://www.google.com.my/maps"
      :initialData="initialMapUrl"
      @change="mapChange"
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
  computed: {
    initialMailUrl(): string {
      return this.$store.state.mailUrl || "";
    },
    initialMapUrl(): string {
      return this.$store.state.mapUrl || "";
    },
    initialNewsUrl(): string {
      return this.$store.state.newsUrl || "";
    },
  },
  methods: {
    mailChange(newUrl: string): void {
      setLS(StorageType.MAILURL, newUrl);
    },
    mapChange(newUrl: string): void {
      setLS(StorageType.MAPURL, newUrl);
    },
    newsChange(newUrl: string): void {
      setLS(StorageType.NEWSURL, newUrl);
    },
  },
});
</script>
