'use strict'

const fs = require('fs')

const lines = fs.readFile(process.argv[2], callBackFunction)


function callBackFunction(err, data) {
    if(err) {
        console.log(err)
    }else {
        const lines = data.toString().split('\n').length - 1
        console.log(lines)
    }
}

