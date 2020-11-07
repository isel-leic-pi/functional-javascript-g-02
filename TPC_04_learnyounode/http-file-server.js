'use strict'

const http = require ('http')
const fs = require ('fs')

const PORT = process.argv[2]
const PATH = process.argv[3]


const server = http.createServer (function (req, res) {
    let readStream = fs.createReadStream(PATH);
    readStream.on('data', d => {
        res.write(d);
        res.end();
    })

})
server.listen (PORT)

/*
const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/