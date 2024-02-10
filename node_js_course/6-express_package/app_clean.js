const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page is cool very cool</p>');
    res.sendFile('/views/index.html', {root: __dirname})
  });