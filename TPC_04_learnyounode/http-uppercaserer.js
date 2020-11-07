'use strict'

const http = require ('http')
const map = require('through2-map')

const PORT = process.argv[2]
/*
inStream.pipe (map (function (chunk) {
    return chunk.toString (). split (''). reverse (). join ('')
})). pipe (outStream)
*/
const server = http.createServer (function (req, res) {
    if(req.method === 'POST') {
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
          })).pipe(res)
    }
})
server.listen (PORT)

/*
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
    return res.end('send me a POST\n')
    }

    req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
    })).pipe(res)
})
server.listen(Number(process.argv[2]))
*/