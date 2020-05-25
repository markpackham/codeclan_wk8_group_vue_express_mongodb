<template>
  <div class="country-fact">
    <h3>Country Facts</h3>
    <button v-on:click="handleClick">Get a fact</button>
    <!-- <ul v-for="(fact, index) in facts" :key="index">
      <li>{{fact.fact}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["facts"],
  methods:{
      handleClick() {
          let randomNum = Math.floor(Math.random(this.facts.length) * 10);
          console.log(randomNum)
          console.log("Clicked",this.facts[randomNum].fact)
      }
  }
};
</script>

<style>
</style>