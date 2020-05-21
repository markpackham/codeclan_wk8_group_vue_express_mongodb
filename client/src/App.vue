<template>
  <div>
    <main-header></main-header>
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
</style>