'use strict'
const mymodule = require('./mymodule.js')
const pathDir = process.argv[2]
const extname = process.argv[3]

mymodule(pathDir,extname,(err,files)=>{
    if(err) return console.log(err)

    files.forEach(file => {
        console.log(file)
    });
})


