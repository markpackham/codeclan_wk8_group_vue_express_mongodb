<template>
  <div class="eastern-europe-list">
      <h2>Eastern Europe</h2>
      <ul v-for="(country, index) in filterCountry"  :key="index">
          <li v-on:click="handleClick">
              {{country.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: "eastern-europe-list",
  props: ["countries", "country"],
  methods: {
    handleClick(){
      eventBus.$emit('country-selected', this.country)
    }
  },
      computed: {
        filterCountry(){
            return this.countries.filter(country => {
                return country.subregion === "Eastern Europe";
            })
        }
    }
}
</script>

<style>

</style>