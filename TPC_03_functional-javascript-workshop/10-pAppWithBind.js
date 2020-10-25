'use strict'

module.exports = function (namespace) {
    return console.log.bind(console, namespace)// o retorno é uma funçao; ao ser chamada com args imprime: "namespace+args"
}

/* MODO DE UTILIZAÇAO
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
*/