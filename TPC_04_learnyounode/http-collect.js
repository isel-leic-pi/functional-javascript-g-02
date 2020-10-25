'use strict'

const url = process.argv[2]

const urllib = require('urllib')

urllib.request(url, (err, data, res) => {
    if(err) {
        return console.log(err)
    } else {
        console.log(data.toString().length)
        console.log(data.toString())
        
    }
})
