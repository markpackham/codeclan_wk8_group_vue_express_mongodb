<template>
  <div class="asia-subregion-list">
    <h2>Asian Subregions</h2>
    <p>Please select a sub region to learn more about its countries.</p>
    <br />
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
import EasternAsiaList from "./EasternAsiaList";
import SouthernAsiaList from "./SouthernAsiaList";
import SouthEasternAsiaList from "./SouthEasternAsiaList";
import CentralAsiaList from "./CentralAsiaList";
import WesternAsiaList from "./WesternAsiaList";

export default {
  name: "asia-subregion-list",
  data() {
    return {
      countryFrom: ""
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
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
</style>