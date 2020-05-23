<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-container">
      <europe-subregion-list></europe-subregion-list>
      <country-detail></country-detail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import CountryService from "./services/CountryService";
import MainHeader from "./components/layouts/MainHeader";
import MainFooter from "./components/layouts/MainFooter";
import CountryDetail from "./components/CountryDetail";
import EuropeSubRegionList from "./components/EuropeSubRegionList.vue";
export default {
  name: "app",
  data() {},
  methods: {
    handleError: function(error) {
      switch (error) {
        case "401":
          console.log("Page access unauthorized");
          break;
        case "403":
          console.log("Page access forbidden");
          break;
        case "404":
          console.log("Page not found", error.status);
          break;
        case "500":
          console.log("Server down");
          break;
        default:
          console.log(error.status);
      }
    }
  },
  mounted() {},
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter,
    "country-detail": CountryDetail,
    "europe-subregion-list": EuropeSubRegionList
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
