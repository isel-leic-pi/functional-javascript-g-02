'use strict'

const req = require('sync-request')

function printData(url) {
    const res = req('GET', url)
    const body = res.gerBody().toString()
    console.log(body)
}

printData(process.argv[0])
printData(process.argv[1])
printData(process.argv[2])
