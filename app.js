
var express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()

var app = express();
var port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) { res.status(200).send('Hello world!') });

app.get('/webhook', function(req, res) {
  if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong validation token');
    }
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
