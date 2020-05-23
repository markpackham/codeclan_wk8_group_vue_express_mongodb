<template>
  <div class="northern-europe-list">
      <h2>Northern Europe</h2>
      <ul v-for="(country, index) in filterCountry"  :key="index"  :country='country.subregion'>
          <li v-on:click="handleClick">
              {{country.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: "northern-europe-list",
  props: ["countries"],
  methods: {
      handleClick(){
        eventBus.$emit('country-selected', this.country)
    }
  },
  data() {
    return{

    }

  },
      computed: {
        filterCountry(){
            return this.countries.filter(country => {
                return country.subregion === "Northern Europe";
            })
        }
    }
}
</script>

<style>

</style>