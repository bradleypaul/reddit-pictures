const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('dist'));

app.listen(port,() => console.log(`Reddit Pictures listening on ${port}`));
