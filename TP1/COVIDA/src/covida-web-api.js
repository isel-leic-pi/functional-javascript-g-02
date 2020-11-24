'use strict'

const Router  = require('express').Router

const router = Router()
const services = require('./covida-services')
module.exports = router

let routes = [
    '/covida/games/topgames/',
    '/covida/games/:name/',
    '/covida/groups/:name/',
    '/covida/groups/'
]
router.get('/covida', (req, resp, next) => {
    resp.send(routes)
})

//Obter a lista dos jogos mais populares
router.get('/covida/games/topgames/', (req, resp, next) => {
    services.getTopGames( (err,data) =>{
        resp.send(data)
    })
})

//Pesquisar jogos pelo nome
router.get('/covida/games/:name/', (req, resp, next) => {
    const name = req.params.name
    console.log(name)
    services.searchGame( name, (err,data) =>{
        resp.send(data)
    })
})

//Criar grupo atribuindo-lhe um nome e descrição
router.put('/covida/groups/:name/',(req, resp, next) => {
    console.log('ENTROUUUUUUUUUUUUUUUUUU')

    const desc = req.body['description']
    console.log(desc)
    services.putGroupByName(name, desc, (err,data) => {
        if (err) return console.log(err)
        resp.send(data)
        console.log('SUCCESS')
    })
    resp.send()
})

router.get('/covida/groups/',(req, resp, next) => {
    services.getGroups( (err,data) => {
        if(err) {
            return resp.send(err.message)
        }
        resp.send(data)
    })
})

router.get('/covida/groups/:name/',(req, resp, next) => {
    const name = req.params.name
    services.groupDetails(name, (err,data) =>{
        if(err) {
            return resp.send(err.message)
        }
        resp.send(data)
    })
})

