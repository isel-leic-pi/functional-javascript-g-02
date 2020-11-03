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
*/


const req = require('sync-request')

const urls = [
    'http://example.com',
    'https://dzone.com/',
    'https://stackoverflow.com/'
]

function printData (url) {
    const res = req('GET', url)
    const body = res.gerBody().toString()
    console.log(body)
}

printData(urls[0])
printData(urls[1])
printData(urls[2])

