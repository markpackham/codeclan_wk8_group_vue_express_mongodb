<template>
  <div class="africa-subregion-list">
    <h2>African Subregions</h2>
    <p>Please select a sub region to learn more about its countries.</p>
    <br />
    <ul>
      <li v-on:click="handleSelectRegion('eastern')">Eastern Africa</li>
      <li v-on:click="handleSelectRegion('northern')">Northern Africa</li>
      <li v-on:click="handleSelectRegion('southern')">Southern Africa</li>
      <li v-on:click="handleSelectRegion('middle')">Middle Africa</li>
      <li v-on:click="handleSelectRegion('western')">Western Africa</li>
    </ul>
    <br />
    <div class="africa-subregion-container">
      <eastern-africa-list :countries="countries" :countryFrom="countryFrom"></eastern-africa-list>
      <southern-africa-list :countries="countries" :countryFrom="countryFrom"></southern-africa-list>
      <middle-africa-list :countries="countries" :countryFrom="countryFrom"></middle-africa-list>
      <northern-africa-list :countries="countries" :countryFrom="countryFrom"></northern-africa-list>
      <western-africa-list :countries="countries" :countryFrom="countryFrom"></western-africa-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import EasternAfricaList from "./AfricaComponents/EasternAfricaList";
import SouthernAfricaList from "./AfricaComponents/SouthernAfricaList";
import MiddleAfricaList from "./AfricaComponents/MiddleAfricaList";
import NorthernAfricaList from "./AfricaComponents/NorthernAfricaList";
import WesternAfricaList from "./AfricaComponents/WesternAfricaList";

export default {
  name: "africa-subregion-list",
  data() {
    return {
      countryFrom: "",
      selectedCountry: null
    };
  },
  props: ["countries"],
  components: {
    "eastern-africa-list": EasternAfricaList,
    "middle-africa-list": MiddleAfricaList,
    "northern-africa-list": NorthernAfricaList,
    "southern-africa-list": SouthernAfricaList,
    "western-africa-list": WesternAfricaList
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
  mounted() {}
};
</script>

<style>
</style>