<template>
  <div class="europe-subregion-list">
    <h2>European Subregions</h2>
    <p>Please select a European sub region to learn more about its countries.</p>
    <ul>
      <li v-on:click="handleClick">
        Northern Europe
      </li>
      <li v-on:click="handleClick">
        Southern Europe
      </li>
      <li v-on:click="handleClick">
        Eastern Europe
      </li>
      <li v-on:click="handleClick">
        Western Europe
      </li>
      <!-- <eastern-europe-list :countries="countries"></eastern-europe-list>
      <southern-europe-list :countries="countries"></southern-europe-list>
      <western-europe-list :countries="countries"></western-europe-list>
      <northern-europe-list :countries="countries"></northern-europe-list> -->
    </ul>
  </div>
</template>

<script>
import EasternEuropeList from "./EasternEuropeList";
import SouthernEuropeList from "./SouthernEuropeList";
import WesternEuropeList from "./WesternEuropeList";
import NorthernEuropeList from "./NorthernEuropeList";
import { eventBus } from "@/main.js";

export default {
  name: "europe-subregion-list",
  data() {
    return {};
  },
  props: ['countries'],
  components:{
    "eastern-europe-list": EasternEuropeList,
    "western-europe-list": WesternEuropeList,
    "northern-europe-list": NorthernEuropeList,
    "southern-europe-list": SouthernEuropeList,
  },
  methods: {
    handleClick(){
      eventBus.$emit('subregion-selected', this.subregion)
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
</style>