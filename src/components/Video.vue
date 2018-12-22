<template>
  <div class="Video">
      <!-- <a :href="'https://www.reddit.com/' + id"> -->
        <video controls loop  autoplay :src="url"></video>
      <!-- </a> -->
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: ['url', 'type'] 
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