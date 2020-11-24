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
//POST /covida/groups/:groupName              descrição vai no body
function putGroupByName(name, desc, cb){
    db.putGroupByName(name, desc, (err) => {
        if(err) return cb(err)
        cb(null)
    })
}

function updateGroup(cb){
    db.updateGroup((err,data) =>{
        if(err) return cb(err)
        cb(null,data)
    })
}

function getGroups(cb){
    db.getGroups((err,data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

function groupDetails(name, cb) {
    db.groupDetails(name, (err,data) => {
        if(err) return cb(err)
        cb(null, data)
    })
}

module.exports = {
    getTopGames,
    searchGame,
    putGroupByName,
    getGroups,
    groupDetails
}