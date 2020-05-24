<template>
  <div class="america-subregion-list">
    <h2>American Subregions</h2>
    <ul>
      <li v-on:click="handleSelectRegion('caribbean')">Caribbean</li>
      <li v-on:click="handleSelectRegion('central')">Central America</li>
      <li v-on:click="handleSelectRegion('south')">South America</li>
      <li v-on:click="handleSelectRegion('northern')">Northern America</li>
    </ul>
    <br />
    <div class="america-subregion-container">
      <caribbean-list :countries="countries" :countryFrom="countryFrom"></caribbean-list>
      <south-america-list :countries="countries" :countryFrom="countryFrom"></south-america-list>
      <central-america-list :countries="countries" :countryFrom="countryFrom"></central-america-list>
      <northern-america-list :countries="countries" :countryFrom="countryFrom"></northern-america-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import CaribbeanList from "./AmericaComponents/CaribbeanList";
import SouthAmericaList from "./AmericaComponents/SouthAmericaList";
import CentralAmericaList from "./AmericaComponents/CentralAmericaList";
import NorthernAmericaList from "./AmericaComponents/NorthernAmericaList";

export default {
  name: "america-subregion-list",
  data() {
    return {
      countryFrom: "",
      selectedCountry: null
    };
  },
  props: ["countries"],
  components: {
    "caribbean-list": CaribbeanList,
    "south-america-list": SouthAmericaList,
    "central-america-list": CentralAmericaList,
    "northern-america-list": NorthernAmericaList
  },
  methods: {
    handleSelectRegion(name) {
      this.countryFrom = name;
      this.nullSelected();
    },
    nullSelected() {
      eventBus.$emit("null-selected", this.selectedCountry);
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