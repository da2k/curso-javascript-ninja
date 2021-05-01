'use strict';

var express = require('express');
var router = express.Router();
var data = [{image: 'https://images.com/car.png', brandModel: 'Fiat', year: 2007, plate: 'sdf555', color: 'red'}];

router.get('/', function(req, res) {
  console.log('[GET] /car:', data)
  res.json(data);
});

router.post('/', function(req, res) {
  data.push({
    image: req.body.image,
    brandModel: req.body.brandModel,
    year: req.body.year,
    plate: req.body.plate,
    color: req.body.color
  });
  console.log('[POST] /car:', JSON.stringify({
    body: req.body,
    data
  }, null, 2))
  res.json({ message: 'success' });
});

module.exports = router;
