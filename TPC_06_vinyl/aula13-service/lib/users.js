'use strict'

const fs = require('fs')
const PATH_USERS = './data/users.json'

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
    fs.readFile(PATH_USERS, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const users = arr.filter(user => user.username == username)
        if(users.length == 0) return cb(new Error('There is no user with username ' + username))
        cb(null, users[0])
    })
}

/**
 * Add a new User object with given username if it does not exist yet.
 * Returns an Error if that username already exist.
 * @param {String} username 
 * @param {function(Error)}
 */
function addUser(username, cb) {
    // Ler ficheiro
    // JSON.parse
    // Modificar...
    // JSON.stringify
    // writeFile
    let arrayUsersJson = {}
    fs.readFile(PATH_USERS, (err, buffer) => {
        if(err) return cb(err)
        let arrayUsers = JSON.parse(buffer)
        //let bool = arrayUsers.some(obj => obj.username === username)
        if( arrayUsers.some(obj => obj.username === username )) return cb(new Error(`The user whit name ${username} already exists`))

        const user = {
            "username": username,
            "artists": []
        }
        //console.log()
        arrayUsers.push(user)
        //console.log(arrayUsers)
        arrayUsersJson = JSON.stringify(arrayUsers)
        console.log()
        console.log(arrayUsersJson)
        fs.writeFile(PATH_USERS, arrayUsersJson, (err) => {
            if(err) return cb(err)
        })
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
    fs.readFile(PATH_USERS, (err, buffer) => {
        if(err) return cb(err)
        
        let arrayUsers = JSON.parse(buffer)
        console.log(arrayUsers)
        const index = arrayUsers.findIndex(elem => elem.username === username)
        if(index < 0) return cb(new Error(`The user whit name ${username} not exists`))
        
        arrayUsers[index].artists.push(artist)
               
        const arrayUsersJson = JSON.stringify(arrayUsers)

        fs.writeFile(PATH_USERS, arrayUsersJson, (err) => {
            if(err) return cb(err)
        })
    })
    cb(null)
}

module.exports = {
    getUser,
    addArtist,
    addUser
}
