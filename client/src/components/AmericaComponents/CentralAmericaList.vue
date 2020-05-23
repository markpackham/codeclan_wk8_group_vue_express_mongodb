<template>
  <div class="central-america-list" v-if="countryFrom === 'central'">
    <h2>Central America</h2>
    <ul>
      <list-component v-for="(country, index) in filterCountry" :country="country" :key="index"></list-component>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ListComponent from "@/helpers/ListComponent.vue";
export default {
  name: "central-america-list",
  props: ["countries", "country", "countryFrom"],
  components: {
    "list-component": ListComponent
  },
  methods: {},
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Central America";
      });
    }
  }
};
</script>

<style>
</style>