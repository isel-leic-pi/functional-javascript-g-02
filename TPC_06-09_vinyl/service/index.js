'use strict'

const http = require('http')
const routes = require('./lib/routes/vinyl-routes')

const lastfm = require('./../lib/repo/lastfm')

const VINYL_USERS = '/vinyl/users'
const VINYL_USERS_DETAILS = /\/vinyl\/users\/(.*)/
const VINYL_USERS_TOPTRACKS = /\/vinyl\/users\/(.*)\/toptracks/


const server = http.createServer((req, res) => {
    let path

    if ((path = req.url.match(VINYL_USERS_TOPTRACKS))) {
        routes.getUserTopTracks(path[1], (err, user) => send(res, err, user))
    } else if ((path = req.url.match(VINYL_USERS_DETAILS))) {
        routes.getUserDetails(path[1], (err, user) => send(res, err, user))
    } else if ((path = req.url.match(VINYL_USERS))) {
        routes.getUsers((err, users) => send(res, err, users))
    } else {
        res.writeHead(404, 'Resource not found!!!!!')
        res.end()
    }
    //console.log(path)
})

function send(resp, err, payload) {
    if (err) {
        resp.writeHead(err.status)
        resp.end(err.msg)
    } else {
        const json = JSON.stringify(payload)
        resp.writeHead(200, {
            'content-type': 'application/json'
        })
        resp.end(json)
    }
}

server.listen(8000, () => console.log('Listening on the port 8000'))

/*

lastfm.searchArtist('Pink', (err, artists) => {
    if(err) return console.log(err)
    console.log(artists)
    
})

lastfm.searchArtist('Pink', (err, artist) => {
    if(err) return console.log(err)
    console.log(artist)
    
})

vinyl.addArtist('Joana', 'Pink', (err) => {
    if(err) return console.log(err)
    console.log('SUCCESS')
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