<template>
  <div class="country-detail" v-if="country">
    <h3>{{country.name}} aka {{country.nativeName}}</h3>
    <p>Sub Region: <strong>{{country.subregion}}</strong></p>
    <p>Population: {{country.population}} <br> Area: {{country.area}} <br> Population Density: {{ (country.population / country.area).toFixed(2) }}</p>
    <p>Capital: {{country.capital}}</p>
    <img class="flag" name="flag" :src="country.flag" />
  </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ["country"]
};
</script>

<style>
</style>