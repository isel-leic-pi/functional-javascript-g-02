'use strict'

const users = require('./../lib/repo/users').init('./__tests__/mocks/users.json')

/****************************** */
const fs = require('fs')

const arrayUsers = [
    {
        "username": "laurinda",
        "artists": [
            "muse",
            "killers",
            "new order",
            "Franz Ferdinand",
            "Faith no more"
        ]
    },
    {
        "username": "bob",
        "artists": []
    }
    
]

function initializeUsersDatabase() {
    fs.writeFileSync('./__tests__/mocks/users.json', JSON.stringify(arrayUsers))
}

function clearUsersDatabase() {
    // ... ???
}
/****************     getUser    **************** */

beforeEach(() => {
    initializeUsersDatabase();
});
  
afterEach(() => {
    clearUsersDatabase();
});

test('test users module getUser successfuly', done => {
    users.getUser('laurinda', (err, user) => {
        // Assert that there is no error
        expect(err).toBeFalsy()

        // Assert that property username of user is laurinda
        expect(user.username).toBe('laurinda')
        done()
    })
})

test('test users module getUser for absent username', done => {
    users.getUser('jose', (err, user) => {
        // Assert that there is no error
        if(err) {
            expect(err.toString()).toBe('Error: There is no user with username jose')
        }
        expect(user).toBeUndefined();
        done()
    })
})

/* ***************************     addUser     ***************************** */

test('test users module addUser successfuly', done => {
//
    users.addUser('joana', (err) => {
        // Assert that there is no error
        expect(err).toBeFalsy()
        done()
    })
//
})


test('test users module addUser already exists', done => {

    users.addUser('bob', (err,user) => {
        if(err) {
            expect(err.toString()).toBe('Error: The user whit name bob already exists')
            expect(user).toBeUndefined()
        } 
        expect(err).toBeTruthy // fail
        done()
    })
})

/* ***************************     addArtist     ***************************** */

test('test users module addArtist successfuly', done => {
        users.addArtist('bob', 'pink', (err, user) => {
            // Assert that there is no error
            expect(err).toBeFalsy()
            expect(user).toBeDefined();
            done()
        })
})

test('test users module addArtist in absent user', done => {
    users.addArtist('jose', 'pink', (err, user) => {
        // Assert that there is no error
        expect(err.toString()).toBe('Error: The user whit name jose not exists')
        expect(err).toBeTruthy()
        expect(user).toBeUndefined()
        done()
    })
})