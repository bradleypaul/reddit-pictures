<template>
  <span class="Title">
    <h3>
      <a :href="`${baseUrl}${permalink}`">{{title}}</a><br />
      &nbsp;(<a :href="`${baseUrl}/${sub}`">{{sub}}</a> |
      <a :href="`${baseUrl}/u/${author}`">u/{{author}}</a>)
    </h3>
  </span>
</template>

<script>
export default {
  name: 'Title',
  props: ['title', 'sub', 'permalink', 'author'],
  data: function () {
    return {
      baseUrl: '//www.reddit.com'
    }
  } 
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