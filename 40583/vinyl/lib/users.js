'use strict'

const fs = require('fs')
const PATH_USERS = './data/users.json'

/**
 * @typedef User
 * @property {String} username
 * @property {Array} artists
 */
function User(username, artists) {
    this.username = username;
    this.artist = artists;
}



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
    let exists = false;
    fs.readFile(PATH_USERS, (err, buffer) => {
        if(err) return cb(err);
        const arr = JSON.parse(buffer);
        let newUser = new User(username,[]);
        arr.forEach(users => {
            console.log(users.username);
            if(users.username == username){
                exists = true;
               
            }
        });
        if(exists){
            return cb(new Error('Already exists user with username ' + username));
        }else{
            insertUser(arr, newUser);
        }
    });
}

function insertUser(arr,newUser){
    arr.push(newUser);
    fs.writeFile(PATH_USERS, JSON.stringify(arr), (err) => { 
        if (err) 
            console.log(err); 
        else { 
            console.log('File written successfully\n'); 
        } 
    }); 
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
    fs.readFile(PATH_USERS, (err, buffer)=>{
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const selected = arr.filter(user => user.username == username)
        if(selected.length == 0) return cb(new Error('There is no user ' + username))
        const newArr=arr.map(user => {
            if(user.username == username)
                user.artists.push(artist)
            return user
        })
        fs.writeFile(PATH_USERS, JSON.stringify(newArr), (err)=>{
            if(err) return cb(err)
        })
        cb(null, selected[0])
    })
}

module.exports = {
    getUser,
    addArtist,
    addUser
}
