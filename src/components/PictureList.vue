<template>
  <div class="PictureList">
    <div v-for="child in pictureData" :key="child.data.id">
      <h3 v-html="child.data.title"></h3><br/>
      <a :href="'https://www.reddit.com/' + child.data.id">
        <img v-bind:src="child.data.url"
        :alt="child.data.title" 
        :id="child.data.id"
        class="img-fluid"/>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PictureList',
  props: {
  },
  data: function (){
    return {
        pictureData: [],
        fileEndings: /\.(jpe?g|pi?ng|gif)$/
    };
  },
  methods: {
    scroll: function() {

    }
  },
  beforeCreate: function () {
    let reddit = new URL(`https://www.reddit.com`);
    let pictureDataURL = new URL(`${location.pathname || ''}.json?count=100`, reddit);
    fetch(pictureDataURL, {
        method: 'GET',
        mode: 'cors',
    }).then(res => res.json())
    .then(data => {
      this.pictureData = data.data.children.filter(item => {
        console.log(item)
        return this.fileEndings.test(item.data.url)? item : undefined;
      });
    });
  }
}
</script>

<style scoped>
h3 {
  display: inline;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  font-family: Verdana, Tahoma, sans-serif;
  padding-right: 5px;
}


</style>