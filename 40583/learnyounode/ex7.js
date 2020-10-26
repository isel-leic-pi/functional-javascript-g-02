const http = require('http');

const url = process.argv[2];

http.get(url, function(request) {
  request.setEncoding('utf8');
  request.on('data', function(data) {
    console.log(data);
  });
});