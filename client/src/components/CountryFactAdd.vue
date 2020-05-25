<template>
  <div class="country-fact-form">
    <form v-on:submit.prevent="onSubmit">
      <input id="add-fact" type="text" size="500" placeholder="Please add a short fact about a country." v-model="myFact" required />
      <button>Add a country fact</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "country-fact-add",
  data() {
    return {
      myFact: ""
    };
  },
  methods: {
    onSubmit() {
      eventBus.$emit("submit-fact", this.$data);
      this.myFact = "";
    }
  }
};
</script>

<style>
</style>