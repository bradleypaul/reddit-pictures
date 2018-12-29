import checkRepeats from './Repeats';

(function (lastId) {
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
          return this.fileEndings.test(item.data.url);
        }
        return false;
      }));
    });
})