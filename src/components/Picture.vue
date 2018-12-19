<template>
  <div class="Picture">
    <label for="child.data.id">{{data.title}}</label><br/>
    <img v-bind:src="data.url" v-bind:alt="data.title" v-bind:id="data.id"/>
  </div>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>