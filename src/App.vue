<template>
  <div id="app">
    <div class="header">
      <h1>Reddit Pictures by Paul Bradley</h1><hr />
    </div>
    <PictureList></PictureList>
  </div>
</template>

<script>
import PictureList from './components/PictureList';

export default {
  name: 'app',
  components: {
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

div.header {
  position: fixed;
  padding-left: 5px;
}

h1 {
   -webkit-text-stroke-width: 2px;
   -webkit-text-stroke-color: #2c3e50;
}
</style>
