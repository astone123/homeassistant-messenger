var webhook = function(req, res) {
    if(req.query['hub.verify_token'])
      setup(req, res);

    console.log(REQUEST: req);
}

var setup = function(req, res) {
  if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong validation token');
    }
}

module.exports = webhook;
