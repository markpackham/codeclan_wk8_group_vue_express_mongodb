<template>
  <div class="country-detail modal" v-if="country">
    <h3>{{country.name}} aka {{country.nativeName}}</h3>
    <p>Population: {{country.population}} and Area: {{country.area}}</p>
    <p>Capital: {{country.capital}}</p>
    <img class="flag" name="flag" :src="country.flag" />
    <h4>Languages:</h4>
    <ul>
      <li v-for="(lang, index) in country.languages" :key="index">{{lang.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ["country"],
  data() {
    return {
      
    }
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style>
</style>