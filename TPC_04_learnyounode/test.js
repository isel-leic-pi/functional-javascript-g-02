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



const date = new Date()

function getFormatDate() {
    const date = new Date()
    const y = date.getFullYear()
    const m = addZero(date.getMonth() + 1)
    const d = addZero(date.getDate())
    const h = addZero(date.getHours())
    const min = addZero(date.getMinutes())

    return y + '-' + m + '-' + d + ' ' + h + ':' + min
}

function addZero(num) {
    if(num < 9) {
        return "0" + num
    }
    return num
}

console.log(getFormatDate())

console.log(date)


var http = require('http');

//create a server object:
http.createServer(function (req, res) { req tem os params do pedido ou da query string, res é onde vai a resposta à query
  res.write('Hello World!'); //write a response to the client
  res.write(req.url);

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
*/

const fs = require('fs');

//const stream = fs.createReadStream('C:\\Users\\Joana Paiva\\Desktop\\LS\\codigo_obs.txt', {start: 0, end: 3});


function read() {
    let stream = fs.createReadStream('C:\\Users\\Joana Paiva\\Desktop\\LS\\codigo_obs.txt');
    stream.on('data', d => {
        console.log(d.toString())
    })
}

read()