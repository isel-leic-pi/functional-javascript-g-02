'use strict'

const http = require ('http')
const PORT = process.argv[2]
const PATH = process.argv[3]

// GET request to the path '/api/parsetime'   /api/parsetime?iso=2013-08-10T12:10:15.474Z

// Add second endpoint for the path '/api/unixtime'

const server = http.createServer (function (req, res) {
    

})
server.listen (PORT)

