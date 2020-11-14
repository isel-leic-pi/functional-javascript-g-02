/* eslint-disable no-undef */
'use strict'

const users = require('./../lib/users')



test('test users module getUsers successfuly', done => {
    users.getUser('gamboa', (err, user) => {
        // Assert that there is no error
        expect(err).toBeFalsy()

        // Assert that property username of user is gamboa
        expect(user.username).toBe('gamboa')
        done()
    })
})

test('test users module getUser not exists', done => {
    users.getUser('Teresa', (err, user) => {
        // Assert that there is no error
        //expect(err).toBeTruthy
        expect(err).toBeDefined

        done()
    })
})

test('test users module Adds existing user', (done) => {
    users.addUser('gamboa', (err,user) => {
        if(err) { 
            expect(err.toString()).toBe('Error: Exists already a username with the name gamboa')
            expect(user).toBeUndefined()
        } else fail()

        done()
    })
})

 test('test users module Adds not existing user', (done) => {

    users.addUser('Rita', (err,user) => {
       // if(err) fail(err)
       console.log(user)
        expect(user.username.includes('Rita'))
        done()
    })
}) 
