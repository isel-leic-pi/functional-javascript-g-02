'use strict'

const PORT = process.argv[2]

const net = require ('net')
const server = net.createServer (function (socket) {
    // socket handling logic
    socket.write(getFormatDate() + '\n')
    socket.end () 
})
server.listen (PORT)

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
    if(num < 10) {
        return "0" + num
    }
    return num
}