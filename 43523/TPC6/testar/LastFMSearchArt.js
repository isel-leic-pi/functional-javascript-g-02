'use strict'

const lastfm = require('C:\\Users\\Joana\\Desktop\\PI2\\TPC6\\lib\\lastfm')

lastfm.searchArtist('p',(err,artist) =>{
    if(err) console.log(err)
    else console.log(artist)
})   

lastfm.searchArtist('Air',(err,artist) =>{
    if(err) console.log(err)
    else console.log(artist)
})   

lastfm.searchArtist('kjdskshksjds',(err,artist) =>{
    if(err) console.log(err)
    else console.log(artist)
})   