/* Implementar uma função que recebe um array de URLs e devolve 
a soma dos tamanhos dos corpos das respostas HTTP a esses URLs.

Requisitos:
Tirar partido da função anterior bodyLength (assíncrona) que pode ser modificada.
Não usar variáveis globais.
Resultados deixam de ser dados pelas funções em console.log(), excepto na aplicação final. */
'use strict'

const urllib = require('urllib')

const urls = [
    'http://example.com',
    'https://dzone.com/',
    'https://stackoverflow.com/'
]

function bodyLength(url, cb) {
    urllib.request(url, (err, body) => {
        if(err) // console.log(err)
            return(err,null)
        else {
            const data = body.toString()
            //console.log(`${url} body size = ${data.length}`)
            return cb(null,data.length)
        }
    })
}

function sumBodiesLength(urls, cb) {
    let sum = 0
    let count = 0
    urls.forEach(url => {
        bodyLength(url, (err, size) => {
            count++
            if(err) return cb(err,null)
            sum += size
            if(count == urls.length)
               return  cb(null, sum)
        })
    })
}

sumBodiesLength(urls, (err, sum) => {
    if(err) console.log(err)
    else console.log('Total bodies size = ' + sum)
})