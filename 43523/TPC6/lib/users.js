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
 * 
 * @param {String} username 
 * @param {function(Error)}
 */
function addUser(username, cb) {
    fs.readFile(PATH_USERS,(err,buffer) => {
        if(err) return cb(err)
       
        const arr = JSON.parse(buffer)
        console.log(arr)
        const users = arr.filter(user => user.username == username)
        
        if(users.length != 0) 
            return cb(new Error(`Exists already a username with the name ${username}`))
        
        const newObj = {username: username, artists:[]};
        arr.push(newObj)
        const newObjJSON = JSON.stringify(arr);
        
        fs.writeFile(PATH_USERS,newObjJSON,err => {
            if(err) return cb(err)
        })    
    })
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * I does not verify repetitions among artists.

 * @param {String} username 
 * @param {String} artist 
 * @param {function(Error, User)} cb 
 */
function addArtist(username, artist, cb) {
    fs.readFile(PATH_USERS,(err,buffer)=>{
        if(err)return cb(err)
        const arr = JSON.parse(buffer)
        arr.map(t=>{
            if(t.username==username) t.artists.push(artist)        
        })
        //cb(null,arr)

        const newObjJSON = JSON.stringify(arr);
       // console.log('newObjJSON'+newObjJSON)
        fs.writeFile(PATH_USERS,newObjJSON,err => {
            if(err) return cb(err)
        }) 
    })
}

module.exports = {
    getUser,
    addArtist,
    addUser
}
