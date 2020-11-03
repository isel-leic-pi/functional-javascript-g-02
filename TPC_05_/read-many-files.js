'use strict'

const { count } = require('console')
const fs = require('fs')

const files = [
    'The-Wizard-by-Rider-Haggard.txt',
    'Metamorphosis-by-Franz-Kafka.txt', 
    'The-History-of-Tom-Thumb-and-Others.txt'
]

function fileSize(path, cb) {
    console.log('Reading ' + path)
    fs.readFile(path, (err, buffer) => {
        if(err) return cb(err)
        const size = buffer.toString().length
        cb(null, size)
    })
}

function sumFilesSize(files, cb) {
    let count = 0
    let sum = 0
    files.forEach(file => {
        fileSize(file, (err, size) => {
            if (err) return cb(err)
            sum += size
            ++count
            if(count == files.length) return cb(null, sum)
        })
    })


}

sumFilesSize(files, (err, sum) => {console.log('Sum files size = ' + sum)})