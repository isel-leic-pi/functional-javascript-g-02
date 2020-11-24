'use strict'

let groups = [
    {
        name: 'group0',
        description: 'desc0',
        games: ['delta', 'delta']
    },
    {
        name: 'group1',
        description: 'desc1',
        games: []
    }
]

/**
 * @param {String} name 
 * @param {String} desc 
 * @param {*} cb 
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
}

// Editar grupo, alterando o seu nome e descrição
function updateGroup(name, desc, cb) {
    let group = groups.find( g =>  g.name === name )
    if(group === undefined) return cb(new Error(`The update was not successful. The group with the name ${name} does not exist!!!!!`))
    group.name = name
    group.description = desc
    cb(null)
}
// Listar todos os grupos
function getGroups(cb) {
    cb(groups)
}

