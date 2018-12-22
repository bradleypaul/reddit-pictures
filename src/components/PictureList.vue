<template>
  <div class="PictureList">
    <div v-for="child in pictureData" :key="child.data.id">
      <Picture :title="child.data.title"
      :sub="child.data.subreddit_name_prefixed"
      :url="child.data.url"
      :id="child.data.id">
      </Picture>
    </div>
  </div>
</template>

<script>
import Picture from './Picture';
import Video from './Video';
export default {
  name: 'PictureList',
  components: {
    Picture,
    Video
  },
  props: {
  },
  data: function (){
    return {
      pictureData: [],
      fileEndings: /\.(jpe?g|pi?ng|gif)$/,
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
          if(this.repeats.has(item.data.id)) {
            return false;
          }
          this.repeats.add(item.data.id);         
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