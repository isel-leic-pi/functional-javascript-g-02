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
function addArtist(username, artist, cb) {
    lastfm.searchArtist(artist, (err, matches)=>{
        if(err) return cb(err)
        if(matches.length==0) return cb(new Error('artist '+artist+' not found'))
        users.addArtist(username, artist, (err, user)=>{
            if(err) cb(err)
            cb(null, user)
        })
    })

}

module.exports = {
    getTopTracks,
    addArtist
}