
'use strict'

const lastfm = require('./../lib/repo/lastfm')
const urllib = require('urllib')
const fs = require('fs')

jest.mock('urllib')

const cure = [
    'Friday I\'m in Love',
    'Just Like Heaven',
    'Boys Don\'t Cry'
]

test('test users module getTopTracks successfuly', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        fs.readFile('./__tests__/mocks/toptracks-cure.json', cb)
    })
    lastfm.getTopTracks('cure', (err, tracks) => {
        cure.forEach((t, i) => {
            expect(t).toBe(tracks[i])
        })
        done()
    })
})

test('test users module getTopTracks not successfuly', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        fs.readFile('./__tests__/mocks/toptracks-error.json', cb)
    })
    lastfm.getTopTracks('cure', (err, tracks) => {
        expect(err).toBeTruthy()
        done()
    })
})

test('test users module getTopTracks not successfuly connection', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        cb(new Error())
    })
    lastfm.getTopTracks('cure', (err, tracks) => {
        expect(err).toBeTruthy()
        done()
    })
})

/* ****************     *********************    **************** */
const pink = [
    'Pink Floyd',
    'Pink',
    'Ariel Pink'
]

test('test users module searchArtist successfuly', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        fs.readFile('./__tests__/mocks/searchArtist-pink.json', cb)
    })
    lastfm.searchArtist('pink', (err, artists) => {
        pink.forEach((a, i) => {
            expect(a).toBe(pink[i])
        })
        done()
    })
})

test('test users module searchArtist not successfuly', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        fs.readFile('./__tests__/mocks/searchArtist-error.json', cb)
    })
    lastfm.searchArtist('<zxcfhjkl', (err, artists) => {
        expect(err).toBeTruthy()
        done()
    })
})

test('test users module searchArtist not successfuly connection', done => {
    urllib.request.mockImplementationOnce((url, cb) => {
        cb(new Error())
    })
    lastfm.searchArtist('<zxcfhjkl', (err, artists) => {
        expect(err).toBeTruthy()
        done()
    })
})