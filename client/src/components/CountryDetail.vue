<template>
  <div class="country-detail" v-if="country">
    <h3>{{country.name}}</h3>
    <p>Alt Name: {{country.nativeName}}</p>
    <p>Sub Region: <strong>{{country.subregion}}</strong></p>
    <p>Pop: {{country.population}} <br> Area: {{country.area}} <br> Pop Density: {{ (country.population / country.area).toFixed(2) }}</p>
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