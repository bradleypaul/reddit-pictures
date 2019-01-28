<template>
  <span class="Title">
    <a :href="`${baseUrl}${permalink}`">
      <h3 v-html="title"></h3>
    </a>
    <br />
    <h3>
      (<a :href="`${baseUrl}/${sub}`">{{sub}}
        </a> |
      <a :href="`${baseUrl}/u/${author}`">
      u/{{author}}</a>)
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