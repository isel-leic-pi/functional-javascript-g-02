'use strict'

const mymodule = require ('./mymodule.js')

mymodule(process.argv[2], process.argv[3], cb)

function cb(err, list) {
    if(err) {
        console.error(err)
    } else {
        list.forEach(file => console.log(file) );
    }
    
}