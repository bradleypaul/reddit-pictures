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
      fileEndings: /\.(jpe?g|pi?ng|gif)$/,
      apiUrl: new URL(`${location.pathname || ''}.json`, 'https://www.reddit.com'),
      count: 0
    };
  },
  methods: {
    getPostCount: function () {
      return this.pictureData.length;
    },
    atWindowBottom: function () {
      let doc = document.documentElement;
      return doc.scrollTop + window.innerHeight === doc.offsetHeight;
    },
    scroll: function() {
      window.onscroll = () => {
        if(this.atWindowBottom()) {
          console.log('here');
          this.getAPI(this.pictureData.slice(-1).pop().data.id);
        }
      }
    },
    getAPI: function(lastId) {
      
      let url = new URL(this.apiUrl);
      if(lastId) {
        url.searchParams.append('id', `t3_${lastId}`);
      }
      url.searchParams.append('count', this.getPostCount());
      console.log(lastId);
      console.log(url)
      fetch(url, {
        method: 'GET',
        mode: 'cors',
      })
      .then(res => res.json())
      .then(data => {
        this.pictureData.push(...data.data.children.filter(item => {
          return this.fileEndings.test(item.data.url);
        }));
      });
    }
  },
  beforeMount: function () {
    this.getAPI();
  },
  mounted: function () {
    this.scroll();
  }
}
</script>

<style scoped>
h3 {
  display: inline;
  font-size: 25px;
  font-weight: 500;
  line-height: 29px;
  font-family: Verdana, Tahoma, sans-serif;
  padding-right: 5px;
}


</style>