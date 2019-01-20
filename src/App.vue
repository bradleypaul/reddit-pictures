<template>
  <div id="app">
    <div class="header">
      <h1>Reddit Pictures by Paul Bradley</h1>
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
@import './assets/ProductSans/styles.css';
#app {
  font-family: 'Product Sans','Avenir', Helvetica, Arial, sans-serif !important;
  /* background-color: #2c3e50; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

div.header {
  position: sticky;
  top: 0;
  text-align: center;
  width: 100%
}

@media screen  {
  div.header{
    background-color: rgba(169,169,169,0.7);
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.8em !important;
  }
  h3 {
    font-size: 1.2em !important;
  }
}

</style>
