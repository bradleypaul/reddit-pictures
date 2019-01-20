<template>
  <span class="Picture">
    <br/>
      <img :src="url"
      :alt="title" 
      :id="id"
      class="img-fluid"/>
  </span>
</template>

<script>
export default {
  name: 'Picture',
  props: ['url', 'title', 'id', 'sub', 'permalink'] 
}
</script>

<style scoped>
h3 {
  display: inline;
  font-size: 25px;
  font-weight: 500;
  line-height: 29px;
  padding-right: 5px;
}
</style>