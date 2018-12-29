<template>
  <div class="PictureList">
    <Video :url="'https://giant.gfycat.com/DelectableOpulentAquaticleech.webm'" type="video/webm">
    </Video>
    <div v-for="child in pictureData" :key="child.data.id">
      <Title :title="child.data.title"
      :sub="child.data.subreddit_name_prefixed">
      </Title>
      <Picture :url="child.data.url"
      :id="child.data.id">
      </Picture>
    </div>
  </div>
</template>

<script>
import Picture from './Picture';
import Video from './Video';
import Title from './Title';
import checkRepeats from '../services/Repeats.js'

export default {
  name: 'PictureList',
  components: {
    Title,
    Picture,
    Video
  },
  props: {
  },
  data: function (){
    return {
      pictureData: [],
      imageFileEndings: /\.(jpe?g|pi?ng|gif)$/,
      videoFileEndings: /\.(mp4)$/,
      apiUrl: new URL(`${location.pathname || ''}.json`, 'https://www.reddit.com'),
      repeats: new Set()
    };
  },
  methods: {
    getPostCount: function () {
      return this.pictureData.length;
    },
    atWindowBottom: function () {
      let doc = document.documentElement;
      return parseInt(doc.scrollTop) + window.innerHeight + 500 >= doc.offsetHeight;
    },
    scroll: function() {
      window.onscroll = () => {
        if(this.atWindowBottom()) {
          this.getAPI(this.pictureData.slice(-1).pop().data.id);
        }
      }
    },
    getAPI: function(lastId) {
      let url = new URL(this.apiUrl);
      if(lastId) {
        url.searchParams.append('after', `t3_${lastId}`);
      }
      url.searchParams.append('count', this.getPostCount());
      fetch(url, {
        method: 'GET',
        mode: 'cors',
      })
      .then(res => res.json())
      .then(data => {
        this.pictureData.push(...data.data.children.filter(item => {
          if(checkRepeats.checkRepeats(item.data.id)) {
            return this.imageFileEndings.test(item.data.url);
          }        
          return false;
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