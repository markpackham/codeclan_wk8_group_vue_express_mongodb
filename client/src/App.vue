<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-container"></div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/layouts/MainHeader";
import MainFooter from "./components/layouts/MainFooter";
export default {
  name: "app",
  data() {},
  methods: {},
  mounted() {},
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>