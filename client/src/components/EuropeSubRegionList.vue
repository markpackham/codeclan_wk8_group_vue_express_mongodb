<template>
  <div class="europe-subregion-list"></div>
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
  props: ["countries"],
  components: {
    "eastern-europe-list": EasternEuropeList,
    "western-europe-list": WesternEuropeList,
    "northern-europe-list": NorthernEuropeList,
    "southern-europe-list": SouthernEuropeList
  },
  methods: {
    handleClick() {
      eventBus.$emit("subregion-selected", this.subregion);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
</style>