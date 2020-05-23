<template>
  <div class="europe-subregion-list">
    <h2>European Subregions</h2>
    <p>Please select a sub region to learn more about its countries.</p>
    <br />
    <ul>
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
import EasternEuropeList from "./EuropeComponents/EasternEuropeList";
import SouthernEuropeList from "./EuropeComponents/SouthernEuropeList";
import WesternEuropeList from "./EuropeComponents/WesternEuropeList";
import NorthernEuropeList from "./EuropeComponents/NorthernEuropeList";

export default {
  name: "europe-subregion-list",
  data() {
    return {
      countryFrom: ""
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
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
</style>