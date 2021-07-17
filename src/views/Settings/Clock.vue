<template lang="pug">
  .clock
    SettingItemSwitch(
      title="Set clock mode"
      description="The clock will only load once and the time won't change unless refresh or remount, turn on will become an active clock."
      :initialData="initialClockMode"
      @change="clockModeChange"
    )
    SettingItemSwitch(
      title="Set colon blinking"
      description="The colon is tranquil but will blink after on. It consumes some computation power so it is not recommended for crappy browser like yours."
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
