'use strict'

const lastfm = require('./lastfm')
const users = require('./users')

/**
 * Retrieves the top tracks (limit) of the favourite artists
 * for the given username.
 * Notice it returns a single Array flatten with thos tracks.
 * @param {String} username 
 * @param {function(Error, Array)} cb 
 */
function getTopTracks(username, limit, cb) {
    users.getUser(username, (err, user) => {
        if(err) return cb(err)
        const arr = []
        let count = 0
        user.artists.forEach(artist => 
            lastfm.getTopTracks(artist, (err, tracks) => {
                if(err) return cb(err)
                count++
                tracks
                    .slice(0, limit)
                    .forEach(t => arr.push(t))
                if(count == user.artists.length)
                    cb(null, arr)
            })
        )
    })
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * Returns an Error both if there is not that username or there is no Artists with that name.
 * 
 * @param {*} username 
 * @param {*} artist 
 * @param {*} cb 
 */
/*
Devolve erro caso não exista um utilizador com o username dado
 ou não exista um artista com o nome dado no parâmetro artist. 
 Caso contrário, chama addArtist de users.
*/ 
function addArtist(username, artist, cb) {
    
    users.getUser(username,(err,p)=>{
        if(err)return cb
    })
    lastfm.searchArtist(artist,(err,p)=>{
        if(err)return cb 
        else users.addArtist(username,artist,cb)
    })

   
}


module.exports = {
    getTopTracks,
    addArtist
}