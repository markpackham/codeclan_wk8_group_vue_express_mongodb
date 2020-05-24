<template>
  <div class="oceania-subregion-list">
    <h2>Oceanian Subregions</h2>
    <ul>
      <li v-on:click="handleSelectRegion('australia')">Australia and New Zealand</li>
      <li v-on:click="handleSelectRegion('melanesia')">Melanesia</li>
      <li v-on:click="handleSelectRegion('micronesia')">Micronesia</li>
      <li v-on:click="handleSelectRegion('polynesia')">Polynesia</li>
    </ul>
    <br />
    <div class="oceania-subregion-container">
      <australia-list :countries="countries" :countryFrom="countryFrom"></australia-list>
      <melanesia-list :countries="countries" :countryFrom="countryFrom"></melanesia-list>
      <micronesia-list :countries="countries" :countryFrom="countryFrom"></micronesia-list>
      <polynesia-list :countries="countries" :countryFrom="countryFrom"></polynesia-list>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import AustraliaList from "./OceaniaComponents/AustraliaList";
import MelanesiaList from "./OceaniaComponents/MelanesiaList";
import MicronesiaList from "./OceaniaComponents/MicronesiaList";
import PolynesiaList from "./OceaniaComponents/PolynesiaList";

export default {
  name: "oceania-subregion-list",
  data() {
    return {
      countryFrom: "",
      selectedCountry: null
    };
  },
  props: ["countries"],
  components: {
    "australia-list": AustraliaList,
    "melanesia-list": MelanesiaList,
    "micronesia-list": MicronesiaList,
    "polynesia-list": PolynesiaList
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
    eventBus.$on("not-region-oceania", notRegion =>{
      this.countryFrom = "";
    })
  }
};
</script>

<style>
</style>