<template>
  <div class="eastern-europe-list" v-if="countryFrom === 'eastern'">
    <h2>Eastern Europe</h2>
    <ul>
      <list-component v-for="(country, index) in filterCountry" :country="country" :key="index"></list-component>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ListComponent from "@/helpers/ListComponent.vue";
export default {
  name: "eastern-europe-list",
  props: ["countries", "country", "countryFrom"],
  components: {
    "list-component": ListComponent
  },
  methods: {},
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Eastern Europe";
      });
    }
  }
};
</script>

<style>
</style>