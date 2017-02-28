
var express = require('express')
var bodyParser = require('body-parser')
var webhook = require('./webhook')
require('dotenv').config()

var app = express();
var port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/webhook', webhook);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
