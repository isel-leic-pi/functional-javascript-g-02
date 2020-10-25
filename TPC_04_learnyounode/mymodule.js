'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, cb) { 
    fs.readdir(dir, function (err, list) {
        if(err) {
            cb(err)
        } else {    
            list = list.filter( file => path.extname(file) === '.' + ext );
            cb(null, list)
        }
    })
 }

