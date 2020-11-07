'use strict'

const req = require('sync-request')

function printData(url) {
    const res = req('GET', url)
    const body = res.getBody().toString()
    //console.log(body)
    return body
}


console.log(printData(process.argv[2]))
console.log(printData(process.argv[3]))
console.log(printData(process.argv[4]))


/*
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
*/