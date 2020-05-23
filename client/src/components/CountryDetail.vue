<template>
  <div class="country-detail" v-if="country">
    <h3>{{country.name}} aka {{country.nativeName}}</h3>
    <p>Population: {{country.population}} and Area: {{country.area}}</p>
    <p>Capital: {{country.capital}}</p>
    <img class="flag" name="flag" :src="country.flag" />
      </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ["country"],
}
</script>

<style>

</style>