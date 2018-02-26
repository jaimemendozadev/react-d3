const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const public = path.resolve(__dirname, '../public');

app.use(express.static(public));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('hit the api bruh!');
});

module.exports = app;
