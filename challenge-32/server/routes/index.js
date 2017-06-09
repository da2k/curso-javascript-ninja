'use strict';

var express = require('express');
var router = express.Router();
var data = [{
  image: 'http://blog.caranddriver.com/wp-content/uploads/2015/11/BMW-2-series.jpg',
  brandModel: 'BMW-2-series',
  year: '2015',
  plate: 'bmw-4625',
  color: 'Red'
},
{
  image: 'https://pictures.topspeed.com/IMG/crop/201511/1984-ferrari-testarossa-44_600x0w.jpg',
  brandModel: 'Ferrari Testarossa',
  year: '1993',
  plate: 'kvs-4822',
  color: 'Red'
}
];

router.get('/', function(req, res) {
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
  res.json({ message: 'success' });
});

module.exports = router;
