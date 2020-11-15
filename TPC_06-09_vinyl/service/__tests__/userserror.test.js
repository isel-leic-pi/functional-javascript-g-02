'use strict'

const usersErr = require('./../lib/repo/users').init('./__tests__/mocks/noFile')


test('test users module getUser error file', done => {
    usersErr.getUser('jose', (err, user) => {
        // Assert that there is no error
        expect(err).toBeTruthy()
        done()
    })
})

test('test users module addUser file error', done => {
    usersErr.addUser('bob', (err, user) => {
        // Assert that there is no error
        expect(err).toBeTruthy
        done()
    })
})

test('test users module addArtist file error', done => {
    usersErr.addArtist('bob', 'pink', (err, user) => {
        // Assert that there is no error
        expect(err).toBeTruthy
        done()
    })
})

/*
function addUser(username, cb) {
    let arrayUsersJson = {}
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        */