<template>
  <div class="europe-subregion-list">
    <h2>European Subregions &#127757;</h2>
    <ul class="europe-subregion-list-text">
      <li v-on:click="handleSelectRegion('eastern')">Eastern Europe</li>
      <li v-on:click="handleSelectRegion('northern')">Northern Europe</li>
      <li v-on:click="handleSelectRegion('southern')">Southern Europe</li>
      <li v-on:click="handleSelectRegion('western')">Western Europe</li>
    </ul>
    <br />
    <div class="europe-subregion-container">
      <eastern-europe-list :countries="countries" :countryFrom="countryFrom"></eastern-europe-list>
      <northern-europe-list :countries="countries" :countryFrom="countryFrom"></northern-europe-list>
      <southern-europe-list :countries="countries" :countryFrom="countryFrom"></southern-europe-list>
      <western-europe-list :countries="countries" :countryFrom="countryFrom"></western-europe-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import EasternEuropeList from "./EuropeComponents/EasternEuropeList";
import NorthernEuropeList from "./EuropeComponents/NorthernEuropeList";
import SouthernEuropeList from "./EuropeComponents/SouthernEuropeList";
import WesternEuropeList from "./EuropeComponents/WesternEuropeList";

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
    "northern-europe-list": NorthernEuropeList,
    "southern-europe-list": SouthernEuropeList,
    "western-europe-list": WesternEuropeList
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
      eventBus.$emit("not-region-africa", this.notRegion);
      eventBus.$emit("not-region-america", this.notRegion);
      eventBus.$emit("not-region-asia", this.notRegion);
      eventBus.$emit("not-region-oceania", this.notRegion);
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