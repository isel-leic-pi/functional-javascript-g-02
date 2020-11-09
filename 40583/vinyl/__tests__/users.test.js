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

test('test users module Adds existing user', (done) => {

    users.addUser('gamboa', (err,user) => {
        if(err) { 
            expect(err.toString()).toBe('Error: User gamboa already exists!')
            expect(user).toBeUndefined()
        } else fail()

        done()
    })
})


