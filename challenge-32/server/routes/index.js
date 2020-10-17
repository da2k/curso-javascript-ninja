'use strict';

var express = require('express');
var router = express.Router();
var data = [];

router.get('/', function(req, res) {
  console.log('[GET] /car:', data)
  res.json(data);
});

router.post('/', function(req, res) {
  let plate = req.body.plate;
  
  let hasCar = data.some(function(car) {
    return car.plate === plate;
  });
  
  if(!hasCar) {
    data.push({
      image: req.body.image,
      brandModel: req.body.brandModel,
      year: req.body.year,
      plate: req.body.plate,
      color: req.body.color
    });
  }
  
  console.log('[POST] /car:', JSON.stringify({
    body: req.body,
    data
  }, null, 2))
  res.json({ message: 'success' });
});

router.post('/', function(req, res) {
  let plate = req.body.plate;
  
});

module.exports = router;
