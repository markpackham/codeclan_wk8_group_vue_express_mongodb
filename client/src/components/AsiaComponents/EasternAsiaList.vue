<template>
  <div class="eastern-asia-list" v-if="countryFrom === 'eastern'">
    <h2>Eastern Asia</h2>
    <ul>
      <list-component v-for="(country, index) in filterCountry" :country="country" :key="index"></list-component>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ListComponent from "@/helpers/ListComponent.vue";
export default {
  name: "eastern-asia-list",
  props: ["countries", "country", "countryFrom"],
  components: {
    "list-component": ListComponent
  },
  methods: {},
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Eastern Asia";
      });
    }
  }
};
</script>

<style>
</style>