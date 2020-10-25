'use strict'
/*
const fs = require('fs')
//process.argv[2],
const p = 'C:\\Users\\Joana' + ' ' + 'Paiva\\Desktop\\PI\\TPCs\\TPC_04_learnyounode'

console.log(p)

const lines = fs.readdir(p, callbackFunction)

function callbackFunction(err, list) {
    if(err) {
        console.log(err)
    }else {
        list.forEach(element => {  
            if(element.includes('io')) {
            console.log(element)  
            }      
        });
    }
    
}
*/
const urllib = require('urllib')

const url = 'http://www.example.com/'

urllib.request(url, (err, data, res) => {
    if(err) {
        return console.log(err)
    } else {
        console.log(res.statusCode)
        console.log(res.headers)
        console.log(data.toString())
    }
})