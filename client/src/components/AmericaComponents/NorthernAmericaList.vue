<template>
  <div class="northern-america-list" v-if="countryFrom === 'northern'">
    <h2>Northern America</h2>
    <ul>
      <list-component v-for="(country, index) in filterCountry" :country="country" :key="index"></list-component>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ListComponent from "@/helpers/ListComponent.vue";
export default {
  name: "northern-america-list",
  props: ["countries", "country", 'countryFrom'],
  components: {
    "list-component": ListComponent
  },
  methods: {},
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Northern America";
      });
    }
  }
};
</script>

<style>
</style>