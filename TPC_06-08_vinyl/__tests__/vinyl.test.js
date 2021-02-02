'use strict'

const urllib = require('urllib')
const vinyl = require('../lib/repo/vinyl')
const lastfm = require('../lib/repo/lastfm')
const users = require('./../lib/repo/users')

const fs = require('fs')

jest.mock('urllib')
jest.mock('./../lib/repo/users')
jest.mock('./../lib/repo/lastfm')

/*
test('test users module getTopTracks not successfuly', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        fs.readFile('./__tests__/mocks/toptracks-error.json', cb)
    })
    lastfm.getTopTracks('cure', (err, tracks) => {
        expect(err).toBeTruthy()
        done()
    })
})
*/
/* ***************************     getTopTracks     ***************************** */


test('test users module getTopTracks successfuly', done => {
    // TypeError: Cannot read property 'getUser' of undefined
    users.init().getUser.mockImplementationOnce((url, cb) => {
        cb(null, USER_LAURINDA)
    })

    lastfm.getTopTracks.mockImplementationOnce(USER_LAURINDA[0].artists, cb => {
        cb(null, TOPTRACKS_LAURINDA)
    })
        
    vinyl.getTopTracks('laurinda', 3, (err, tracks) => {
        let i = 0
        console.log
        tracks.forEach( t => {
            expect(err).toBeFalsy()
            expect(t).toBe(TOPTRACKS_NEWORDER[i++])
        })
    })
})


/* ***************************     addArtist     ***************************** */


/* ***************************   data   ***************************** */
const TOPTRACKS_LAURINDA = [
    'Friday I\'m in Love',
    'Just Like Heaven',
    'Boys Don\'t Cry',
    'Somebody Told Me',
    'Mr. Brightside',
    'Smile Like You Mean It',
    'Blue Monday',
    'Bizarre Love Triangle',
    'Ceremony'
]


const TOPTRACKS_CURE = [
    'Friday I\'m in Love',
    'Just Like Heaven',
    'Boys Don\'t Cry'
]

const TOPTRACKS_KILLERS = [
    'Somebody Told Me',
    'Mr. Brightside',
    'Smile Like You Mean It'
]

const TOPTRACKS_NEWORDER = [
    'Blue Monday',
    'Bizarre Love Triangle',
    'Ceremony'
]

const USER_LAURINDA = [
    {
        "username": "laurinda",
        "artists": [
            "muse",
            "killers",
            "new order"
        ]
    }
]


const LAURINDA = [
    {
        "username": "laurinda",
        "artists": [
            "new order"
        ]
    }
]