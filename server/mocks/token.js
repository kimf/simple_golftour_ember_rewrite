module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();


  tokenRouter.post('/', function(req, res) {
    res.send({
      'token': 'eMaZ1HC7rohHgOR2Ghd7Sppo4LsK%0A',
      'user_email': 'kim@fransman.se',
      'user_name': 'Kim Fransman'
    });
  });

  app.use('/api/v1/token', tokenRouter);
};
