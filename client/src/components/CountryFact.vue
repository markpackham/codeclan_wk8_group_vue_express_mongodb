<template>
  <div class="country-fact">
    <h3>Country Facts</h3>
    <p class="getFactLink"><a href="#" v-on:click="handleClick">Get a fact &#127891;</a><br></p>
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
  props: ["facts"],
  methods: {
    handleClick() {
      let randomNum = Math.floor((Math.random() * this.facts.length) + 1);
      this.aFact = this.facts[randomNum].fact;
    }
  }
};
</script>

<style>
</style>