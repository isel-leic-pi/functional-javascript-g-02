'use strict'

const users = require('./../repo/users').init()
const vinyl = require('./../repo/vinyl')

function getUserTopTracks(username, limit, cb) {
    let lim =  parseInt(limit) || 3
    vinyl.getTopTracks(username, lim, (err, tracks) => {
        if(err) return cb({
            'status': 500,
            'msg': err.toString()
        })
        cb(null, tracks)
    })
}

function getUserDetails(username, cb) {
    users.getUser(username, (err, user) => {
        if(err) return cb({
            'status': 500,
            'msg': err.toString()
        })
        if(!user) return cb({
            'status': 404,
            'msg': err.toString()
        })
        cb(null, user)
    })
}

function getUsers(req, cb) {
    users.getUsers((err, users) => {
        if(err) return cb({
            'status': 500,
            'msg': err.toString()
        })

        const host = req.headers.host
        console.log(req.headers.host)
        users.forEach(user => {
            user.details = 'http://' + host + '/vinyl/users/' + user.username
            user.toptracks = 'http://' + host + '/vinyl/users/' + user.username + '/toptracks'
        })

        cb(null, users)
    })
}



function addArtist(username, artist, cb) {
    vinyl.addArtist(username, artist, (err, user) => {
        if(err) return cb({
            'status': 500,
            'msg': err.toString()
        })
        if(!user) return cb({
            'status': 404,
            'msg': err.toString()
        })
        cb(null, user)
    })
}


function searchArtist(artist, cb) {
    vinyl.searchArtist(artist, (err, artist) => {
        if(err) return cb({
            'status': 500,
            'msg': err.toString()
        })
        if(!artist) return cb({
            'status': 404,
            'msg': err.toString()
        })
        cb(null, artist)
    })
}



module.exports = {
    getUserTopTracks,
    getUserDetails,
    getUsers,
    addArtist,
    searchArtist
}