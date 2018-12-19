const express = require('express');
const app = express();
const port = 3000;
app.get('/*', (req, res) => {
    let reddit = new URL(`https://reddit.com`);
    let pictureDataURL = new URL(`${req.originalURL}.json`, reddit);
    let response = {};
    fetch(pictureDataURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            // 'Access-Control-Allow-Origin': '*'
        }
    }).then(data => data.json())
    .then(data => response = data.data.children);
    res.send(response);
});

app.listen(port, ()=> console.log(`Listening on ${port}`))