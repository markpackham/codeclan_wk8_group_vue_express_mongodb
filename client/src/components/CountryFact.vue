<template>
  <div class="country-fact">
    <h3>Country Facts</h3>
    <p class="getFactLink">
      <a href="#" v-on:click="handleClick">Get a fact &#127891;</a>
      <br />
    </p>
    <p>{{aFact}}</p>
    <form v-on:submit.prevent="onSubmit">
      <label for="add-fact"></label>
      <input id="add-fact" type="text" v-model="fact" required />
      <button>Add Fact</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "app",
  data() {
    return {
      aFact: "",
      fact: ""
    };
  },
  props: ["facts"],
  methods: {
    handleClick() {
      let randomNum = Math.floor(Math.random(this.facts.length) * 10);
      this.aFact = this.facts[randomNum].fact;
    },
    onSubmit() {
      eventBus.$emit("submit-fact", this.fact);
      this.fact = "";
    }
  }
};
</script>

<style>
</style>