<template>
  <div class="Title">
    <a :href="'https://www.reddit.com/' + sub">
        <h3 v-html="`${title} (${sub})`"></h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title', 'sub'] 
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
div {
    padding-bottom: 5px;
}
</style>