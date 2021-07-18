<template lang="pug">
  .time {{ hours }}#[span(ref="colon") :]{{ minutes }} {{ ampm }}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    hours: "0",
    minutes: "00",
    ampm: "",

    progressiveInterval: 0,
    blinkingInterval: 0,
    blinkingTimeout: 0,
  }),
  mounted(): void {
    // Run the compute timer for the first time
    this.computeCurrentTime();

    // If progressive clock mode is on, run every 30s
    if (this.progressiveClockMode) {
      this.initiateClock();
    }

    // If blinking mode is on, run every 2s
    if (this.blinkingColonMode) {
      this.initiateBlink();
    }
  },
  beforeDestroy(): void {
    clearInterval(this.progressiveInterval);
    clearInterval(this.blinkingInterval);
    clearTimeout(this.blinkingTimeout);
  },
  methods: {
    computeCurrentTime(): void {
      const dateObj = new Date();
      const hours = dateObj.getHours();
      const isAfternoon: boolean = hours >= 12;
      this.hours = (
        isAfternoon ? (hours == 12 ? 12 : hours - 12) : hours
      ).toString();
      this.minutes = dateObj.getMinutes().toString().padStart(2, "0");
      this.ampm = isAfternoon ? "PM" : "AM";
    },
    initiateClock(): void {
      this.progressiveInterval = setInterval(() => {
        this.computeCurrentTime();
      }, 30000);
    },
    initiateBlink(): void {
      this.blinkingInterval = setInterval(() => {
        const colon: HTMLSpanElement = this.$refs.colon as HTMLSpanElement;
        colon.style.visibility = "hidden";
        this.blinkingTimeout = setTimeout(() => {
          colon.style.visibility = "visible";
        }, 500);
      }, 2000);
    },
  },
  computed: {
    progressiveClockMode(): boolean {
      return this.$store.state.clockMode;
    },
    blinkingColonMode(): boolean {
      return this.$store.state.colonMode;
    },
  },
});
</script>

<style lang="less" scoped>
.time {
  font-size: 86px;
  font-weight: 700;
  text-align: center;
}
</style>
