<template>
  <div class="country-fact">
    <h3>Country Facts</h3>
    <p><a href="#" v-on:click="handleClick">Get a fact</a></p>
    <p>{{aFact}}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      aFact: ""
    };
  },
  props: ["facts", "Timmy"],
  methods: {
    handleClick() {
      let randomNum = Math.floor(Math.random(this.facts.length) * 10);
      this.aFact = this.facts[randomNum].fact;
    }
  }
};
</script>

<style>
</style>