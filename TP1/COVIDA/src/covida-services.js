'use strict'

const api = require('./igdb-data')
const db = require('./igdb-data')


// GET/covida/games/topgames/
function getTopGames(cb) {
    
    api.getTopGames((err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })

}

function searchGame(name, cb){
    api.searchGame(name, (err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

function putGroupByName(name, desc, cb){
    db.putGroupByName(name, desc, (err) => {
        if(err) return cb(err)
        cb(null)
    })
}


module.exports = {
    getTopGames,
    searchGame,
    putGroupByName
}