<template>
  <div class="Picture">
    <h3 v-html="title"></h3><br/>
      <a :href="'https://www.reddit.com/' + id">
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
  props: ['url', 'title', 'id'] 
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