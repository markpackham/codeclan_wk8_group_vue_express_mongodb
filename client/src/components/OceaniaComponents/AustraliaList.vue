<template>
  <div class="australia-list" v-if="countryFrom === 'australia'">
    <h2>Australia and New Zealand</h2>
    <ul>
      <list-component v-for="(country, index) in filterCountry" :country="country" :key="index"></list-component>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ListComponent from "@/helpers/ListComponent.vue";
export default {
  name: "australia-list",
  props: ["countries", "country", 'countryFrom'],
  components: {
    "list-component": ListComponent
  },
  methods: {},
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Australia and New Zealand";
      });
    }
  }
};
</script>

<style>
</style>