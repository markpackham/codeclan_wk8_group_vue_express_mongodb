<template lang="html">
<div class="list-component">
  <li v-on:click="handleClick">{{country.name}}</li>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: 'list-component',
  props: ['country'],
  methods: {
    handleClick(){
      eventBus.$emit('country-selected', this.country)
    }
  }
}
</script>

<style>

</style>