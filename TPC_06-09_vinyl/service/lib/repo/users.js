'use strict'

const fs = require('fs')
let usersPath = './data/users.json'

/**
 * @typedef User
 * @property {String} username
 * @property {Array} artists
 */

/**
 * @param {String} username 
 * @param {function(Error, User)} cb 
 */
function getUser(username, cb) {
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const users = arr.filter(user => user.username == username)
        if(users.length == 0) return cb(new Error('There is no user with username ' + username))
        cb(null, users[0])
    })
}
/**
 * @param {function (Error, Array)} cb 
 */
function getUsers(cb) {
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        const users = JSON.parse(buffer)
        cb(null, users)
    })
}

/**
 * Add a new User object with given username if it does not exist yet.
 * Returns an Error if that username already exist.
 * @param {String} username 
 * @param {function(Error)} cb
 */
function addUser(username, cb) {
    //let arrayUsersJson = {}
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        let arrayUsers = JSON.parse(buffer)
        if( arrayUsers.some(obj => obj.username === username )) 
            return cb(new Error(`The user whit name ${username} already exists`))

        const user = {
            "username": username,
            "artists": []
        }
        arrayUsers.push(user)

        fs.writeFile(usersPath, JSON.stringify(arrayUsers), cb)

        /*
        let arrayUsersJson = JSON.stringify(arrayUsers)
        fs.writeFile(usersPath, arrayUsersJson, (err) => {
            if(err) return cb(err)
        })*/
        
    })
    cb(null)
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * I does not verify repetitions among artists.
 * 
 * @param {String} username 
 * @param {String} artist 
 * @param {function(Error, User)} cb 
 */
function addArtist(username, artist, cb) {
    //let arrayUsersJson = []
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        
        let arrayUsers = JSON.parse(buffer)
        //console.log(arrayUsers)
        const index = arrayUsers.findIndex(elem => elem.username === username)
        if(index < 0) return cb(new Error(`The user whit name ${username} not exists`))
        
        arrayUsers[index].artists.push(artist)
               
        const arrayUsersJson = JSON.stringify(arrayUsers)

        fs.writeFile(usersPath, arrayUsersJson, (err) => {
            if(err) return cb(err)
            cb(null, username)
        })
    })
}

module.exports = { init }

function init(path) {
    if(path) usersPath = path
    return {
        getUser,
        getUsers,
        addArtist,
        addUser
    }
}