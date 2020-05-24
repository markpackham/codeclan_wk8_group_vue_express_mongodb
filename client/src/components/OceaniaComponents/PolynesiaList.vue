<template>
  <div class="polynesia-list" v-if="countryFrom === 'polynesia'">
    <h2>Polynesia</h2>
    <ul>
      <list-component v-for="(country, index) in filterCountry" :country="country" :key="index"></list-component>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ListComponent from "@/helpers/ListComponent.vue";
export default {
  name: "polynesia-list",
  props: ["countries", "country", 'countryFrom'],
  components: {
    "list-component": ListComponent
  },
  methods: {},
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Polynesia";
      });
    }
  }
};
</script>

<style>
</style>