<template>
  <div class="asia-subregion-list">
    <h2>Asian Subregions</h2>
    <ul>
      <li v-on:click="handleSelectRegion('central')">Central Asia</li>
      <li v-on:click="handleSelectRegion('eastern')">Eastern Asia</li>
      <li v-on:click="handleSelectRegion('southern')">Southern Asia</li>
      <li v-on:click="handleSelectRegion('south-eastern')">South Eastern Asia</li>
      <li v-on:click="handleSelectRegion('western')">Western Asia</li>
    </ul>
    <br />
    <div class="asia-subregion-container">
      <eastern-asia-list :countries="countries" :countryFrom="countryFrom"></eastern-asia-list>
      <southern-asia-list :countries="countries" :countryFrom="countryFrom"></southern-asia-list>
      <south-eastern-asia-list :countries="countries" :countryFrom="countryFrom"></south-eastern-asia-list>
      <central-asia-list :countries="countries" :countryFrom="countryFrom"></central-asia-list>
      <western-asia-list :countries="countries" :countryFrom="countryFrom"></western-asia-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import EasternAsiaList from "./AsiaComponents/EasternAsiaList";
import SouthernAsiaList from "./AsiaComponents/SouthernAsiaList";
import SouthEasternAsiaList from "./AsiaComponents/SouthEasternAsiaList";
import CentralAsiaList from "./AsiaComponents/CentralAsiaList";
import WesternAsiaList from "./AsiaComponents/WesternAsiaList";

export default {
  name: "asia-subregion-list",
  data() {
    return {
      countryFrom: "",
      notRegion: "",
      selectedCountry: null
    };
  },
  props: ["countries"],
  components: {
    "eastern-asia-list": EasternAsiaList,
    "south-eastern-asia-list": SouthEasternAsiaList,
    "central-asia-list": CentralAsiaList,
    "southern-asia-list": SouthernAsiaList,
    "western-asia-list": WesternAsiaList
  },
  methods: {
    handleSelectRegion(name) {
      this.countryFrom = name;
      this.nullSelected();
      this.notTheRegion();
    },
    nullSelected() {
      eventBus.$emit("null-selected", this.selectedCountry);
    },
    notTheRegion() {
      eventBus.$emit("not-region-europe", this.notRegion);
      eventBus.$emit("not-region-africa", this.notRegion);
      eventBus.$emit("not-region-oceania", this.notRegion);
      eventBus.$emit("not-region-america", this.notRegion);
    }
  },
  computed: {},
  mounted() {
    eventBus.$on("not-region-asia", notRegion => {
      this.countryFrom = "";
    });
  }
};
</script>

<style>
</style>