'use strict'

const fs = require('fs')
const path = require('path')

const folder = fs.readdir(process.argv[2], callbackFunction)

const ext = '.' + process.argv[3]

function callbackFunction(err, list) {
    if(err) {
        console.log(err)
    }else {
        list.forEach(file => {  
        // if (path.extname(file) === ext)
        // if(file.substr(file.length - ext.length, file.length - 1) === ext) {
        if(file.includes(ext)) {
            console.log(file)  
            }      
        });
    }
    
}


