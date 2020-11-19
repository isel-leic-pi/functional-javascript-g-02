'use strict'

const express = require('express')
const routes = require('../covida-web-api')

// if(process.argv.length > 2 )
//     require('./lib/repo/users').init(process.argv[2])

const server = express()

server.use(routes)

server.listen(8080, () => {
    console.log('Listening on port 8080')
    if(process.send)
        process.send({ running: true })
})
