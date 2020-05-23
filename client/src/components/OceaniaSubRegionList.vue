<template>
  <div class="oceania-subregion-list">
    <h2>Oceanian Subregions</h2>
    <p>Please select a sub region to learn more about its countries.</p>
    <br />
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
import AustraliaList from "./AustraliaList";
import MelanesiaList from "./MelanesiaList";
import MicronesiaList from "./MicronesiaList";
import PolynesiaList from "./PolynesiaList";

export default {
  name: "oceania-subregion-list",
  data() {
    return {
      countryFrom: ""
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
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
</style>