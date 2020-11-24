'use strict'

const api = require('./igdb-data')
const db = require('./covida-db')


// GET/covida/games/topgames/
function getTopGames(cb) {
    
    api.getTopGames((err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })

}
//GET /covida/games/:name
function searchGame(name, cb){
    api.searchGame(name, (err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

/**
 * @param {String} name 
 * @param {String} desc 
 * @param {function(Error, Array)} cb 
 */
//POST /covida/groups/:groupName - descrição vai no body
function putGroupByName(name, desc, cb) {
    db.putGroupByName(name, desc, (err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

/**
 * @param {function(Error, Array)} cb 
 */
function updateGroup(old_name, name, desc, cb) {
    db.updateGroup(old_name, name, desc, (err, data) =>{
        if(err) return cb(err)
        cb(null, data)
    })
}

function getGroups(cb) {
    db.getGroups((err,data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

function groupDetails(name, cb) {
    db.groupDetails(name, (err, data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

function addGameToGroup(group_name, game_name, cb) {
    api.searchGame(game_name, (err, game) => {
        if (err) return cb(err)
        const id = game.id
        console.log(id)
        db.addGameToGroup(group_name, id, (err, data) => {
            if(err) return cb(err)
            cb(null, data)
        })
    })
}


module.exports = {
    getTopGames,
    searchGame,
    putGroupByName,
    getGroups,
    groupDetails,
    updateGroup,
    addGameToGroup
}