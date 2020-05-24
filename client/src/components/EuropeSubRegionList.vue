<template>
  <div class="europe-subregion-list">
    <h2>European Subregions</h2>
    <ul class="europe-subregion-list-text">
      <li v-on:click="handleSelectRegion('eastern')">Eastern Europe</li>
      <li v-on:click="handleSelectRegion('northern')">Northern Europe</li>
      <li v-on:click="handleSelectRegion('southern')">Southern Europe</li>
      <li v-on:click="handleSelectRegion('western')">Western Europe</li>
    </ul>
    <br />
    <div class="europe-subregion-container">
      <eastern-europe-list :countries="countries" :countryFrom="countryFrom"></eastern-europe-list>
      <southern-europe-list :countries="countries" :countryFrom="countryFrom"></southern-europe-list>
      <western-europe-list :countries="countries" :countryFrom="countryFrom"></western-europe-list>
      <northern-europe-list :countries="countries" :countryFrom="countryFrom"></northern-europe-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import EasternEuropeList from "./EuropeComponents/EasternEuropeList";
import SouthernEuropeList from "./EuropeComponents/SouthernEuropeList";
import WesternEuropeList from "./EuropeComponents/WesternEuropeList";
import NorthernEuropeList from "./EuropeComponents/NorthernEuropeList";

export default {
  name: "europe-subregion-list",
  data() {
    return {
      countryFrom: "",
      notRegion: "",
      selectedCountry: null
    };
  },
  props: ["countries"],
  components: {
    "eastern-europe-list": EasternEuropeList,
    "western-europe-list": WesternEuropeList,
    "northern-europe-list": NorthernEuropeList,
    "southern-europe-list": SouthernEuropeList
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
      eventBus.$emit("not-region-oceania", this.notRegion);
      eventBus.$emit("not-region-asia", this.notRegion);
      eventBus.$emit("not-region-africa", this.notRegion);
      eventBus.$emit("not-region-america", this.notRegion);
    }
  },
  computed: {},
  mounted() {
    eventBus.$on("not-region-europe", notRegion => {
      this.countryFrom = "";
    });
  }
};
</script>

<style>
</style>