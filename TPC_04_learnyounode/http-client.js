'use strict'

const http = require('http')
let url = process.argv[2]

http.get (url, cb)

function cb (res) {
    res.setEncoding('utf8')
    res.on('data', cbdata)
}

function cbdata(data) {
    console.log(data)
}