'use strict'

const Router  = require('express').Router
const bodyParser = require('body-parser')

const router = Router()
const services = require('./covida-services')
module.exports = router

const ROUTES = [
    '/covida/games/topgames/',
    '/covida/games/:name/',
    '/covida/groups/:name/',
    '/covida/groups/'
]

router.get('/covida', (req, resp, next) => {
    resp.send(ROUTES)
})

// Obter a lista dos jogos mais populares
router.get('/covida/games/topgames/', (req, resp, next) => {
    services.getTopGames( (err, data) => {
        resp.send(data)
    })
})

// Pesquisar jogos pelo nome
router.get('/covida/games/:name/', (req, resp, next) => {
    const name = req.params.name
    //console.log(name)
    services.searchGame( name, (err, data) => {
        if (err) return resp.send(err)
        resp.send(data)
    })
})

// Criar grupo atribuindo-lhe um nome e descrição
router.put('/covida/groups/:name/', bodyParser.raw({ type: 'application/json' }), (req, resp, next) => {
    const name = req.params.name
    const desc = JSON.parse(req.body).description
    //console.log(desc)
    services.putGroupByName(name, desc, (err, data) => {
        if (err) {
            return resp.send(err.message)
            //return console.log(err.message)
        }
        resp.send(data)
        console.log('SUCCESS')
    })
})

// Editar grupo, alterando o seu nome e descrição
// coloquei POST para distinguir do metodo em cima;
// queremos aceder ao mesmo recurso mas fazer coisas diferentes;
// penso que faz mais sentido o de cima ser POST(cria algo novo) e 
// neste ser PUT(altera algo se ja existe, se nao cria um novo), 
// mas vejam entre voces ou perguntem ao prof
// depois apaguem este comentario sff excepto a 1ª linha
router.post('/covida/groups/:name', bodyParser.raw({ type: 'application/json' }),(req, resp, next) => {
    const old_name = req.params.name
    const name = JSON.parse(req.body).name
    const desc = JSON.parse(req.body).description
    services.updateGroup(old_name, name, desc, (err, data) => {
        if (err) return resp.send(err.message)
        resp.send(data)
        console.log('SUCCESS')
    })
})

// Listar todos os grupos
router.get('/covida/groups/',(req, resp, next) => {
    services.getGroups( (err, data) => {
        if(err) {
            return resp.send(err.message)
        }
        resp.send(data)
    })
})

// Obter os detalhes de um grupo, com o seu nome, descrição e nomes 
// dos jogos que o constituem
router.get('/covida/groups/:name/', (req, resp, next) => {
    const name = req.params.name
    services.groupDetails(name, (err,data) =>{
        if(err) {
            return resp.send(err.message)
        }
        resp.send(data)
    })
})

// Adicionar um jogo a um grupo
router.put('/covida/groups/:name/games', bodyParser.raw({ type: 'application/json' }), (req, resp, next) => {
    const group_name = req.params.name
    const game_name = JSON.parse(req.body).game
    console.log(game_name)
    services.addGameToGroup(group_name, game_name, (err, data) => {
        if (err) {
            return resp.send(err.message)
            //return console.log(err.message)
        }
        resp.send(data)
        console.log('SUCCESS')
    })
})


// Remover um jogo de um grupo

// Obter os jogos de um grupo que têm uma votação média (total_rating) 
// entre dois valores (mínimo e máximo) entre 0 e 100, sendo estes valores 
// parametrizáveis no pedido. Os jogos vêm ordenadas por ordem decrescente
// da votação média.