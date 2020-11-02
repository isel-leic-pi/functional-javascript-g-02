'use strict'

const vinyl = require('./lib/vinyl')
const lastfm = require('./lib/lastfm')
const users = require('./lib/users')

/* vinyl.getTopTracks('gamboa', 3, (err, tracks) => {
    if(err) console.log(err)
    else
        tracks.forEach(t => console.log(t))   
}) */

 /*  lastfm.searchArtist('p',(err,artist) =>{
    if(err) console.log(err)
    else console.log(artist)
})   */

/* users.addUser('Gamboa',(err,artist) =>{
    if(err) console.log(err)
    else console.log(artist)
}) */

/* const array = [
    {
      username: 'gamboa',
      artists: [
        'muse',
        'killers',       
        'new order',     
        'Franz Ferdinand',
        'Faith no more'
      ]
    },
    { username: 'Gamboa', artists: [] }
  ]

  users.addArtist('Gamboa','artist2',(err,artist)=>{
    if(err) console.log(err)
    console.log(artist)
  }) */

  vinyl.addArtist('gamboa','Air',(err,artist) =>{
    if(err) console.log(err)
   // console.log(artist)
  })

/*
lastfm.getTopTracks('franz ferdinand', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/
/*
users.getUser('gamboa', (err, user) => {
    if(err) console.log(err)
    else
        user.artists.forEach(art => console.log(art))
})
users.getUser('kaskdh', (err, user) => {
    if(err) console.log(err)
    else
        user.artists.forEach(art => console.log(art))
})
*/
