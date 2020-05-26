<template>
  <div class="america-subregion-list">
    <h2>American Subregions &#127758;</h2>
    <ul>
      <li v-on:click="handleSelectRegion('caribbean')">Caribbean</li>
      <li v-on:click="handleSelectRegion('central')">Central America</li>
      <li v-on:click="handleSelectRegion('northern')">Northern America</li>
      <li v-on:click="handleSelectRegion('south')">South America</li>
    </ul>
    <br />
    <div class="america-subregion-container">
      <caribbean-list :countries="countries" :countryFrom="countryFrom"></caribbean-list>
      <central-america-list :countries="countries" :countryFrom="countryFrom"></central-america-list>
      <northern-america-list :countries="countries" :countryFrom="countryFrom"></northern-america-list>
      <south-america-list :countries="countries" :countryFrom="countryFrom"></south-america-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import CaribbeanList from "./AmericaComponents/CaribbeanList";
import CentralAmericaList from "./AmericaComponents/CentralAmericaList";
import NorthernAmericaList from "./AmericaComponents/NorthernAmericaList";
import SouthAmericaList from "./AmericaComponents/SouthAmericaList";

export default {
  name: "america-subregion-list",
  data() {
    return {
      countryFrom: "",
      notRegion: "",
      selectedCountry: null
    };
  },
  props: ["countries"],
  components: {
    "caribbean-list": CaribbeanList,
    "central-america-list": CentralAmericaList,
    "northern-america-list": NorthernAmericaList,
    "south-america-list": SouthAmericaList
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
      eventBus.$emit("not-region-asia", this.notRegion);
      eventBus.$emit("not-region-europe", this.notRegion);
      eventBus.$emit("not-region-oceania", this.notRegion);
    }
  },
  computed: {},
  mounted() {
    eventBus.$on("not-region-america", notRegion => {
      this.countryFrom = "";
    });
  }
};
</script>

<style>
</style>