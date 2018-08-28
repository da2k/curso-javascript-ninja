'use strict';

var express = require('express');
var router = express.Router();
var data = [{}];

router.get('/', function(req, res) {
    res.json(data);
});

router.get('http://localhost:3000/car', function(req, res) {
    var image = req.params.image;
    var brandModel = req.params.brandModel;
    var year = req.params.year;
    var plate = req.params.plate;
    var color = req.params.color;

    var hasCar = data.some(function(dataCar) {
        return dataCar.data === data;
    });
    console.log(hasCar);
    if (hasCar) {
        return res.json(data.filter(function() {
            return dataCar.data === data;
        })[0]);
    }

    res.status(404).json({ error: 'carro nao encontrado' });
})

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

router.get('/')

module.exports = router;