'use strict'
const { countReset } = require('console')
const urllib = require('urllib')

const urls = [
    'http://example.com',
    'https://dzone.com/',
    'https://stackoverflow.com/'
]

function bodyLength(url, cb) {
    urllib.request(url, (err, body) => {
        if(err) return cb(err)
        else {
            const size = body.toString().length
            cb(null, size)
        }
    })
}

function sumBodiesLength (urls, cb) {
    let count = 0
    let sum = 0
    urls.forEach(url => {
        
        bodyLength(url, (err, size) => {
            if(err) return cb(err)
            sum += size
            ++count
            if(count == urls.length) cb(null, sum)

        })
    })
}

sumBodiesLength(urls, (err, sum) => {
    if(err) console.log(err)
    else
        console.log(`Sum bodies = ${sum}`)
});

