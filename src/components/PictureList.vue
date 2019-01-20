<template>
  <div class="PictureList">
    <div v-for="child in pictureData" :key="child.data.id">
      <Title :title="child.data.title"
      :sub="child.data.subreddit_name_prefixed"
      :permalink="child.data.permalink"
      :author="child.data.author">
      </Title>

      <Picture
      :url="child.data.url"
      :id="child.data.id"
      :permalink="child.data.permalink">
      </Picture>
    </div>
  </div>
</template>

<script>
import Picture from './Picture';
import Title from './Title';

export default {
  name: 'PictureList',
  components: {
    Picture,
    Title
  },
  props: {
  },
  data: function () {
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
      return parseInt(doc.scrollTop) + 2 * window.innerHeight >= doc.offsetHeight;
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
        data.data.children.forEach(item => {
          console.log(item)
          if(this.repeats.has(item.data.id)) {
            return;
          }
          this.repeats.add(item.data.id);         
          if (this.fileEndings.test(item.data.url)) {
            this.pictureData.push(item);
          }
        });
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