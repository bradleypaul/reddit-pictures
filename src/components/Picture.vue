<template>
  <div class="Picture">
    <a :href="'https://www.reddit.com/' + sub">
    <h3 v-html="`${title} (${sub})`"></h3>
    </a>
    <br/>
      <a :href="`//www.reddit.com${permalink}`">
        <img :src="url"
        :alt="title" 
        :id="id"
        class="img-fluid"/>
      </a>
  </div>
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