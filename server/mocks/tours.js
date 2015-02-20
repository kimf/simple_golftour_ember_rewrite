module.exports = function(app) {
  var express = require('express');
  var toursRouter = express.Router();

  toursRouter.get('/', function(req, res) {
    res.send({
      'tours': [
        {
          'id': 1,
          'name': 'Tisdagsgolfen',
          'current_user_role': 'creator'
        },
        {
          'id': 2,
          'name': 'SGF Tour',
          'current_user_role': 'admin'
        },
        {
          'id': 3,
          'name': 'Regular Tour Deluxe Garden Route',
          'current_user_role': 'member'
        }
      ]
    });
  });

  toursRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  toursRouter.get('/:id', function(req, res) {
    res.send({
      'tours': {
        id: req.params.id
      }
    });
  });

  toursRouter.put('/:id', function(req, res) {
    res.send({
      'tours': {
        id: req.params.id
      }
    });
  });

  toursRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/tours', toursRouter);
};
