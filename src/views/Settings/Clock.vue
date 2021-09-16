<template lang="pug">
  .clock
    SettingItemSwitch(
      title="Set clock mode"
      description="The clock on the homepage will remain static and will not change as time goes as initially loaded. Enable this feature to have a real-time clock ticking."
      :initialData="initialClockMode"
      @change="clockModeChange"
    )
    SettingItemSwitch(
      title="Set colon blinking"
      description="This is just to spice up the clock on the homepage to look like an actual digital clock. Enable this feature to experience it for yourself."
      :initialData="initialColonMode"
      @change="colonModeChange"
    )
</template>

<script lang="ts">
import Vue from "vue";
import SettingItemSwitch from "@/components/SettingItemSwitch.vue";
import { setLS } from "@/services";
import { StorageType } from "@/models/StorageType";

export default Vue.extend({
  components: {
    SettingItemSwitch,
  },
  computed: {
    initialClockMode(): boolean {
      return this.$store.state.clockMode;
    },
    initialColonMode(): boolean {
      return this.$store.state.colonMode;
    },
  },
  methods: {
    clockModeChange(turnOn: boolean): void {
      setLS(StorageType.CLOCKMODE, JSON.stringify(turnOn));
    },
    colonModeChange(turnOn: boolean): void {
      setLS(StorageType.COLONMODE, JSON.stringify(turnOn));
    },
  },
});
</script>

<style lang="less" scoped></style>
