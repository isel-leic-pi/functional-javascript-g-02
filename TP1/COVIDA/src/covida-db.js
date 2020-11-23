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
    const filtered = groups.filter( obj => {
        return obj.name  === 0
    })
    
    let obj = {
        name: name
    }
    groups.push()
}