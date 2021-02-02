'use strict'

const lastfm = require('./lastfm')
let users = require('./users').init()

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
 * @param {String} username 
 * @param {String} artist 
 * @param {function(Error)} cb 
 */
function addArtist(username, artistToSearch, cb) {

    users.getUser(username, (err, user) => {
        if(err) return cb(err)
            
        lastfm.searchArtist(artistToSearch, (err, artist) => {
            if(err) return cb(err)
            if(!art) return cb(new Error(`The artist with name ${artistToSearch} does not exist in lastfm`))
            users.addArtist(user.username, artist, cb)
        })
    })
}
module.exports = {
    getTopTracks,
    addArtist
}
