'use strict'

const users = require('./../repo/users').init()
const vinyl = require('./../repo/vinyl')

function getUserTopTracks(username, cb) {
    vinyl.getTopTracks(username, 3, (err, tracks) => {
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

function getUsers(cb) {
    users.getUsers((err, users) => {
        if(err) return cb({
            'status': 500,
            'msg': err.toString()
        })
        cb(null, users)
    })
}

module.exports = {
    getUserTopTracks,
    getUserDetails,
    getUsers
}