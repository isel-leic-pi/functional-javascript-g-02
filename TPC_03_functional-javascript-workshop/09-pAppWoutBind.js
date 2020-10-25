'use strict'

var slice = Array.prototype.slice //transforma os arguments em um array [arg0, agr1, .., argn]; [] <=> Array.prototype

function logger(namespace) {
    return function () {
        const arr_args = slice.call(arguments)
        arr_args.unshift(namespace)
        return console.log.apply(console,arr_args)
    }
}

module.exports = logger