'use strict'

const vinyl = require('./lib/vinyl')
const users = require('./lib/users')
const lastfm = require('./lib/lastfm')


/*vinyl.getTopTracks('gamboa', 3, (err, tracks) => {
    if(err) console.log(err)
    else
        tracks.forEach(t => console.log(t))   
})*/


vinyl.addArtist('diogo', 'Metallica', (err, user)=>{
    if(err)console.log(err)
    else console.log(user)
})

/*lastfm.searchArtist('muse',(err,artist) =>{
    if(err) console.log(err)
    else console.log(artist)
})*/

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
/*users.addUser('diogo', (err, data) => {
    if(err) console.log(err)
    else console.log(data);
});`*/