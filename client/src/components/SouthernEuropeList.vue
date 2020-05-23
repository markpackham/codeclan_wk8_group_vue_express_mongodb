<template>
  <div class="southern-europe-list">
    <h2>Southern Europe</h2>
    <ul v-for="(country, index) in filterCountry" :key="index" :country="country.subregion">
      <li v-on:click="handleClick">{{country.name}}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  name: "southern-europe-list",
  props: ["countries"],
  methods: {
    handleClick() {
      eventBus.$emit("country-selected", this.country);
    }
  },
  data() {
    return {};
  },
  computed: {
    filterCountry() {
      return this.countries.filter(country => {
        return country.subregion === "Southern Europe";
      });
    }
  }
};
</script>

<style>
</style>