<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-container">
        <eastern-europe-list :countries="countries"></eastern-europe-list>
        <southern-europe-list :countries="countries"></southern-europe-list>
        <western-europe-list :countries="countries"></western-europe-list>
        <northern-europe-list :countries="countries"></northern-europe-list>
      <europe-subregion-list></europe-subregion-list>
      <country-detail :country="selectedCountry"></country-detail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import CountryService from "./services/CountryService";
import MainHeader from "./components/layouts/MainHeader";
import MainFooter from "./components/layouts/MainFooter";
import EasternEuropeList from './components/EasternEuropeList';
import SouthernEuropeList from './components/SouthernEuropeList';
import WesternEuropeList from './components/WesternEuropeList';
import NorthernEuropeList from './components/NorthernEuropeList';
import EuropeSubRegionList from "./components/EuropeSubRegionList.vue";
import CountryDetail from "./components/CountryDetail";
export default {
  name: "app",
  data() {
    return {
      countries: [],
      selectedCountry: null 
    }
  },
  methods: {
    handleError: function(error) {
      switch (error) {
        case "401":
          console.log("Page access unauthorized", error.status);
          break;
        case "403":
          console.log("Page access forbidden", error.status);
          break;
        case "404":
          console.log("Page not found", error.status);
          break;
        case "500":
          console.log("Server down", error.status);
          break;
        default:
          console.log(error.status);
      }
    }
  },
  mounted() { 
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => this.countries = countries)
    // .catch(this.handleError())

    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country
    })
  },
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter,
    "eastern-europe-list": EasternEuropeList,
    "western-europe-list": WesternEuropeList,
    "northern-europe-list": NorthernEuropeList,
    "southern-europe-list": SouthernEuropeList,
    "europe-subregion-list": EuropeSubRegionList,
    "country-detail": CountryDetail,
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
