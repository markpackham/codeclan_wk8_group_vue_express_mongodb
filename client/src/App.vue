<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-container">
      <europe-subregion-list :countries="countries"></europe-subregion-list>
      <country-detail :country="selectedCountry"></country-detail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import CountryService from "@/services/CountryService";
import MainHeader from "./components/layouts/MainHeader";
import MainFooter from "./components/layouts/MainFooter";
import EuropeSubRegionList from "./components/EuropeSubRegionList";
import CountryDetail from "./components/CountryDetail";
export default {
  name: "app",
  data() {
    return {
      countries: [],
      selectedCountry: null
    };
  },
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter,
    "europe-subregion-list": EuropeSubRegionList,
    "country-detail": CountryDetail
  },
  methods: {
    getCountries: function() {
      fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(countries => (this.countries = countries))
        .catch(error => {
          handleError(error);
        });
    },
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
    this.getCountries();

    eventBus.$on("country-selected", country => {
      this.selectedCountry = country;
    });
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
