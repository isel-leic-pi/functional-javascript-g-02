'use strict'

const urllib = require('urllib')
const vinyl = require('./../lib/repo/vinyl')
const lastfm = require('./../lib/repo/lastfm')
const users = require('./../lib/repo/users').init()

const fs = require('fs')

jest.mock('urllib')
jest.mock('./../lib/repo/users')
jest.mock('./../lib/repo/lastfm')


/* ***************************     getTopTracks     ***************************** */

test('test users module getTopTracks successfuly', done => {
    // TypeError: Cannot read property 'getUser' of undefined

    lastfm.getTopTracks.mockImplementationOnce((artist, cb) => {
        fs.readFile('./mocks/toptrackes-newOrder.json', cb)
        
        users.getUser.mockImplementationOnce((user, cb) => {
            cb(null, LAURINDA)
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
})


/* ***************************     addArtist     ***************************** */


/* ***************************   data   ***************************** */
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

const USER = [
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