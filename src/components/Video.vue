<template>
  <div class="Video">
        <video loop  autoplay :src="url"
        class="img-fluid"></video>
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