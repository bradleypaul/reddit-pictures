<template>
  <div id="app">
    <div>
      <h1>Reddit Pictures</h1>
    </div>
    <PictureList></PictureList>
  </div>
</template>

<script>
import Picture from './components/Picture.vue';
import PictureList from './components/PictureList';

export default {
  name: 'app',
  components: {
    Picture,
    PictureList
  }
};
</script>

<style>

#app {
  font-family: 'Product Sans','Avenir', Helvetica, Arial, sans-serif;
  background-color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
