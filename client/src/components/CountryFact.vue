<template>
  <div class="country-fact">
    <h3>Country Facts</h3>
    <p class="getFactLink">
      <a v-if="this.facts.length > 0" href="#" v-on:click="handleClick">Get a fact &#127891;</a> &nbsp; &nbsp;
      <a v-if="aFactId && this.facts.length > 0" href="#" class="btn-danger" v-on:click="handleDelete">Delete the fact &#128163;</a>
      <br />
    </p>
    <p id="fact-area">Country Fact: {{aFact}}</p>
    <country-fact-add></country-fact-add>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import CountryFactAdd from "./CountryFactAdd";
export default {
  name: "country-fact",
  data() {
    return {
      aFact: "",
      aFactId: "",
      myFact: ""
    };
  },
  components: {
    "country-fact-add": CountryFactAdd
  },
  props: ["facts"],
  methods: {
    handleClick() {
      let randomNum = Math.floor(Math.random() * this.facts.length + 1);
      let randomFact = this.facts[randomNum];
      this.aFact = randomFact.fact;
      this.aFactId = randomFact._id;
    },
    handleDelete() {
      eventBus.$emit("delete-fact", this.aFactId);
      this.aFact = "";
      this.aFactId = "";
    }
  }
};
</script>

<style>
@import "../assets/styles/country-fact.css";
</style>