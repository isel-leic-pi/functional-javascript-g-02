'use strict'

const api = require('./igdb-data')


// GET/covida/games/topgames/
function getTopGames(cb) {
    
    api.getTopGames((err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })

}

function searchGame(name, cb){
    api.searchGame(name, (err, data) =>{
        if(err) return cb(err)
        cb(null, data)
    })
}


module.exports = {
    getTopGames,
    searchGame
}