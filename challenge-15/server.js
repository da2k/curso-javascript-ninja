var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  console.log('Request for ' + req.url + ' by method ' + req.method);
  if(req.method == 'GET') {
    var fileUrl;
    if(req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    var filePath = path.resolve('./challenge-15'+fileUrl);
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.createReadStream(filePath).pipe(res);

  }
})
server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});