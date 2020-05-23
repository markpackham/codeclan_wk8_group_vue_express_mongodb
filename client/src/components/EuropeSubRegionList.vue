<template>
  <div class="eu-subregions">
        <h2>European Subregions</h2>
        <p>Please select a European sub region to learn more about its countries.</p>
        <br />
        <ul>
          <li v-on:click="handleSelectRegion('eastern')">Eastern Europe</li>
          <li v-on:click="handleSelectRegion('northern')">Northern Europe</li>
          <li v-on:click="handleSelectRegion('southern')">Southern Europe</li>
          <li v-on:click="handleSelectRegion('western')">Western Europe</li>
        </ul>
          <eastern-europe-list :countries="countries" :countryFrom="countryFrom"></eastern-europe-list>
          <southern-europe-list :countries="countries" :countryFrom="countryFrom"></southern-europe-list>
          <western-europe-list :countries="countries" :countryFrom="countryFrom"></western-europe-list>
          <northern-europe-list :countries="countries" :countryFrom="countryFrom"></northern-europe-list>
      </div>
</template>

<script>
import { eventBus } from "@/main.js";
import EasternEuropeList from "./EasternEuropeList";
import SouthernEuropeList from "./SouthernEuropeList";
import WesternEuropeList from "./WesternEuropeList";
import NorthernEuropeList from "./NorthernEuropeList";

export default {
  name: "europe-subregion-list",
  data() {
    return {
      selectedCountry: null,
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
        this.selectedCountry = null;
    }

  },
  computed: {},
  mounted() {}
};
</script>

<style>
</style>