<template lang="pug">
    .misc
      SettingDropdownItem(
        title="Language"
        description="The display language that you prefer, however some part of the app may not be reflected as expected."
        :items="languages"
        subject="language"
        @change="languageChange"
      )
</template>

<script lang="ts">
import Vue from "vue";
import SettingDropdownItem from "@/components/SettingDropdownItem.vue";

export default Vue.extend({
  components: { SettingDropdownItem },
  data: () => ({
    languages: ["English", "Japanese"],
  }),
  methods: {
    languageChange(language: string): void {
      console.log(language);
    },
  },
});
</script>
