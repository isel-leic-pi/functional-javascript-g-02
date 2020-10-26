'use strict'

const http = require('http');

const url = process.argv[2];

http.get(url, function(request) {
  let result = "";
  request.setEncoding("utf8");

  request.on("data", function(data) {
    result += data;
  });

  request.on("end", function() {
    console.log(result.length);
    console.log(result);
  });
});

/*

    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/