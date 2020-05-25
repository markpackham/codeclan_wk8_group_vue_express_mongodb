<template>
  <div class="country-fact">
    <h3>Country Facts</h3>
    <p class="getFactLink">
      <a href="#" v-on:click="handleClick">Get a fact &#127891;</a>
      <br />
    </p>
    <p>{{aFact}}</p>
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
    }
  }
};
</script>

<style>
@import "../assets/styles/country-fact.css";
</style>