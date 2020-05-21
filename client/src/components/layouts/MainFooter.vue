<template>
  <div>
    <div class="main-footer">Copyright {{getTheYear()}}</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "main-footer",
  data() {
    return {};
  },
  methods: {
    getTheYear: function() {
      return new Date().getFullYear();
    }
  },
  mounted() {
    this.getTheYear();
  }
};
</script>

<style>
</style>