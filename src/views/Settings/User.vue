<template lang="pug">
  .user
    SettingItem(
      title="Set username"
      description="The username has no use but to show in the main page, so put anything all you want."
      placeholder="eg. Muhammad Tan"
      :initialData="initialName"
      @change="nameChange"
    )
    SettingItem(
      title="Set avatar"
      description="The user avatar also has no use but to show in the main page. Just provide the web URL to the image will suffice."
      placeholder="eg. /profile.jpg"
      :initialData="initialAvatar"
      @change="avatarChange"
    )
    SettingItem(
      title="Set place"
      description="The place or location that you you live. Alternatively you might provide any places that you desire, it's entirely up to you!"
      placeholder="eg. Sofia, Bulgaria"
      :initialData="initialPlace"
      @change="placeChange"
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

  data: () => ({
    initialName: "",
    initialAvatar: "",
  }),

  beforeMount(): void {
    this.initialName = this.$store.state.username || "";
    this.initialAvatar = this.$store.state.avatarUrl || "";
  },
  methods: {
    nameChange(newName: string): void {
      setLS(StorageType.USERNAME, newName);
    },
    avatarChange(newLink: string): void {
      setLS(StorageType.AVATARURL, newLink);
    },
    placeChange(newPlace: string) {
      setLS(StorageType.PLACE, newPlace);
    },
  },
  computed: {
    initialPlace(): string {
      return this.$store.state.place || "";
    },
  },
});
</script>

<style lang="less" scoped>
.setting-item {
  margin-bottom: 20px;
  .input-wrap {
    margin-top: 10px;
    input {
      outline: none;
      border: none;
      border-radius: 5px;
      width: 300px;
      padding: 10px;
    }
  }
}
</style>
