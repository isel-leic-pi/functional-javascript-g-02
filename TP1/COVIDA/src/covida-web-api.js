'use strict'

const Router  = require('express').Router

const router = Router()
const services = require('./covida-services')
module.exports = router

router.get('/covida/games/topgames/', (req, resp, next) => {
    services.getTopGames( (err,data) =>{
        resp.send(data)
    })
})


router.get('/covida/games/:name/', (req, resp, next) => {
    const name = req.params.name
    console.log(name)
    services.searchGame( name, (err,data) =>{
        resp.send(data)
    })
})



router.put('/covida/groups/:name',(req, resp, next) => {
    const name = req.params.name
    console.log(name)
})