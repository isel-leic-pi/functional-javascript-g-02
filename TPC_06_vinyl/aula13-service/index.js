'use strict'

const vinyl = require('./lib/vinyl')
const users = require('./lib/users')
const lastfm = require('./lib/lastfm')


vinyl.addArtist('Joana', 'fsdgfhjk', (err) => {
    if(err) return console.log(err)
    console.log('SUCCESS')
})

/*
lastfm.searchArtist('Pink', (err, artists) => {
    if(err) return console.log(err)
    console.log(artists)
    
})

users.addUser('Joana', (err) => {
    if(err) return console.log(err)
    console.log('SUCCESS')
})

vinyl.getTopTracks('gamboa', 3, (err, tracks) => {
    if(err) console.log(err)
    else
        tracks.forEach(t => console.log(t))   
})

users.addArtist('Joana', 'OLA', (err) => {if(err) console.log(err)})
*/

/*
lastfm.getTopTracks('franz ferdinand', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/
/*
users.getUser('gamboa', (err, user) => {
    if(err) console.log(err)
    else
        user.artists.forEach(art => console.log(art))
})

users.getUser('kaskdh', (err, user) => {
    if(err) console.log(err)
    else
        user.artists.forEach(art => console.log(art))
})
*/