'use strict'

const igdbData = require("./igdb-data")

let groups = [
    {
        name: 'group0',
        description: 'desc0',
        games: [8278692, 8278692]
    },
    {
        name: 'group1',
        description: 'desc1',
        games: [ ]
    }
]

/**
 * @param {String} name 
 * @param {String} desc 
 * @param {function(Error, Array)} cb "return" o erro ou o array de groups para confirmar se foi bem inserido
 */
function putGroupByName(name, desc, cb) {
    const bool = groups.some( obj => {
        return obj.name  === name
    })
    if (bool) return cb(new Error(`The identifier group ${name} already exists!!!!!`))  
    
    let group = {
        name: name,
        description: desc,
        games: []
    }
    groups.push(group)
    cb(null, groups)
}

// Editar grupo, alterando o seu nome e descrição
/**
 * @param {String} old_name 
 * @param {String} name 
 * @param {String} desc 
 * @param {function(Error, Array)} cb 
 */
function updateGroup(old_name, name, desc, cb) {
    let group = groups.find( g =>  g.name === old_name )
    if(group === undefined) return cb(new Error(`The update was not successful. The group with the name ${old_name} does not exist!!!!!`))
    group.name = name
    group.description = desc
    cb(null, groups)
}

// Listar todos os grupos
function getGroups(cb) {
    if(groups.length === 0) return cb(new Error('Not exists groups!!!!!'))
    cb(null, groups)
}

function groupDetails(name, cb){
    let group = groups.find( g =>  g.name === name )//codigo repetido
    if (group === undefined) return cb(`The identifier group ${name} does not exists!!!!!`)//codigo repetido
    cb(null, group)
}

function addGameToGroup(group_name, game_id, cb){
    let group = groups.find( g =>  g.name === group_name )//codigo repetido
    if (group === undefined) return cb(`The identifier group ${name} does not exists!!!!!`)//codigo repetido
    group.games.push(game_id)
    cb(null, group)
}


module.exports = { 
    putGroupByName,
    updateGroup,
    getGroups,
    groupDetails,
    updateGroup,
    addGameToGroup
}