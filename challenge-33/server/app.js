'use strict';

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3000;
let routes = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.json({ message: 'hi' });
});

app.use('/car', routes);

app.listen(port, function() {
  console.log('Listening on port http://localhost:%d', port);
});
