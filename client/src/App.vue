<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-container">
      <div v-if="!countries.length">
        <h3>Loading...</h3>
      </div>
      <europe-subregion-list :countries="countries"></europe-subregion-list>
      <africa-subregion-list :countries="countries"></africa-subregion-list>
      <asia-subregion-list :countries="countries"></asia-subregion-list>
      <america-subregion-list :countries="countries"></america-subregion-list>
      <oceania-subregion-list :countries="countries"></oceania-subregion-list>
      <country-detail :country="selectedCountry"></country-detail>
    </div>
    <country-fact :facts="facts"></country-fact>
    <question-holder :questions="questions" :answer="answer"></question-holder>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import CountryService from "@/services/CountryService";
import MainHeader from "./components/layouts/MainHeader";
import MainFooter from "./components/layouts/MainFooter";
import EuropeSubRegionList from "./components/EuropeSubRegionList";
import AfricaSubRegionList from "./components/AfricaSubRegionList";
import AsiaSubRegionList from "./components/AsiaSubRegionList";
import AmericaSubRegionList from "./components/AmericaSubRegionList";
import OceaniaSubRegionList from "./components/OceaniaSubRegionList";
import CountryDetail from "./components/CountryDetail";
import CountryFact from "./components/CountryFact";
import QuestionHolder from "./components/QuestionHolder";

export default {
  name: "app",
  data() {
    return {
      countries: [],
      selectedCountry: null,
      selectedSubregion: null,
      countryFrom: "",
      facts: [],
      questions: [],
      token: null,
      answer: ""
    };
  },
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter,
    "europe-subregion-list": EuropeSubRegionList,
    "africa-subregion-list": AfricaSubRegionList,
    "asia-subregion-list": AsiaSubRegionList,
    "america-subregion-list": AmericaSubRegionList,
    "oceania-subregion-list": OceaniaSubRegionList,
    "country-detail": CountryDetail,
    "country-fact": CountryFact,
    "question-holder": QuestionHolder
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
    getQuestions: function() {
      fetch(
        "https://opentdb.com/api.php?amount=50&category=22&difficulty=medium&type=multiple&encode=url3986"
      )
        .then(res => res.json())
        .then(questions => {
          this.questions = questions.results;
        })
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
    },

    handleSelectCountry(name) {
      this.countryFrom = name;
      this.selectedCountry = null;
    },

    fetchFacts() {
      CountryService.getFacts().then(facts => (this.facts = facts));
    }
  },
  mounted() {
    // INDEX
    this.getCountries();
    this.fetchFacts();
    this.getQuestions();

    eventBus.$on("country-selected", country => {
      this.selectedCountry = country;
    });

    eventBus.$on("null-selected", country => {
      this.selectedCountry = null;
    });

    // CREATE
    eventBus.$on("submit-fact", facts => {
      CountryService.addFact(facts).then(factWithId =>
        this.facts.push(factWithId)
      );
    });

    // DELETE ONE
    eventBus.$on("delete-fact", id => {
      CountryService.deleteFact(id);
      const index = this.facts.findIndex(fact => fact._id === id);
      this.facts.splice(index, 1);
    });

    eventBus.$on('answer-selected', response => {
      this.answer = response
    });

    // DELETE ALL
    eventBus.$on("delete-all", payload => {
      (this.facts = []), CountryService.deleteAll();
    });
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
